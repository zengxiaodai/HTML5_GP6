// 入口文件

import Vue from 'vue'
// 根组件
import App from './App.vue'

Vue.config.productionTip = false
import './assets/style.css'

// 路由挂载
import router from './router.js'
// 状态管理
import store from './store/index'


// 挂载节点，挂载App
// App是整个Vue应用程序的根组件
new Vue({
  el: '#app',
  // 挂载路由系统
  router,
  // 挂载状态管理
  store,
  // 用于渲染一个vue组件，替换掉<div id='app'></div>
  render: h => h(App),
})
// app.$mount('#app')
