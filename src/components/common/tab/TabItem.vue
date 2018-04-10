<template>
  <div class="tab-item-wrapper" :class="{'tab-item-active': itemId === $parent.value}" @click="$parent.$emit('input', itemId)">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['itemId']
  }
</script>

<style lang="less">
  .tab-item-wrapper {
    padding: 8px 18px;
    font-size: 13px;
    color: #aaa;
    cursor: pointer;
    position: relative;
    top: 1px;
  }
  .tab-item-active {
    border: 1px solid #ccc;
    border-bottom: 1px solid #fff;
    color: #666;
  }
</style>
