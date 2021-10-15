import test from './modules/test'

// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    test
  }
})
// #endif

export default store
