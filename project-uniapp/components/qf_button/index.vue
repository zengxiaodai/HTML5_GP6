<template>
<view>
  <button v-text='text'>
  </button>
</view>
</template>

<script>
export default {
  props: {
    text: { type: String, default: '按钮' }
  }
}
</script>

<style lang="css" scoped>
</style>
