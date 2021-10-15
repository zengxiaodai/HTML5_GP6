import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 外页
const Home = ()=>import('@/views/home/Home.vue')
const Cate = ()=>import('@/views/cate/Cate.vue')
const Cart = ()=>import('@/views/cart/Cart.vue')
const User = ()=>import('@/views/user/User.vue')
const Login = ()=>import('@/views/user/Login.vue')
const Regist = ()=>import('@/views/user/Regist.vue')

const GoodDetail = ()=>import('@/views/home/GoodDetail.vue')

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', components: { alive: Home } },
    { path: '/cate', component: Cate },
    { path: '/good/detail/:id', component: GoodDetail },
    { path: '/login', component: Login },
    { path: '/regist', component: Regist },
    { path: '/cart', component: Cart, meta: { auth: true } },
    { path: '/user', components: { alive: User },  meta: { auth: true } },
    { path: '/*', redirect: '/home' }
  ]
})

// 全局路由守卫
// 作用：对vue单页面应用中所有的“需要权限验证的页面”统一做全局的登录拦截
// 如何理解beforeEach()这个钩子函数，表示在url和组件配对之前。
// 一般在路由守卫中需要两重判断：
  // 第一重判断：当前要访问的页面是否需要鉴权
  // 第二重判断：判断当前用户是否登录了
router.beforeEach((to, from, next)=>{
  console.log('to', to)
  console.log('from', from)
  // 从vuex或localStorage中取出token
  const isLogin = localStorage.getItem('token')
  // 只对那些需要进行鉴权的页面做如下判断
  if(to.meta.auth) {
    if(isLogin) next()
    else next('/login')
  } else {
    next()
  }
})

// router.beforeResolve
// router.afterEach

export default router
