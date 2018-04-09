<template>
  <div>
    <top-bar></top-bar>
    <div class="body-wrapper">
      <div class="discovery-left">
        <brief-module></brief-module>
      </div>
      <div class="discovery-right">
        <item-card :itemInfo="testInfo[0]"></item-card>
        <item-card :itemInfo="testInfo[1]"></item-card>
        <item-card :itemInfo="testInfo[2]"></item-card>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from '../components/common/TopBar'
  import BriefModule from '../components/common/BriefModule'
  import ItemCard from '../components/common/ItemCard'

  let imgUrl0 = require('../assets/img/yz0.jpg');
  let imgUrl1 = require('../assets/img/yz1.jpg');
  let imgUrl2 = require('../assets/img/ht0.jpg');
  let imgUrl3 = require('../assets/img/ht1.jpg');
  let imgUrl4 = require('../assets/img/ht2.jpg');

  let testInfo = [
    {
      head: ['热门圆桌', '更多圆桌 >>'],
      items: [
        {imgUrl: `url(${imgUrl0})`, name: '成为建筑师'},
        {imgUrl: `url(${imgUrl1})`, name: '都是过敏惹的祸'}
      ]
    },
    {
      head: ['热门话题', '更多话题 >>'],
      items: [
        {imgUrl: `url(${imgUrl2})`, name: '神器'},
        {imgUrl: `url(${imgUrl3})`, name: '机器学习'},
        {imgUrl: `url(${imgUrl4})`, name: '企业并购'}
      ]
    },
    {
      head: ['热门收藏', '换一换'],
      items: [
        {name: '你丫才美工'},
        {name: '牛人集中营'},
        {name: 'Leon带逛'},
        {name: '嗯。我眼中的心理'},
        {name: '论一个段子手的自我修养'}
      ]
    },
  ];

  export default {
    components: {TopBar, BriefModule, ItemCard},
    data() {
      return {
        testInfo: testInfo,
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
