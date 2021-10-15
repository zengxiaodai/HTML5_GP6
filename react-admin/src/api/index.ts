import axios from '@/utils/axios'

import { CnodeParams  } from '@/types'

export function fetchCnode(params:CnodeParams) {
  return axios({url:'/api/v1/topics', method:'get', params})
}

// 登录 {username, password}
export function fetchLogin(data) {
  return axios({url:'/api/v1/antd/user/login', method:'post', data})
}
// 用户信息
export function fetchUserInfo(token) {
  return axios({
    url:'/api/v1/antd/user/info',
    method:'get',
    headers: { Authorization: token },
    params: {}
  })
}

// 添加用户
export function fetchUserAdd(data) {
  return axios({url: '/api/v1/antd/user/add', method:'post', data})
}
// 获取用户列表
export function fetchUserList(params) {
  return axios({url: '/api/v1/antd/user/list', method:'get', params})
}
// 获取用户列表
export function fetchUserStatus(params) {
  return axios({url: '/api/v1/antd/user/status', method:'get', params})
}

// 获取所有的文章品类
export function fetchArticleCates(params) {
  return axios({url: '/api/v1/antd/article/cates', method:'get', params})
}

// 添加文章（编辑文章）
export function fetchArticleAddOrEdit(data) {
  return axios({url: '/api/v1/antd/article/update/add', method:'post', data})
}

export function fetchArticleList(params) {
  return axios({url: '/api/v1/antd/article/list', method:'get', params})
}

export function fetchArticleInfo(params) {
  return axios({url: '/api/v1/antd/article/info', method:'get', params})
}

// 可视化图表接口
export function fetchAnalyse(params) {
  return axios({url: '/api/v1/antd/dash/analyse', method: 'get', params})
}
