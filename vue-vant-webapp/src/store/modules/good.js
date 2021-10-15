import { fetchGoodList } from '@/api'

export default {
  namespaced: true,
  state: {
    msg: 'hello webapp',
    cache: {}   // 用于缓存品类页面中商品数据
  },
  mutations: {
    UPDATE_CACHE(state, {idx,list}) {
      state.cache[idx] = list
      state.cache = JSON.parse(JSON.stringify(state.cache))
    },
    cleanCache(state) {
      state.cache = {}
    }
  },
  actions: {
    getList({commit}, {cate,idx}) {
      // 默认payload = 'office'
      fetchGoodList({cate}).then(res=>{
        console.log('当前office的商品列表', res.list)
        commit('UPDATE_CACHE', {idx, list:res.list})
      })
    }
  }
}
