<template>
  <div>
    <top-bar actived="3"/>
    <div class="message-wrapper">
      <div class="left-wrapper">
        <div class="left-top">
          <h4>全部消息</h4>
        </div>
        <div class="left-main">
          您收到的消息会显示在这里
        </div>
      </div>
      <div class="right-wrapper">

      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from '../components/common/TopBar'

  export default {
    components: {TopBar}
  }
</script>

<style lang="less">
  .message-wrapper {
    position: relative;
    top: 45px;
    width: 100%;
    min-width: 1080px;
    display: flex;
    justify-content: center;

    .left-wrapper {
      width: 700px;
      margin-top: 10px;

      .left-top {
        border-bottom: 1px solid #ddd;

        h4 {
          margin: 12px 0;
          font-size: 14px;
        }
      }

      .left-main {
        height: 200px;
        line-height: 200px;
        text-align: center;
        font-size: 13px;
        color: #999;
      }
    }

    .right-wrapper {
      width: 270px;
      margin-left: 50px;
      margin-top: 30px;
    }
  }
</style>
