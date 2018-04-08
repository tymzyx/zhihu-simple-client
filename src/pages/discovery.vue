<template>
  <div>
    <top-bar></top-bar>
    <div class="body-wrapper">
      <brief-module></brief-module>
    </div>
  </div>
</template>

<script>
  import TopBar from '../components/common/TopBar'
  import BriefModule from '../components/common/BriefModule'

  export default {
    components: {TopBar, BriefModule}
  }
</script>

<style lang="less">
  .body-wrapper {
    position: relative;
    top: 45px;
  }
</style>
