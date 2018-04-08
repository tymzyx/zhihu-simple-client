<template>
  <div class="single-item-wrapper">
    <div class="item-avatar" :style="{'background-image': avatarUrl}">
    </div>
    <div class="item-info">
      <div>
        <p>成为建筑师</p>
      </div>
      <div>
        <span>2548 人关注</span>
        <i class="iconfont icon-point"></i>
        <span>51 个问题</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['isAvatar', 'avatarUrl', ''],
  }
</script>

<style lang="less" scoped>
  .single-item-wrapper {
    border-bottom: 1px solid #ddd;
    width: 280px;
    height: 72px;
    box-sizing: border-box;
    padding: 16px 0;
    display: flex;

    .item-avatar {
      width: 40px;
      height: 40px;
      background-size: contain;
      border-radius: 4px;
    }
    .item-info {
      margin-left: 12px;
    }
    .item-info p {
      margin: 0;
      font-size: 14px;
      color: #259;
    }
    .item-info span {
      font-size: 12px;
      color: #aaa;
    }
  }
</style>
