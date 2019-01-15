<template>
  <div class="drag-wrapper">
    <div class="draggable-tag">

    </div>
    <div
      ref="drag"
      class="drag-tag"
      @mousedown="mouseDown"
      @mousemove="mouseMove"
      @mouseup="mouseUp"
    >
      标签一
    </div>
    <div :class="storeClass" @mouseover="mouseOver">
      <div v-for="(item, index) in storeRow" :key="index" class="store-row">

      </div>
    </div>
  </div>
</template>

<script>
  let distanceX, distanceY;
  let boxPosition = {
    left: 100,
    top: 200,
    right: 600,
    bottom: 500
  };

  export default {
    data() {
      return {
        isMove: false,
        storeNum: 0,
        storeClass: {
          'store-box': true,
          'store-over': false
        }
      }
    },

    mounted() {
      window.addEventListener('mouseup', this.mouseUp);
    },

    computed: {
      storeRow() {
        return new Array(this.storeNum).fill(false);
      }
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
          this.collision(e.clientX, e.clientY);
        }
      },
      mouseUp() {
        if (this.isMove && this.storeClass['store-over']) {

        }
        this.isMove = false;
        this.$refs.drag.style.left = '100px';
        this.$refs.drag.style.top = '100px';
        this.storeClass['store-over'] = false;
      },
      mouseOver() {
        console.log('over');
      },
      collision(x, y) {
        if (this.isMove) {
          if (
            x >= boxPosition.left && y >= boxPosition.top &&
            x <= boxPosition.right && y <= boxPosition.bottom
          ) {
            this.storeClass['store-over'] = true;
            if (!this.storeRow.length || this.storeRow[this.storeNum - 1]) {
              this.storeNum += 1;
            }
          }
        }
      },
      collisionRow(x, y) {

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
      padding: 20px;
      border: 1px dashed #888;
      border-radius: 16px;
      box-sizing: border-box;
    }
    .store-over {
      background: rgba(0, 0, 0, 0.2);
    }
    .store-row {
      height: 80px;
      border: 1px solid #bbb;
      border-radius: 10px;
    }
  }
</style>
