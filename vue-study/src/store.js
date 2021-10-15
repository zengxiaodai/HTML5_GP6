import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { fetchCnodeList } from '@/api/index.js'

// 银行、仓库、存储
const store = new Vuex.Store({
  // state
  // 作用：定义可被vue组件共享的数据
  // 特点：当state发生变化时，所有使用到state数据的组件视图自动更新
  state: {
    count: 1,
    list: []  // 可共享的文章列表数据
  },
  // getters
  // 作用：对state变量进行复杂算计
  // 特点：getters都是函数，只有当被关联的state变量发生变化时，getters方法才会重新执行。
  // 功能：它可以当作state变量，给到vue组件来使用。
  getters: {
    total(state) {
      // do something
      return state.list.length
    }
  },
  // mutations
  // 作用：Vuex推荐的专门用于修改state的方法
  // 注意：在mutations方法中可以调接口，并把接口数据更新到state。(不建议)
  mutations: {
    // state代表的是当前store中state
    // payload, 负载，一般来自于视图组件
    changeCount(state, payload) {
      state.count += payload
    },
    changeList(state, payload) {
      state.list = payload
    }
  },
  // actions
  // 作用：Vuex推荐的专门用于调接口的方法
  // 注意：在actions方法中可以绕过mutations方法、直接修改state。（不建议）
  actions: {
    getList(store, payload) {
      // 调接口
      fetchCnodeList(payload).then(res=>{
        console.log('文章列表', res)
        store.commit('changeList', res)
        // store.state.list = res
      })
    }
  },
  // 无论是独立开发、还是协同开发，都需要
  modules: {}
})

export default store
