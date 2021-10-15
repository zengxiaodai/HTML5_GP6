import Vue from 'vue'

import Cookies from 'js-cookie'

// UI与样式
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖
import '@/styles/index.scss' // global css
// Element-UI注册与国际化
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})
import './icons' // icon

// 自定义过滤器
import * as filters from './filters' // global filters
// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import App from './App'
import store from './store'
import router from './permission' // permission control

import './utils/error-log' // error log

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false

import api from '@/api'
Vue.prototype.$api = api
import img from '@/utils/img'
Vue.prototype.$img = img
import msg from '@/utils/msg'
Vue.prototype.$msg = msg


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
