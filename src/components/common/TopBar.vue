<template>
  <div class="top-wrapper">
    <div class="top-main-wrapper">
      <div class="top-search">
        <div class="top-logo"></div>
        <div class="top-input">
          <el-input placeholder="搜索你感兴趣的内容...">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="top-navbar">
        <span v-for="item in navBar" :class="{'top-navbar-active': activeIndex==item.index}">{{item.text}}</span>
      </div>
      <div class="top-user">
        <div class="top-user-answer">
          <my-button>提问</my-button>
        </div>
        <div class="top-user-info" id="userInfo">
          <div class="top-user-avatar"></div>
          <span>{{username}}</span>
          <div class="top-user-info-drop" v-if="isDropShow">
            <div v-for="item in dropBar">
              <i :class="item.icon"></i>
              <span>{{item.text}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyButton from './MyButton'

  let navBar = [
    {text: '首页', index: '0'},
    {text: '话题', index: '1'},
    {text: '发现', index: '2'},
    {text: '消息', index: '3'},
  ];

  let dropBar = [
    {text: '我的主页', index: '0', icon: 'iconfont icon-avatar'},
    {text: '私信', index: '0', icon: 'iconfont icon-xinfeng'},
    {text: '设置', index: '0', icon: 'iconfont icon-set1'},
    {text: '退出', index: '0', icon: 'iconfont icon-hkquit'}
  ]

  export default {
    components: {MyButton},
    data() {
      return {
        navBar: navBar,
        dropBar: dropBar,
        username: 'to mo',
        activeIndex: '2',
        isDropShow: false,
      }
    },
    mounted() {
      this.initEvent();
    },
    methods: {
      initEvent() {
        let userInfo = document.getElementById('userInfo');

        let that = this;

        userInfo.addEventListener('mouseenter', function() {
          setTimeout(function () {that.isDropShow = true}, 10);
        });
        userInfo.addEventListener('mouseleave', function() {
          setTimeout(function () {that.isDropShow = false}, 10);
        });
      }
    }
  }
</script>

<style lang="less">
  .top-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    background: #0767c8;
    z-index: 999;

    .top-main-wrapper {
      margin: auto;
      height: 45px;
      /*background: yellow;*/
      display: flex;
      width: 1060px;

      .top-search {
        width: 40%;
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
      .top-logo {
        height: 30px;
        width: 61px;
        background: url('../../assets/img/logo.png') no-repeat;
        display: inline-block;
        margin-right: 20px;
      }
      .top-input {
        display: inline-block;
      }
      .top-navbar {
        line-height: 44px;
        color: #fff;
        text-align: center;
      }
      .top-navbar span {
        display: inline-block;
        width: 54px;
        cursor: pointer;
        font-size: 14px;
      }
      .top-navbar-active {
        background: #259;
      }
      .top-user {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      .top-user-answer {
        margin: 0 20px;
      }
      .top-user-info {
        position: relative;
        height: 45px;
        margin-right: 60px;
        padding-right: 26px;
        color: #fff;
        display: flex;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
      }
      .top-user-info:hover {
        background: #259;
      }
      .top-user-avatar {
        display: inline-block;
        background: url('../../assets/img/avatar.jpg') center no-repeat;
        width: 40px;
        height: 40px;
      }
      .top-user-info-drop {
        position: absolute;
        left: 0;
        top: 45px;
        width: 107px;
        background: #259;
        display: flex;
        flex-direction: column;
        border-top: 1px solid #104E8B;
      }
      .top-user-info-drop div {
        height: 40px;
        line-height: 40px;
        display: flex;
        border-bottom: 1px solid #104E8B;
      }
      .top-user-info-drop div:hover {
        background: #0767c8;
      }
      .top-user-info-drop i {
        width: 38px;
        text-align: center;
      }
    }

    .el-input {
      width: 300px;
    }
    .el-input__inner {
      height: 32px;
      line-height: 32px;
    }
  }
</style>
