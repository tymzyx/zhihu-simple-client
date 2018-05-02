<template>
  <div class="comment-item-wrapper">
    <div class="comment-item-head">
      <div class="comment-item-user">
        <img :src="img"/>
        <span>&nbsp;&nbsp;查无此人</span>
      </div>
      <div class="comment-item-time">
        <span>1 年前</span>
      </div>
    </div>
    <div class="comment-item-text">
      <span>不然爆个照知友帮你鉴定下.....？</span>
    </div>
    <div class="comment-item-footer">
      <i class="iconfont dianzan"><span>362</span></i>
      <i v-for="item in foots" :class="item.icon"><span>{{item.text}}</span></i>
    </div>
  </div>
</template>

<script>
  let img = require('../../assets/img/avatar.jpg');
  let foots = [
    {text: '回复', icon: 'iconfont icon-icon_reply'},
    {text: '踩', icon: 'iconfont icon-cai'},
    {text: '举报', icon: 'iconfont icon-icon_tip_off'}
  ];

  export default {
    data() {
      return {
        img: img,
        foots: foots
      }
    }
  }
</script>

<style lang="less">
  .comment-item-wrapper {
    width: 100%;
    box-sizing: border-box;
    margin: 12px 0;

    .comment-item-head, .comment-item-text, .comment-item-footer {
      margin: 8px 0;
    }
    .comment-item-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .comment-item-user {
      display: flex;
      align-items: center;

      span {
        font-size: 15px;
      }
    }
    .comment-item-time {
      color: #8590a6;
      font-size: 14px;
    }

    .comment-item-text {
      font-size: 15px;
    }

    .comment-item-footer {

      i {
        color: #77839c;
        font-size: 14px;
      }
    }
  }
</style>
