<template>
  <div class="common-navbar-wrapper">
    <div class="single-navbar" v-if="isSingle">
      <div>
        <i class="iconfont icon-wenzhang"></i>
        <span>编辑推荐</span>
      </div>
      <div>
        <p>更多推荐 >></p>
      </div>
    </div>
    <div class="multi-navbar" v-else>

    </div>
  </div>
</template>

<script>
  export default {
    props: ['isSingle']
  }
</script>

<style lang="less" scoped>
  .common-navbar-wrapper {
    border-bottom: 1px solid #ccc;
    margin-top: 14px;
    padding-bottom: 18px;

    .single-navbar {
      display: flex;
      justify-content: space-between;
    }
    .single-navbar p {
      margin: 0;
      display: inline-block;
      font-size: 12px;
      color: #999;
    }
    .single-navbar span, .single-navbar i {
      font-size: 13px;
      color: #666;
    }
  }
</style>
