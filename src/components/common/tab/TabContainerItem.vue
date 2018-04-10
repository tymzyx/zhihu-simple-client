<template>
  <div v-if="itemId === $parent.value">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['itemId']
  }
</script>
