<template>
<div>
  <h1>问答</h1>
  <!-- 在v-model使用vuex中的state -->
  <input v-model='count1' />

  <hr>
  <h1 v-text='count2'></h1>
  <h1 v-text='count3'></h1>
  <hr>

  <div v-for='item in list' :key='item.id'>
    <span v-text='item.title'></span>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      num: 1
    }
  },
  computed: {
    // get操作
    ...mapState('study', ['count']),
    ...mapState('music', {
      count2(state){
        return state.count
      },
      list(state){ return state.list }
    }),
    count3() {
      return this.$store.state.music.count
    },
    count1: {
      get() { return this.$store.state.study.count },
      set(val) { this.$store.commit('study/changeCount', val)}
    }
  },
  created() {
    var str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.top&searchid=70816417247561158&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%BC%A0%E6%9D%B0&_=1626230700589&cv=4747474&ct=24&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&uin=0&g_tk_new_20200303=611986774&g_tk=5381&hostUin=0&loginUin=0'
    var params = {}
    str.split('&').map(ele=>{
      var arr = ele.split('=')
      params[arr[0]] = arr[1]
    })
    params.w = decodeURI(params.w)  // encodeURI()
    this.getList(params)
  },
  methods: {
    ...mapActions('music', ['getList'])
  }
}
</script>

<style lang="css" scoped>
</style>
