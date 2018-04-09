<template>
  <div class="profile-card-wrapper">
    <div class="profile-card-top">
      <div class="profile-avatar">
      </div>
      <div class="profile-top-info">
        <p>成为建筑师</p>
        <span>
          作为建筑的创作者，建筑师兼具艺术家与工程师的不同特质，自由而又严谨。从建筑学专业学生，到…
        </span>
        <div class="profile-group-info">
          <p>组织机构：<span>知乎圆桌</span></p>
          <p>嘉宾：<span>陈语岚、蓬蕊、皮肤科徐宏俊医生、柏舟、禹汐、Gigi、胡晓波</span></p>
        </div>
      </div>
    </div>
    <div class="profile-card-bottom">
      <div class="bottom-left">
        <span class="bottom-left-left"><p>70</p>动态</span>
        <span class="bottom-left-center"><p>51</p>问题</span>
        <span class="bottom-left-right"><p>2583</p>关注者</span>
      </div>
      <div>
        <my-button>关注</my-button>
      </div>
    </div>
  </div>
</template>

<script>
  import MyButton from './MyButton'

  export default {
    components: {MyButton}
  }
</script>

<style lang="less" scoped>
  .profile-card-wrapper {
    width: 380px;
    box-sizing: border-box;
    padding: 16px 12px 12px 16px;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 4px;

    .profile-card-top {
      display: flex;

      .profile-avatar {
        width: 50px;
        height: 50px;
        background-size: contain;
        border-radius: 4px;
        margin-right: 12px;
        background: url("../../assets/img/yz0.jpg");
      }
      .profile-top-info {
        flex: 1;
      }
      .profile-top-info p {
        margin: 4px 0;
        font-size: 14px;
        color: #259;
      }
      .profile-top-info span {
        font-size: 12px;
        color: #000;
      }
      .profile-group-info {
        border-top: 1px solid #eee;
        margin-top: 12px;
        padding-top: 8px;
      }
      .profile-group-info p {
        color: #888;
        font-size: 12px;
      }
    }

    .profile-card-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;

      .bottom-left {
        display: flex;
        text-align: center;
      }
      .bottom-left p {
        margin: 0 0 6px;
        color: #000;
        font-weight: bold;
        font-size: 14px;
      }
      .bottom-left span {
        color: #aaa;
        font-size: 14px;
      }
      .bottom-left-left {
        padding: 8px 16px 8px 0;
      }
      .bottom-left-center {
        padding: 8px 16px;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
      }
      .bottom-left-right {
        padding: 8px 0 8px 16px;
      }
    }
  }
</style>
