<template>
<div class="app">
  <QfLayout />
</div>
</template>

<script>

// 这种导入.vue的组件，不是全局组件，也不是局部组件，所以在当前视图中无法使用。
// 常规做法，将其变成components局部组件。
import { QfLayout } from '@/components/'

export default {
  // 这个字段是给vue-devtools来使用
  name: 'MyApp',
  components: {
    QfLayout
  },
  data() {
    return {
      msg: 'hello GP6',
      count: 1
    }
  },
  // watch: {
  //   $route(to, from) {
  //     console.log('to', to)
  //     console.log('from', from)
  //   }
  // },
  mounted() {
    // setInterval(()=>{
    //   this.count++
    // }, 1000)
    console.log('$store', this.$store)
  }
}
</script>

<style lang='scss'>

</style>
