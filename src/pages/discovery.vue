<template>
  <div>
    <top-bar></top-bar>
    <div class="body-wrapper">
      <div class="discovery-left">
        <navbar :isSingle="true"></navbar>
        <tab-container v-model="topSelected">
          <tab-container-item itemId="0">
            <article-item v-for="item,index in articles" :title="item" :isDetail="index == 0"
                          :isDivide="index != 4"></article-item>
          </tab-container-item>
        </tab-container>

        <navbar :isSingle="false" v-model="hotSelected">
          <tab-item itemId="0">今日最热</tab-item>
          <tab-item itemId="1">本月最热</tab-item>
        </navbar>
        <tab-container v-model="hotSelected">
          <tab-container-item itemId="0">
            <brief-module v-for="item in dayHots" :info="item"></brief-module>
          </tab-container-item>
          <tab-container-item itemId="1">
            <brief-module v-for="item in monthHots" :info="item"></brief-module>
          </tab-container-item>
        </tab-container>
      </div>
      <div class="discovery-right">
        <item-card :itemInfo="testInfo[0]"></item-card>
        <item-card :itemInfo="testInfo[1]"></item-card>
        <item-card :itemInfo="testInfo[2]"></item-card>
        <div class="discovery-right-foot">
          <span>
            刘看山<i class="iconfont icon-point"></i>
            知乎指南<i class="iconfont icon-point"></i>
            建议反馈<i class="iconfont icon-point"></i>
            移动应用 <br/>
            加入知乎<i class="iconfont icon-point"></i>
            知乎协议<i class="iconfont icon-point"></i>
            举报投诉<i class="iconfont icon-point"></i>
            联系我们 <br/>
            © 2018 知乎
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  import TopBar from '../components/common/TopBar'
  import BriefModule from '../components/common/BriefModule'
  import ItemCard from '../components/common/ItemCard'
  import Navbar from '../components/common/tab/Navbar'
  import TabContainer from '../components/common/tab/TabContainer'
  import TabContainerItem from '../components/common/tab/TabContainerItem'
  import ArticleItem from '../components/common/ArticleItem'
  import TabItem from '../components/common/tab/TabItem'

  let imgUrl0 = require('../assets/img/yz0.jpg');
  let imgUrl1 = require('../assets/img/yz1.jpg');
  let imgUrl2 = require('../assets/img/ht0.jpg');
  let imgUrl3 = require('../assets/img/ht1.jpg');
  let imgUrl4 = require('../assets/img/ht2.jpg');

  let testInfo = [
    {
      head: ['热门圆桌', '更多圆桌 >>'],
      items: [
        {imgUrl: `url(${imgUrl0})`, name: '成为建筑师'},
        {imgUrl: `url(${imgUrl1})`, name: '都是过敏惹的祸'}
      ]
    },
    {
      head: ['热门话题', '更多话题 >>'],
      items: [
        {imgUrl: `url(${imgUrl2})`, name: '神器'},
        {imgUrl: `url(${imgUrl3})`, name: '机器学习'},
        {imgUrl: `url(${imgUrl4})`, name: '企业并购'}
      ]
    },
    {
      head: ['热门收藏', '换一换'],
      items: [
        {name: '你丫才美工'},
        {name: '牛人集中营'},
        {name: 'Leon带逛'},
        {name: '嗯。我眼中的心理'},
        {name: '论一个段子手的自我修养'}
      ]
    },
  ];

  let articles = [
    {title: '【记录LPL五周年】阿布——五年沧桑后的匆匆回眸', tag: ''},
    {title: '51信用卡递交上市申请 信用卡市场的另类赢家', tag: '文章'},
    {title: '中国造出世界最大3D砂型打印机，猜一猜它究竟能干啥？', tag: '了不起的中国制造'},
    {title: '复活节：家长们请当心这些“亲子陋习”和“糖果陷阱”', tag: '爱丽丝与奇妙豆：北美幼儿教育'},
    {title: '如何看待《奇葩大会》第二季第2集中刘可乐双相情感障碍的病症？', tag: '问答'},
  ];

  export default {
    components: {TopBar, BriefModule, ItemCard, Navbar, TabContainer, TabContainerItem, ArticleItem, TabItem},
    data() {
      return {
        testInfo: testInfo,
        topSelected: "0",
        articles: articles,
        hotSelected: "0",
        answerNum: 10,
        dayHots: [],
        monthHots: [],
        dayNum: 0,
        monthNum: 0,
      }
    },
    created() {
      this.initData();
    },
    mounted() {
      this.initEvents();
    },
    methods: {
      initData() {
        this.updateHots('month');
        this.updateHots('day');
      },
      initEvents() {
        let _this = this;

        let bottomRange = 50;  // 距下边界长度/单位px
        let maxNum = 20;
        $(window).scroll(function() {
          // console.log('i am scroll~~~~~');
          let scrollPos = $(window).scrollTop();    // 滚动条距顶部距离(页面超出窗口的高度)
          let totalHeight = parseFloat($(window).height()) + parseFloat(scrollPos);

          if (($(document).height()-bottomRange) <= totalHeight) {
            // _this.answerNum += 10;
            if (_this.hotSelected === '0') {
              if (_this.dayNum < maxNum - 5) {
                _this.dayNum += 5;
                _this.updateHots('day');
              }
            } else {
              if (_this.dayNum < maxNum - 5) {
                _this.monthNum += 5;
                _this.updateHots('month');
              }
            }
          }
        });
      },
      updateHots(hotType) {
        let _this = this;
        let offset = hotType === 'day' ? this.dayNum : this.monthNum;
        let url = 'http://localhost:2233/api/v1/hots?offset=' + offset + '&type=' + hotType;
        this.$http.get(url).then(function (response) {
          console.log(response);
          let result =response.data;
          // console.log('result: ', result)
          if (result.code === '0') {
            console.log(result.message);
          } else {
            result.forEach(val => {
              if (hotType === 'day') {
                _this.dayHots.push(val);
              } else {
                _this.monthHots.push(val);
              }
            })
          }
        }).catch(function (error) {
          console.log('error: ', error);
        });
      }
    }
  }
</script>

<style lang="less">
  .body-wrapper {
    position: relative;
    top: 45px;
    width: 1080px;
    margin: auto;
    display: flex;  // transform可能导致position:fixed无效

    .discovery-left {
      width: 670px;
      margin-top: 10px;
      margin-bottom: 300px;
    }
    .discovery-right {
      flex: 1;
      margin-top: 10px;
      /*background: dodgerblue;*/
    }
    .discovery-right-foot {
      margin: 16px 16px 16px 40px;
      width: 280px;
      font-size: 13px;
      color: #aaa;
      line-height: 24px;
    }
  }
</style>
