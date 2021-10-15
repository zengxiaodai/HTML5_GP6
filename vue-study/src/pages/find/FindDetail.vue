<template>
<div>
  <h1>文章详情</h1>
  <h1 v-text='info'></h1>
</div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: false, default: ''}
  },
  data() {
    return {
      info: ''
    };
  },
  mounted() {
    // 在详情页有两种接受“路由参数”的两种方式：
    console.log('详情页$route', this.$route)
    console.log('详情页props id', this.id)

    // 一、query传参
    // let id = this.$route.query.id

    // 二、动态路由传参（params、props）
    let id = this.$route.params.id

    this.info = id
    // 使用这个id调接口，拿到文章完整的详情。
  }
}
</script>

<style lang="css" scoped>
</style>
