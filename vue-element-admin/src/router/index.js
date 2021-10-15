import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

import constantRoutes from './constant'
import studyRoutes from './study'
import documentRoutes from './document'

/* 业务页面 */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'
import goodRouter from './modules/good'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
// 需要权限的页面
// ['editor']
const asyncRoutes = [
  goodRouter,
  // ...studyRoutes,
  // ...documentRoutes,
  { path: '*', redirect: '/404', hidden: true }
]

// 初始化、退出登录时重新生成路由规则
function createRouter() {
  return new VueRouter({
    mode: 'hash', // require service support
    routes: constantRoutes, // router.addRoutes()
    scrollBehavior: () => ({ y: 0 })
  })
}

const router = createRouter()
// router 路由守卫的钩子、addRoutes()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export {
  constantRoutes,
  asyncRoutes,
  resetRouter
}

export default router
