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
          <a> 阅读全文<i class="iconfont icon-bottom"></i></a>
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
      <div class="other">
        <i class="iconfont icon-pinglun">&nbsp;<span>94 条评论</span></i>
      </div>
      <div v-for="item in foots" class="other">
        <i :class="item.icon">&nbsp;<span>{{item.text}}</span></i>
      </div>
      <div class="more">
        <i class="iconfont icon-more1" @click="isShowMore=!isShowMore"></i>
        <div class="more-wrapper" v-if="isShowMore">
          <div class="more-item">
            没有帮助
          </div>
          <div class="more-item">
            举报
          </div>
          <div class="more-item">
            申请授权
          </div>
        </div>
        <div class="more-util" v-if="isShowMore"></div>
      </div>
    </div>
    <div class="comment-wrapper">
      <div class="comment-main-wrapper">
        <div class="comment-head">
          <p>521 条评论</p>
          <i class="iconfont icon-web-icon-">&nbsp;<a>切换为时间排序</a></i>
        </div>
        <comment-home>
        </comment-home>
      </div>
    </div>
  </div>
</template>

<script>
  import CommentHome from './CommentHome'

  let foots = [
    {text: '分享', icon: 'iconfont icon-emizhifeiji'},
    {text: '收藏', icon: 'iconfont icon-shoucang'},
    {text: '感谢', icon: 'iconfont icon-aixin1'}
  ];

  export default {
    components: {CommentHome},
    data() {
      return {
        foots: foots,
        isShowMore: false,
      }
    }
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

      .other {
        margin-left: 20px;
        color: #77839c;
        cursor: pointer;

        :hover {
          color: #8590a6;
        }

        i {
          font-size: 14px;
        }
      }
      .more {
        position: relative;
        margin-left: 20px;
        color: #77839c;
        cursor: pointer;
      }
      .more-wrapper {
        position: absolute;
        left: -40px;
        top: 36px;
        width: 96px;
        border-radius: 4px;
        border: 1px solid #ddd;
        box-shadow: 0 2px 10px #ddd;
        display: flex;
        flex-direction: column;
        background: #fff;

        .more-item {
          height: 42px;
          line-height: 42px;
          text-align: center;
          font-size: 14px;
        }
        .more-item:hover {
          color: #8590a6;
          background: #fdfdfd;
        }
      }
      .more-util {
        position: absolute;
        left: 1px;
        top: 30px;
        width: 12px;
        height: 12px;
        border-top: 1px solid #ddd;
        border-left: 1px solid #ddd;
        transform: rotate(45deg);
        background: #fff;
      }
    }

    .comment-wrapper {
      border: 1px solid #eee;
      border-radius: 4px;
      margin: 14px 0;

      .comment-main-wrapper {
        padding: 16px;
      }
      .comment-head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 18px;

        p {
          margin: 0;
          font-weight: bold;
          font-size: 15px;
        }
        i {
          color: #77839c;
          font-size: 15px;
          cursor: pointer;

          :hover {
            color: #8590a6;
          }
        }
      }
    }
  }
</style>
