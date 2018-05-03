<template>
  <div class="home-wrapper">
    <top-bar actived="0" />
    <div class="home-left">
      <div class="home-left-top">
        <div class="home-left-top-left">
          <span v-for="item in leftMenu"><i :class="item.icon"></i>{{item.text}}</span>
        </div>
        <div class="home-left-top-right">
          <span>草稿</span>
        </div>
      </div>
      <div class="home-left-main">
        <div v-for="i in 14" class="main-item">
          <brief-module :key="i"/>
        </div>
      </div>
    </div>
    <div class="home-right">
      <div class="home-right-position">
        <div class="home-right-top">
          <div v-for="item,index in rightMenu" class="home-label-wrapper">
            <my-label :key="index" :img="item.icon" :text="item.text" :color="item.color"/>
          </div>
        </div>
        <div class="home-right-middle">
          <div v-for="item in rightSecond" class="home-right-item">
            <div>
              <i :class=item.icon>&nbsp;&nbsp;<span>{{item.text}}</span></i>
            </div>
            <div>
              <span>2</span>
            </div>
          </div>
        </div>
        <div class="home-right-foot">
          <span>
            刘看山<i class="iconfont icon-point"></i>
            知乎指南<i class="iconfont icon-point"></i>
            知乎协议<i class="iconfont icon-point"></i>
            隐私政策 <br/>
            应用<i class="iconfont icon-point"></i>
            工作<i class="iconfont icon-point"></i>
            申请开通知乎机构号 <br/>
            侵权举报<i class="iconfont icon-point"></i>
            网上有害信息举报专区 <br/>
            违法和不良信息举报：010-82716601 <br/>
            儿童色情信息举报专区 <br/>
            联系我们 © 2018 知乎
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from '../components/common/TopBar'
  import BriefModule from '../components/common/BriefModuleHome'
  import MyLabel from '../components/common/MyLabel'

  let leftMenu = [
    {text: '提问', icon: 'iconfont icon-wenhao'},
    {text: '回答', icon: 'iconfont icon-wenzhang'},
    {text: '写文章', icon: 'iconfont icon-write'},
    {text: '写想法', icon: 'iconfont icon-infinite'}
  ];

  let rightMenu = [
    {text: 'Live', icon: 'iconfont icon-lightningbshandian', color: 'rgb(255, 207, 0)'},
    {text: '书店', icon: 'iconfont icon-shu', color: 'rgb(67, 212, 128)'},
    {text: '圆桌', icon: 'iconfont icon-bulb', color: 'rgb(0, 132, 255)'},
    {text: '专栏', icon: 'iconfont icon-pen', color: 'rgb(15, 136, 235)'},
    {text: '付费咨询', icon: 'iconfont icon-qianmoney125', color: 'rgb(84, 120, 240)'},
  ];

  let rightSecond = [
    {text: '我的收藏', icon: 'iconfont icon-shoucang'},
    {text: '我关注的问题', icon: 'iconfont icon-shoucang'},
    {text: '我的邀请', icon: 'iconfont icon-shoucang'},
    {text: '我的礼券', icon: 'iconfont icon-shoucang'},
    {text: '社区服务中心', icon: 'iconfont icon-shoucang'},
    {text: '版权服务中心', icon: 'iconfont icon-shoucang'},
    {text: '公共编辑动态', icon: 'iconfont icon-shoucang'},
  ];

  export default {
    components: {TopBar, BriefModule, MyLabel},
    data() {
      return {
        leftMenu: leftMenu,
        rightMenu: rightMenu,
        rightSecond: rightSecond,
      }
    }
  }
</script>

<style lang="less">
  .home-wrapper {
    position: relative;
    top: 45px;
    width: 100%;
    min-width: 1080px;
    display: flex;
    justify-content: center;
    background: #f6f6f6;

    .home-left {
      width: 700px;
      box-sizing: border-box;
      margin-top: 10px;
      margin-right: 10px;

      .home-left-top {
        width: 100%;
        height: 54px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 10px #e6e6e6;

        .home-left-top-left {
          display: flex;
          align-items: center;

          span {
            padding: 0 14px;
          }
          i {
            color: #aaa;
            font-size: 17px;
            margin-right: 6px;
          }
        }

        .home-left-top-right {
          margin-right: 20px;
          font-size: 15px;
          cursor: pointer;

          span {
            color: #8590a6;
          }
          span:hover {
            color: #175199;
          }
        }
      }

      .home-left-main {
        width: 100%;
        margin-top: 12px;

        .main-item {
          width: 100%;
          margin-bottom: 12px;
          background: #fff;
          box-shadow: 0 2px 16px #e6e6e6;
        }
      }
    }

    .home-right {
      width: 300px;
      margin-top: 10px;

      .home-right-position {
        position: fixed;
        width: 300px;
      }

      .home-right-top {
        height: 175px;
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        box-sizing: border-box;
        padding: 10px 15px;
        box-shadow: 0 2px 16px #ddd;
        margin-bottom: 12px;
      }

      .home-label-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90px;
      }

      .home-right-middle {
        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 12px 0;
        box-shadow: 0 2px 16px #ddd;
        margin-bottom: 12px;

        .home-right-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 26px;
          color: #77839c;
          cursor: pointer;

          i {
            font-size: 14px;
          }
          span {
            font-size: 14px;
          }
        }
        .home-right-item:hover {
          background: #f5f5f5;
        }
      }

      .home-right-foot {
        color: #8590a6;
        font-size: 13px;
        line-height: 30px;
        padding-left: 4px;
      }
      /*.home-right-foot:hover {*/
        /*color: #175199;*/
      /*}*/
    }
  }
</style>
