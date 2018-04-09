<template>
  <div class="single-item-wrapper">
    <div class="item-avatar" :style="{'background-image': avatarUrl}" v-if="avatarUrl">
    </div>
    <div class="item-info">
      <div>
        <p >{{itemInfo}}</p>
      </div>
      <div>
        <span>2548 人关注</span>
        <i class="iconfont icon-point"></i>
        <span>51 个问题</span>
      </div>
    </div>
    <div class="profile-wrapper" v-if="itemInfo == '成为建筑师'">
      <profile-card></profile-card>
    </div>
  </div>
</template>

<script>
  import ProfileCard from './ProfileCard'

  export default {
    components: {ProfileCard},
    props: ['avatarUrl', 'itemInfo'],
  }
</script>

<style lang="less" scoped>
  .single-item-wrapper {
    border-bottom: 1px solid #ddd;
    width: 280px;
    height: 72px;
    box-sizing: border-box;
    padding: 14px 0;
    display: flex;

    .item-avatar {
      width: 40px;
      height: 40px;
      background-size: contain;
      border-radius: 4px;
      margin-right: 12px;
    }
    .item-info p {
      margin: 0;
      font-size: 14px;
      color: #259;
      cursor: pointer;
    }
    .item-info p:hover {
      text-decoration: underline;
    }
    .item-info span {
      font-size: 12px;
      color: #aaa;
    }
    .item-info i {
      font-size: 12px;
      color: #aaa;
    }
    .profile-wrapper {
      position: absolute;
    }
  }
</style>
