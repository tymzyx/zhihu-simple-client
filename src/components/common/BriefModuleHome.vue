<template>
  <div class="home-brief-wrapper">
    <div class="following-agree">
      <span>王二狗赞同了回答<i class="iconfont icon-point"></i>3 小时前</span>
    </div>
    <div class="userInfo">
      <img src="../../assets/img/avatar.jpg">
      <a>绅男LEO</a><span>，写写自己的故事</span>
    </div>
    <div class="brief-main">
      <a>恋爱或两性交往中有哪些让你震惊的冷知识？</a>
      <div class="answer">
        <div>
           1 高价值的男生女生，可能很多都是没有另一半的 这个听起来可能很反直觉，但是相信大家身边都会有这样的朋友——条件一点都不差，但就是死活嫁不出去娶不进来…
          <a> 显示全部<i class="iconfont icon-bottom"></i></a>
        </div>
      </div>
    </div>
    <div class="brief-footer">
      <div class="up">
        <i class="iconfont icon-uparrow9f"></i>
        <span>2.3K</span>
      </div>
      <div class="down">
        <i class="iconfont icon-down"></i>
      </div>
      <div>
        <span>94 条评论</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less">
  .home-brief-wrapper {
    width: 100%;
    padding: 18px;
    box-sizing: border-box;

    .following-agree {
      color: #8590a6;
      font-size: 15px;
    }

    .userInfo {
      display: flex;
      align-items: center;
      margin-top: 4px;

      img {
        width: 24px;
        height: 24px;
        border-radius: 2px;
        margin-right: 10px;
      }
      span {
        color: #646464;
        font-size: 14px;
      }
      a {
        cursor: pointer;
        font-size: 15px;
      }
    }

    .brief-main {
      margin: 10px 0;

      a {
        font-size: 18px;
        font-weight: 600;
      }
    }
    .answer {
      font-size: 15px;
      cursor: pointer;
      display: flex;
      margin-top: 10px;
      line-height: 1.67;

      a {
        font-size: 15px;
        color: #175199;
        font-weight: normal;
      }

      :hover {
        color: #888;
      }
    }

    .brief-footer {
      display: flex;
      align-items: center;

      .up, .down {
        height: 30px;
        padding: 0 8px;
        line-height: 30px;
        background: rgba(176, 226, 255, 0.4);
        color: #0084ff;
        font-size: 14px;
        margin-right: 8px;
        border-radius: 2px;

        i {
          font-size: 12px;
        }
      }
    }
  }
</style>
