<template>
  <div class="home-wrapper">
    <top-bar></top-bar>
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
        <div v-for="i in 2" class="main-item">
          <brief-module></brief-module>
        </div>
      </div>
    </div>
    <div class="home-right">
      <div style="height:30px">

      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from '../components/common/TopBar'
  import BriefModule from '../components/common/BriefModuleHome'

  let leftMenu = [
    {text: '提问', icon: 'iconfont icon-wenhao'},
    {text: '回答', icon: 'iconfont icon-wenzhang'},
    {text: '写文章', icon: 'iconfont icon-write'},
    {text: '写想法', icon: 'iconfont icon-infinite'}
  ];

  export default {
    components: {TopBar, BriefModule},
    data() {
      return {
        leftMenu: leftMenu
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
        }
      }
    }

    .home-right {
      width: 300px;
      margin-top: 10px;
      background: #fff;
    }
  }
</style>
