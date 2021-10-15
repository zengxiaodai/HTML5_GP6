import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('./views/study/Home.vue')
const Find = () => import('./views/study/Find.jsx')
const Cnode = () => import('./views/cnode/Cnode.tsx')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/home', component: Home },
    { path: '/find', component: Find },
    { path: '/cnode', component: Cnode },
    { from: '/*', redirect: '/find' }
  ]
})
export default router
