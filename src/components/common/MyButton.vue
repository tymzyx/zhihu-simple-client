<template>
  <button type="button" class="my-button" :class="{default: isDefault === 1}"
          :style="{
              background: bg,
              border: '1px solid' + border,
              height: height
          }">
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      bg: {
        default: 'linear-gradient(to bottom,#0e7bef,#0d73da)'
      },
      border: {
        default: '#045bb2'
      },
      isDefault: {
        default: 1,
      },
      height: {
        default: '32px'
      }
    }
  }
</script>

<style>
  .my-button {
    font-size: 14px;
    color: #fff;
    height: 32px;
    text-decoration: none!important;
    display: inline-block;
    text-align: center;
    padding: 4px 16px;
    cursor: pointer;
    border-radius: 3px;
    white-space: nowrap;
    box-sizing: border-box;
    background: linear-gradient(to bottom,#0e7bef,#0d73da);
    border: 1px solid #045bb2;
    box-shadow: 0 1px 2px rgba(0,0,0,.05), inset 0 1px 1px rgba(255,255,255,.15);
    outline: 0;
    transition: all .2s ease-in-out;
  }
  .default:active {
    background: linear-gradient(to bottom,#0d73da,#0e7bef) !important;
  }
</style>
