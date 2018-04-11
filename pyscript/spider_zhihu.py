# -*- coding:utf-8
import urllib2
from bs4 import BeautifulSoup  # 解析网页
import urllib
import json

from pymongo import MongoClient

import sys
reload(sys)
sys.setdefaultencoding('utf8')

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36',
    'Host': 'www.zhihu.com',
    'Referer': 'https://www.zhihu.com',
    'Content-Type': 'text/html; charset=utf-8',
}


def get_hot(hot_type):
    global headers
    # offset-> 0,5,10,...
    # type-> day/month
    get_url = 'https://www.zhihu.com/node/ExploreAnswerListV2?params={"offset":' + '0' + ',"type":' + '"' + hot_type \
              + '"' + '}'
    # 加入headers产生乱码,目前未知原因
    req = urllib2.Request(url=get_url)
    res = urllib2.urlopen(req)
    res = res.read()
    soup = BeautifulSoup(res, 'html.parser')
    hots = []
    for single_div in soup.find_all('div', class_='explore-feed feed-item'):
        hot_id = single_div['data-offset']
        question_name = single_div.find('h2').find('a').text   # 问题名称
        question_url = 'www.zhihu.com' + single_div.find('link')['href']   # 问题连接
        vote_bar = single_div.find('div', class_='zm-votebar')
        vote_up = vote_bar.find('button', class_='up').find('span', class_='count').get_text()   # 赞同数
        answer_head = single_div.find('div', class_='answer-head')
        user_name = answer_head.find('a', class_='author-link').text   # 用户名
        user_tag = answer_head.find('span', class_='bio')['title']   # 用户个性签名
        answer_content = single_div.find('div', class_='zm-item-rich-text expandable js-collapse-body')
        answer_detail = answer_content.find('textarea', class_='content').get_text()   # 答案内容
        answer_brief = answer_content.find('div', class_='zh-summary summary clearfix')
        brief_text = answer_brief.get_text()
        brief_img = answer_brief.find('img')['src'] if answer_brief.find('img') else ''
        edit_time = answer_content.find('p', class_='visible-expanded').find('a').get_text()   # 答案编辑时间
        single_hot = {
          'hot_type': hot_type,
          'hot_id': int(hot_id),
          'question_name': question_name,
          'question_url': question_url,
          'vote_up': vote_up,
          'user_name': user_name,
          'user_tag': user_tag,
          'answer_detail': answer_detail,
          'answer_brief_img': brief_img,
          'answer_brief_text': brief_text,
          'edit_time': edit_time
        }
        hots.append(single_hot)

        db = connect_db()
        collection = db.hots
        collection.insert_many(hots)
        break


def connect_db():
    client = MongoClient('localhost', 27017)
    db = client.zhihu
    return db


if __name__ == '__main__':
    get_hot('month')


