<template>
  <div class="common-navbar-wrapper">
    <div class="single-navbar" v-if="isSingle">
      <div>
        <i class="iconfont icon-wenzhang"></i>
        <span>{{headerLeft}}</span>
      </div>
      <div>
        <p>{{headerRight}}</p>
      </div>
    </div>
    <div class="multi-navbar" v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['isSingle', 'value', 'headerRight', 'headerLeft']
  }
</script>

<style lang="less" scoped>
  .common-navbar-wrapper {
    border-bottom: 1px solid #ccc;
    margin-top: 14px;

    .single-navbar {
      display: flex;
      justify-content: space-between;
      padding-bottom: 14px;
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

    .multi-navbar {
      display: flex;
    }
  }
</style>
