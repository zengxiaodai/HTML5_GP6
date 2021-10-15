import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置式路由，它和“约定式路由”不能重复使用
  // 项目中layout目录、_layout.tx文档是给“约定式路由”使用
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/user/list', component: '@/pages/user/list' },
    { path: '/user/info/:id', component: '@/pages/user/info' }
  ],
  fastRefresh: {},
  history: { type: 'hash' },
  dva: {
    // 开启immer的深复制，然后我们在models中就可以直接修改store的
    // immutable ？？
    immer: true,
    hmr: false,
  },
  layout: {
    name: 'GP6',
    locale: true,
    layout: 'side'
  }
});
