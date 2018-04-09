<template>
  <div class="item-card-wrapper">
    <div class="item-card-head">
      <p>{{itemInfo.head[0]}}</p>
      <span>{{itemInfo.head[1]}}</span>
    </div>
    <div>
      <single-item :avatarUrl="item.imgUrl" v-for="item,index in itemInfo.items" :key="index" :itemInfo="item.name">
      </single-item>
    </div>
  </div>
</template>

<script>
  import SingleItem from './SingleItem'

  let testJpg = require('../../assets/img/yz0.jpg');

  export default {
    components: {SingleItem},
    props: ['itemInfo'],
    data() {
      return {
        avatarUrl: `url(${testJpg})`
      }
    }
  }
</script>

<style lang="less" scoped>
  .item-card-wrapper {
    margin: 16px 16px 16px 40px;
    width: 280px;

    .item-card-head {
      display: flex;
      justify-content: space-between;
    }
    .item-card-head p {
      margin: 0;
      color: #444;
      font-weight: bold;
      font-size: 14px;
    }
    .item-card-head span {
      display: inline-block;
      color: #aaa;
      font-size: 11px;
    }
  }
</style>
