<template>
  <div>
    <top-bar></top-bar>
    <div class="body-wrapper">
      <div class="discovery-left">
        <brief-module></brief-module>
      </div>
      <div class="discovery-right">
        <item-card :head-name="testNames[0]"></item-card>
        <item-card :head-name="testNames[1]"></item-card>
        <item-card :head-name="testNames[2]"></item-card>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from '../components/common/TopBar'
  import BriefModule from '../components/common/BriefModule'
  import ItemCard from '../components/common/ItemCard'

  let testNames = [
    ['热门圆桌', '更多圆桌 >>'],
    ['热门话题', '更多话题 >>'],
    ['热门收藏', '换一换']
  ];

  export default {
    components: {TopBar, BriefModule, ItemCard},
    data() {
      return {
        testNames: testNames,
      }
    }
  }
</script>

<style lang="less">
  .body-wrapper {
    position: relative;
    left: 50%;
    top: 45px;
    width: 1080px;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    display: flex;

    .discovery-left {
      width: 670px;
    }
    .discovery-right {
      flex: 1;
      margin-top: 10px;
      /*background: dodgerblue;*/
    }
  }
</style>
