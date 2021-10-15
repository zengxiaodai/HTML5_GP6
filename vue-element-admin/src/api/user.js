import request from '@/utils/request'

// 登录接口{username, password}
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

// 获取用户信息接口{token}
export function getInfo(token) {
  return request({
    url: '/userinfo',
    method: 'get',
    params: {},
    // 配合后端接收token
    headers: { Authorization: token }
  })
}

// 退出登录（假）
export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
