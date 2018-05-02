<template>
  <div class="label-wrapper">
    <i :class="img" :style="{color: color}"></i>
    <span>{{text}}</span>
  </div>
</template>

<script>
  export default {
    props: ['img', 'text', 'color']
  }
</script>

<style lang="less">
  .label-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    i {
      font-size: 22px;
      margin-bottom: 8px;
    }
    span {
      font-size: 15px;
      color: #77839c;
      cursor: pointer;
    }
    span:hover {
      color: #8590a6;
    }
  }
</style>
