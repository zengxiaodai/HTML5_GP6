import React from 'react'
import loadable from '@loadable/component'

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

// 面试：如何做性能优化？一、Webpack工程环境层面的优化；二、代码层面的优化；三、部署层面的优化（静态资源文件）。

// 代码分割：背后原理是webpack打包时遇到动态导入技术(()=>import())，会自动切割chunk。
// 安装 @loadable/component
// 安装 @babel/plugin-syntax-dynamic-import
const StudyJSX = loadable(()=>import('@/views/study/StudyJSX'))
const StudyComponent = loadable(()=>import('@/views/study/StudyComponent'))

import StudyProps from '@/views/study/StudyProps'
import StudyCommunication from '@/views/study/StudyCommunication'
import StudyEvent from '@/views/study/StudyEvent'
import StudyState from '@/views/study/StudyState'
// import StudyCondition from '@/views/study/StudyCondition'
// import StudyList from '@/views/study/StudyList'
// import StudyForm from '@/views/study/StudyForm'
// import StudyLifecycle from '@/views/study/StudyLifecycle'
// import StudyStateLift from '@/views/study/StudyStateLift'
// import StudyCombine from '@/views/study/StudyCombine'
import StudyContext from '@/views/study/StudyContext'
// import StudyHoc from '@/views/study/StudyHoc'
import StudyHooks from '@/views/study/StudyHooks'

const CnodeList = loadable(()=>import('@/views/mobx/CnodeList'))
const StudyMobx = loadable(()=>import('@/views/mobx/StudyMobx'))
const CnodeListLite = loadable(()=>import('@/views/mobx/CnodeListLite'))


export default [
  {
    id: 10,
    text: '16K 起步',
    icon: <UserOutlined />,
    children: [
      {
        id: 1001,
        text: '语法基础',
        path: '/',
        component: StudyJSX
      },
      {
        id: 1002,
        text: '两种组件',
        path: '/component',
        component: StudyComponent
      },
      {
        id: 1003,
        text: '父子纽带',
        path: '/props',
        component: StudyProps
      },
    ]
  },
  {
    id: 11,
    text: '18K 起步',
    icon: <VideoCameraOutlined />,
    children: [
      {
        id: 1101,
        text: '父子通信',
        path: '/communication',
        component: StudyCommunication
      },
      {
        id: 1102,
        text: '事件绑定',
        path: '/event',
        component: StudyEvent
      },
      {
        id: 1103,
        text: '声明式',
        path: '/state',
        component: StudyState
      }
    ]
  },
  {
    id: 13,
    text: '20K 起步',
    icon: <UploadOutlined />,
    children: [
      {
        id: 1301,
        text: '上下文',
        path: '/ctx',
        component: StudyContext
      }
    ]
  },
  {
    id: 14,
    text: '22K 起步',
    icon: <UploadOutlined />,
    children: [
      {
        id: 1401,
        text: '学习Mobx',
        path: '/mobx',
        component: StudyMobx
      },
      {
        id: 1402,
        text: '文章列表',
        path: '/cnode',
        component: CnodeList
      },
      {
        id: 1403,
        text: '文章列表2',
        path: '/cnode2',
        component: CnodeListLite
      }
    ]
  }
]
