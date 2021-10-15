<template>
<div class="qf-nav-bar">
  <van-nav-bar
    left-arrow
    fixed
    @click-left='back'
  >
    <template #title>
      <slot></slot>
    </template>
    <template #right>
      <slot name='right'></slot>
    </template>
  </van-nav-bar>
</div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$emit('back')
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
