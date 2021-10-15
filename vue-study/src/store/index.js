import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import study from './modules/study'
import music from './modules/music'

// 根store：银行、仓库、存储
const store = new Vuex.Store({
  // 无论是独立开发、还是协同开发，都需要
  // 只是为了解决代码管理的问题
  modules: {
    study,
    music
  }
})

export default store
