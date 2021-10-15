import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册并使用第三方插件
// 这样以后，在当前Vue环境中多了以下API：
// 1、多了两个内置组件：<router-link> <router-view>
// 2、在组件实例对象上多了两个内置API：$route、$router
Vue.use(VueRouter)

// @ 指向当前工程项目的'src'根据目录，这是一种绝对路径的写法

// 路由懒加载原理：Vue异步组件、Webpack代码分割功能。
// 异步组件
// Vue.component('qf-button', function(resolve){
//   setTimeout(()=>{
//     resolve({
//       template: `<div>异步组件</div>`,
//       data()
//     })
//   }, 5000)
// })

const Home = ()=>import('@/pages/home/Home.vue')
const User = ()=>import('@/pages/user/User.vue')

const UserArticleList = ()=>import('@/pages/user/components/UserArticleList.vue')
const UserColumnList = ()=>import('@/pages/user/components/UserColumnList.vue')

const Find = ()=>import('@/pages/find/Find.vue')
const FindDetail = ()=>import('@/pages/find/FindDetail.vue')

const Ask = ()=>import('@/pages/ask/Ask.vue')


// 创建路由实例对象
// 面试题：hash vs. history 两种路由模式有什么区别？
// 1、前者有#，难看，后者没有#，好看。
// 2、前者是通过监听onhashchange()实现URL切换、组件切换；后者使用的是history浏览器api来实现的。
// 3、前者在打包部署到云服务上时，不会出404；后者打包部署到云服务上时，会出404，需要在Nginx上做重定向处理。
export default new VueRouter({

  // mode: 'hash',
  mode: 'history',
  // 用于定义“url -> 组件”这种路由匹配规则
  // url='/home' 显示Home
  // url='/user' 显示User
  routes: [
    // 当url='/'时，路由系统就加载Home并将其实例化，去Vue组件系统中找到一个叫default的<router-view>来显示它。
    // { path: '/', component: Home },
    { path: '/', components: { default: Home } },
    // 需求：当url='/user'时，我想让User这个组件放在一个名字叫qf的router-view中进行展示。
    // 当url=/user时，加载User组件并实例化，将其放在一个名字叫qf的router-view中显示。
    {
      path: '/user',
      components: { qf: User },
      // 知识点：嵌套视图。children中的组件，要放在User中的<router-view>中显示
      children: [
        { path: 'articles', component: UserArticleList },
        { path: 'columns', component: UserColumnList },
        { path: '/user/*', redirect: '/user/articles'}
      ]
    },

    // 路由别名，是以"/"开头的，它相当于是path的小名，可以当作url来访问。
    // 路由命名，给“路由规则”取一个名字，可以用声明式路由跳转、编程式路由跳转。
    { path: '/find', alias: '/f', name:'f', component: Find },
    // { path: '/find/detail', component: FindDetail },
    // 动态路由：在path字符串有不确定的部分，用:表示
    // 在接受参数的页面组件中，默认使用this.$route.params接收动态参数；如果路由规则中把props开启了，那么 在接受参数的页面，还可以使用props选项来接受动态参数。
    { path: '/find/detail/:id', name:'fd', component: FindDetail, props: true },


    { path: '/ask', component: Ask, meta: { auth: true, role: ['admin', 'editor'] } },
    { path: '/*', redirect: '/' }
  ]
})
