# 环境搭建

- 使用淘宝镜像
```
npm i -g cnpm --registry=https://registry.npm.taobao.org
cnpm install vue -S
```

- 电脑上已经安装过node（v12 / v14）
- 创建项目
```
cnpm i @vue/cli -g
vue create vue-study
cd vue-study
npm run serve
```

# 路由

#### 1、理解为什么要使用vue-router？
- 单页面应用程序（SPA）：本质上是组件的创建与销毁。
  - 理解：在SPA单页面应用程序中，只有一个页面index.html。在SPA中一切皆组件。
- 多页面应用程序（MPA）：本质上是页面的跳转。

#### 2、入门vue-rotuer三个问题
- 搞明白下面三个问题就搞懂了路由系统：
  - 1、如何安装路由并配置路由匹配规则。
  - 2、如何触发url变化。
  - 3、当url变化时，路由系统匹配到的组件，放在哪里进行显示？

#### 3、如何在脚手架中集成vue-router？
- cnpm i vue-router -S
- 创建router.js注册路由(Vue.use())，并编写路由“path-component”的匹配规则。
- 在main.js挂载路由系统。
- 通过某种机制触发url变化，把url匹配到的vue组件放在<router-view>这个容器进行显示。

#### 4、路由零碎一些知识

- 两个内置组件：<router-link>、<router-view>
- 路由重定向(redirect)和路由别名(alias)。
- 两种路由模式：hash模式 vs. histroy模块（它们有什么本质区别？）

- 两种命名：命名视图、命名路由。
- 两个路由跳转方式：声明式导航(router-link)、编程式导航(this.$router)。
- 两种路由传参方式：query传参，动态路由传参($router.params接收，props选项接收)。
- 两个内置API：this.$route（它可以被watch监听）、this.$router。

- 嵌套视图：<router-view>中再嵌套<router-view>，路由规则中使用children属性来编写二级路由规则。

- 路由元信息
- 路由懒加载
- 路由守卫（放在项目中再进行讲解）

#### 5、视图命名的一种使用场景举例
```
需求描述：100个vue页面组件，其中有3个页面组件在路由切换不希望被销毁。

<keep-alive>
  <router-view name='alive'></router-view>
</keep-alive>
<router-view></router-view>

routes: [
  { path: '/home', components: { alive: Home }, },
  { path: '/good', component: Good }
]
```

# 问题解决

- 在@vue/cli中支持sass
```
cnpm i sass-loader@10.1.1 -D
cnpm i sass -D
```
```
<style lang='scss'></style>
```

# 状态管理Vuex

- 状态：数据。
- 状态管理：数据管理。
- 经验：看一个项目好不好搞，数据流清不清晰。
- Flux数据架构思想：vuex、mobx、redux。
- 作用：任意组件之间的数据共享（组件通信的终极解析方案）；数组缓存。

- 在脚手架会集成vuex。
- 学习五个核心概念：state、getters、mutations、actions、modules。
- 学习四个API：mapState、mapGetters、mapMutations、mapActions。

# 集成vuex

- 安装并注册
cnpm i vuex -S
```
# /src/store/index.js

Vue.use(Vuex)
```
- 创建根store
```
# /src/store/index.js

var store = new Vuex.Store({
  modules: {
    study,
    music
  }
})
```
- 创建子store
```
export default {
  namespaced: true,
  state: {},
  mutations: {
    changeCount(state, payload)
  },
  actions: {
    getList(store, payload)
  }
}
```
- 挂载store
```
# main.js

new Vue({ store })
```
- 在Vue组件中使用vuex数据和方法
```
# 不推荐的做法
this.$store.state.study.count
this.$store.commit('study/changeCount', '参数')
this.$store.dispatch('study/getList', '参数')
```
```
# 推荐的做法
computed: {
  ...mapState('study', ['count', 'list']),
  ...mapGetters('study', ['total'])
},
methods: {
  ...mapMutations('study', ['changeCount']),
  ...mapActions('study', ['getList'])
}
```
- 使用vuex的一些坑与陷阱（想法）
  - namespaced 要开启，否则页面组件无法map*
  - 在同一个vue组件中，如果使用到多个子store时，如果有变量名冲突问题，该怎么解决？
  - vuex中state变量，可以用在v-model。如果一定要用需要配合computed的get/set来使用；但是尽是少用。

- 待解决的问题
  - 协同？？？
  - modules ？？


# 处理浏览器中同源策略导致的跨域拦截问题

- JSONP：前端使用script标签发起资源请求，后端使用jsonp的方式返回数据。
- CORS：在后端为ajax响应过程添加headers响应头，允许任何源进行访问。
- 代理：本地开发中使用脚手架devServer代理实现，在生产环境中使用Nginx进行代理。
