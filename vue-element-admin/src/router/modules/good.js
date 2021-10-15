/** 我们明天项目的路由匹配 **/

import Layout from '@/layout'

export default {
  path: '/good',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Good',
  meta: {
    title: 'Good',
    icon: 'el-icon-goods',
    roles: ['editor', 'shop']
  },
  children: [
    {
      path: 'list', // /good/list
      component: () => import('@/views/good/GoodList'),
      name: 'GoodList',
      meta: { title: 'Good List', noCache: false }
    },
    {
      path: 'add', // /good/add
      component: () => import('@/views/good/GoodEditOrAdd'),
      name: 'GoodAdd',
      meta: { title: 'Good Add', noCache: false }
    },
    {
      path: 'edit/:id', // /good/edit/29982398
      component: () => import('@/views/good/GoodEditOrAdd'),
      name: 'GoodEdit',
      meta: { title: 'Good Edit', noCache: false },
      hidden: true,
      props: true
    }
  ]
}
