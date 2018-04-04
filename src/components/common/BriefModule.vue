<!--发现页面问题条目组件-->
<template>
  <div class="brief-wrapper">
    <div class="title">
      <h4>这是一个问题？</h4>
    </div>
    <div class="content">
      <div class="up-count">
        <span>16K</span>
      </div>
      <div class="detail">
        <div class="userInfo">
          <p>斯丢匹德，</p><span>梧桐垃圾灰尘和各式各样的杂货店</span>
        </div>
        <div class="answer" v-if="!isShowAll" @click="isShowAll = true">
          我就是这样一类人 在饭店吃饭，和服务员说话特别客气，也从不大声吆喝任何人。在路上只要遇到外地人问路，不管我是否在忙，都会停下来给对方指路。同事在工作中遇到事情需要我帮忙，我就会毫不犹豫过去。单位排轮休表，其他同事要和我串休，没有特殊情况我…
          <a> 显示全部</a>
        </div>
        <div v-else>
          <span class="answer-agreement"><a>16K 人赞同</a></span>
          <quill-editor class="quill"
                        v-model="answerTextTest"
                        :options="editorOption">
          </quill-editor>
        </div>

        <div class="foot">
          <i class="iconfont icon-pluslarge"><a> 关注问题 </a>&ensp;</i>
          <i class="iconfont icon-speechbubble" v-if="!isShowComment" @click="isShowComment = true">
            <a> 1132 条评论 </a>&ensp;
          </i>
          <i class="iconfont icon-speechbubble" v-else @click="isShowComment = false"><a> 收起评论 </a>&ensp;</i>
          <i class="iconfont icon-aixin"><a> 感谢 </a>&ensp;</i>
          <i class="iconfont icon-fenxiang"><a> 分享 </a>&ensp;</i>
          <i class="iconfont icon-shuqianbookmark29"><a> 收藏 </a></i>
          <i class="iconfont icon-point"><a> 没有帮助 </a></i>
          <i class="iconfont icon-point"><a> 举报 </a></i>
          <i class="iconfont icon-point"><a> 作者保留权利</a>&ensp;</i>
          <i class="iconfont icon-zelvgongyongshouqi1" v-if="isShowAll" @click="isShowAll = false"><a> 收起</a></i>
        </div>
        <div class="comment" v-if="isShowComment">
          <div class="triangle"></div>
          <div class="comment-item" v-for="i in 10">
            <div class="avatar">
              <img src="../../assets/img/avatar.jpg">
            </div>
            <div class="comment-detail">
              <div class="comment-detail-username">
                索尔斯克亚
              </div>
              <div class="comment-comment">
                so good this is
              </div>
              <div class="comment-detail-foot">
                <div>
                  <span>30 天前</span>
                </div>
                <span>1123 赞</span>
              </div>
            </div>
          </div>
          <div class="comment-paging">
            <paging :total='100' :display="10"
                          :current-page='1'></paging>
          </div>
          <div class="comment-edit">
            <!--<input type="text" placeholder="写下你的评论...">-->
            <div class="comment-editor">
              <quill-editor class="quill"
                            v-model="commentText"
                            :options="editorOption">
              </quill-editor>
            </div>
          </div>
          <div class="comment-btn">
            <span>取消</span> &ensp;
            <button type="button" class="comment-affirm-btn">评论</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Paging from './Paging'

  let answerTextTest = '';
  for (let i = 0; i < 20; i++) {
    answerTextTest += `<div>我是第 ${i} 自然段</div>`;
  }

  export default {
    data() {
      return {
        isShowComment: false,
        commentText: '',
        answerTextTest: answerTextTest,
        isShowAll: false,
        editorOption: {
          theme: 'bubble',
          placeholder: "写下你的评论...",
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'font': [] }],
              [{ 'align': [] }],
              ['link', 'image'],
              ['clean']
            ]
          }
        }
      }
    },
    components: {Paging}
  }
</script>

