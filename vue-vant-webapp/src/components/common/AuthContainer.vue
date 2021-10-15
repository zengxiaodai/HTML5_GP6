<template>
<div
  class="qf-auth"
  v-if='show'
  @click='handle'
>
  <div></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: !(localStorage.getItem('token'))
    }
  },
  methods: {
    handle() {
      // 判断vuex中或者localStorage中是否token？
      // 如果有token，直接调接口（加上token）  http 短连接
      // 如果没有token，this.$router.push('/login')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-auth {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
}
</style>
