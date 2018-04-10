<template>
  <div class="article-item-wrapper" :class="{'set-divide': isDivide}">
    <div class="article-title">
      <h4>{{title.title}}</h4>
      <span>{{title.tag}}</span>
    </div>
    <div class="article-brief-detail" v-if="isDetail">
      <div class="avatar"></div>
      <div class="info">
        <div class="userInfo">
          <p>朵拉陈，</p><span>心理学话题优秀回答者<i class="iconfont icon-point"></i>美国执业心理咨询师</span>
        </div>
        <div class="brief">
          <span>就个人经验来说：心理咨询的效果主要看来访者与心理咨询师之间的互动关系。如果来访者和心理咨询师的性格、咨询风格、擅长方向、流派都正好契合，或者来访者以非常开放的态度面对心理咨询师，并且愿意付出努力探索自我，那心理咨询会达到它应该达到的效果。…</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'isDetail', 'isDivide']
  }
</script>

<style lang="less" scoped>
  .set-divide {
    border-bottom: 1px solid #eee;
  }

  .article-item-wrapper {
    padding: 10px 0;

    .article-title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 13px;
        color: #888;
      }
    }
    h4 {
      margin: 0;
      color: #104E8B;
      font-size: 14px;
      cursor: pointer;
      display: inline-block;
    }
    h4:hover {
      text-decoration: underline;
    }
    .article-brief-detail {
      display: flex;
      margin-top: 10px;

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background: url('../../assets/img/article.jpg');
        background-size: contain;
        margin-right: 12px;
      }
      .info {
        flex: 1;
        font-size: 13px;

        .userInfo p {
          display: inline-block;
          margin: 0 0 8px;
          font-weight: bold;
        }
      }
    }
  }
</style>