<style lang="less">
  .brief-wrapper {
    max-width: 700px;
    margin: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .brief-wrapper {
    .content {
      display: flex;
    }
    .title h4{
      margin: 10px;
      font-size: 15px;
      color: #104E8B;
    }
    .up-count {
      width: 60px;
      text-align: center;
    }
    .up-count span {
      color: dodgerblue;
      font-size: 14px;
      background: rgba(176, 226, 255, 0.5);
      padding: 4px;
      border-radius: 2px;
    }
    .detail {
      flex: 1;
      position: relative;
    }
    .userInfo {
      margin-bottom: 16px;
      font-size: 14px;
    }
    .userInfo p {
      display: inline-block;
      margin: 0;
      font-weight: bold;
    }
    .userInfo span {
      color: #999;
    }
    .answer-agreement {
      font-size: 11px;
      color: #999;
      position: absolute;
      top: 23px;
      left: 0;
      cursor: pointer;

      a:hover {
        text-decoration: underline;
        color: #666;
      }
    }
    .answer {
      font-size: 14px;
      margin-bottom: 16px;
      cursor: pointer;
    }
    .answer a {
      color: #104E8B;
      font-size: 12px;
      padding: 2px;
      border-radius: 2px;
    }
    .answer a:hover {
      background: rgba(176, 226, 255, 0.2);
    }
    .foot {
      font-size: 13px;
      color:#999;
    }
    .foot a {
      cursor: pointer;
    }
    .foot a:hover {
      text-decoration: underline;
      color: dodgerblue;
    }
    .foot i {
      font-size: 13px;
    }

    .comment {
      position: relative;
      max-width: 520px;
      border: 1px solid #ddd;
      border-radius: 10px;
      margin-top: 20px;
      padding: 6px 12px 20px 12px;
    }
    .triangle {
      width: 10px;
      height: 10px;
      position: absolute;
      background: #fff;
      border-left: 1px solid #ddd;
      border-top: 1px solid #ddd;
      transform: rotate(45deg);
      left: 120px;
      top: -6px;
    }
    .comment-item {
      display: flex;
      padding-bottom: 16px;
      border-bottom: 1px solid #eee;
      margin-top: 16px;
    }
    .avatar {
      width: 46px;
      text-align: center;
      position: relative;
      top: 6px;
    }
    .comment-detail {
      font-size: 14px;
      flex: 1;
    }
    .comment-detail-username {
      margin-bottom: 6px;
    }
    .comment-comment {
      margin-bottom: 10px;
    }
    .comment-detail-username {
      color: #104E8B;
    }
    .comment-detail-foot {
      font-size: 12px;
      color: #999;
      display: flex;
      justify-content: space-between;
    }
    .comment-paging {
      height: 50px;
      border-top: 1px solid #eee;
      border-bottom: 2px solid #eee;
    }
    .comment-edit {
      text-align: center;
    }
    .comment-edit input {
      display: block;
      margin: 12px auto;
      width: 90%;
      min-height: 34px;
      outline: 0;
      border: 2px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 8px 16px;
    }
    .comment-editor {
      width: 90%;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
      min-height: 34px;
      margin: 12px auto;
    }
    .comment-btn {
      text-align: right;
      box-sizing: border-box;
    }
    .comment-btn span {
      color: #999;
      font-size: 14px;
      cursor: pointer;
    }
    .comment-btn span:hover {
      color: #666;
    }
    .comment-btn button {
      font-size: 14px;
      color: #fff;
      height: 32px;
      text-decoration: none!important;
      display: inline-block;
      text-align: center;
      padding: 4px 10px;
      cursor: pointer;
      border-radius: 3px;
      white-space: nowrap;
      box-sizing: border-box;
      background: linear-gradient(to bottom,#1d7fe2,#0865c2);
      border: 1px solid #0D6EB8;
      box-shadow: 0 1px 0 rgba(255,255,255,.2) inset, 0 1px 0 rgba(0,0,0,.2);
    }
  }
</style>
