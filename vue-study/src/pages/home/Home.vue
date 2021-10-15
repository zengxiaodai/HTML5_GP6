<template>
<div>
  <h1>首页</h1>
  <h1 v-text='count'></h1>
  <button @click='change(1)'>自增</button>
  <button @click='change(-1)'>自减</button>
  <hr>

  <h1>总共有 <span v-text='total'></span> 条数据</h1>

  <div v-for='item in list' :key='item.id'>
    <span v-text='item.id'></span>
    --
    <span v-text='item.title'></span>
  </div>

</div>
</template>

<script>
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'

// import { qfMapMutations } from '@/utils/map'

export default {
  computed: {
    ...mapState('study', ['count', 'list']),
    ...mapGetters('study', ['total'])
  },
  mounted() {
    // 下面这行代码没问题，但有更好的写法
    // this.$store.dispatch('getList', {page:1,limit:5})
    this.getList({page:1, limit:5})
  },
  methods: {
    ...mapMutations('study', ['changeCount']),
    ...mapActions('study', ['getList']),
    // ...qfMapMutations(['changeCount']),
    change(num) {
      // 这种修改store的做法，没有任何问题，不推荐这么做。
      // this.$store.state.count += num

      // 这种通过mutations方法来修改state的方式，没有问题，不推荐这么做。
      // 触发一个叫'xxx'的mutations方法。
      // this.$store.commit('changeCount', num)

      this.changeCount(num)
    },

  }
}
</script>

<style lang="css" scoped>
</style>
