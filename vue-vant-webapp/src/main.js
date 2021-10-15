import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'
import store from './store/'

import {
  Button,
  Tabbar,
  TabbarItem,
  Search,
  NoticeBar,
  Swipe, SwipeItem,
  Lazyload,
  Divider,
  PullRefresh,
  List,
  NavBar,
  Sidebar,
  SidebarItem,
  Grid,
  GridItem,
  SwipeCell,
  Card,
  Tag,
  Col,
  Row,
  Checkbox,
  SubmitBar,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Form,
  Field,
  Toast,
  Dialog,
  CellGroup,
  Cell
} from 'vant'
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(NoticeBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Divider)
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(NavBar)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(SwipeCell)
Vue.use(Card)
Vue.use(Tag)
Vue.use(Col)
Vue.use(Row)
Vue.use(Checkbox)
Vue.use(SubmitBar)
Vue.use(GoodsAction)
Vue.use(GoodsActionIcon)
Vue.use(GoodsActionButton)
Vue.use(Form)
Vue.use(Field)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(CellGroup)
Vue.use(Cell)

import img from '@/utils/img'
Vue.prototype.$img = img

import api from '@/api'
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
