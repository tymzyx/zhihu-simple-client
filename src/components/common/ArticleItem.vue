<template>
  <div class="article-item-wrapper">
    <h4>这是一个文章标题</h4>
    <div class="article-brief-detail">
      <div class="avatar"></div>
      <div class="info">
        <div class="userInfo">
          <p>朵拉陈，</p><span>心理学话题优秀回答者 美国执业心理咨询师</span>
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
  }
</script>

<style lang="less" scoped>
  .article-item-wrapper {
    padding: 10px 0;

    h4 {
      margin: 0;
      color: #104E8B;
      font-size: 15px;
      cursor: pointer;
    }
    .article-brief-detail {
      display: flex;

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background: url('../../assets/img/article.jpg');
        background-size: contain;
      }
      .info {
        flex: 1;
      }
    }
  }
</style>
