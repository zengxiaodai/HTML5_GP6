import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import good from './modules/good'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token')
  },
  modules: {
    good
  }
})
