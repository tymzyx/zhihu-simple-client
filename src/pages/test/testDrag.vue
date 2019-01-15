<template>
  <div class="drag-wrapper">
    <div
      ref="drag"
      class="drag-tag"
      @mousedown.capture="mouseDown"
      @mousemove="mouseMove"
      @mouseup="mouseUp"
    >
      标签一
    </div>
    <div class="store-box" @mouseover="mouseOver">

    </div>
  </div>
</template>

<script>
  let distanceX, distanceY;

  export default {
    data() {
      return {
        isMove: false,
        storeNum: 0
      }
    },

    mounted() {
      window.addEventListener('mouseup', this.mouseUp);
    },

    methods: {
      mouseDown(e) {
        // console.log('down', e.target);
        const target = e.target;
        distanceX = e.clientX - target.offsetLeft;
        distanceY = e.clientY - target.offsetTop;
        this.isMove = true;
      },
      mouseMove(e) {
        if (this.isMove) {
          const target = e.target;
          // console.log('move', e.clientX, target.offsetLeft, distanceX, distanceY);
          target.style.left = e.clientX - distanceX + 'px';
          target.style.top = e.clientY - distanceY + 'px';
        }
      },
      mouseUp() {
        this.isMove = false;
        this.$refs.drag.style.left = '100px';
        this.$refs.drag.style.top = '100px';
      },
      mouseOver() {
        console.log('over');
      }
    }
  }
</script>

<style lang="less" scoped>
  .drag-wrapper {
    .drag-tag {
      width: 60px;
      line-height: 40px;
      text-align: center;
      border-radius: 8px;
      font-size: 14px;
      background: blanchedalmond;
      position: fixed;
      top: 100px;
      left: 100px;
      cursor: default;
      z-index: 10;
    }
    .store-box {
      position: fixed;
      width: 500px;
      height: 300px;
      top: 200px;
      left: 100px;
      border: 1px dotted #000;
      border-radius: 16px;
    }
  }
</style>
