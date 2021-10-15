import axios from 'axios'
import { message } from 'antd'
// const baseURL = '/api/v1'

const baseURL = 'http://localhost:9001'

// 创建axios实例
const instance = axios.create({
  baseURL,
  timeout: 7000,
  headers: {}
})

// 封装请求拦截器
instance.interceptors.request.use(function (config) {
  // 加token
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, function (error) {
  return Promise.reject(error)
})

// 封装响应拦截器
instance.interceptors.response.use(function (response):any {
  let res = null
  // console.log('res ', response)
  // 对后端返回的数据，做统一拦截处理
  if(response.status===200) {
    switch (response.data.err) {
      case -1:
        message.error(response.data.msg)
        window.location.href = '#/login'
        break
      case 0:
        res = response.data.data
        break
      default:
        message.error(response.data.msg)
    }
  }else{
    alert('网络异常，稍后再试')
  }
  return res
}, function (error) {
  return Promise.reject(error)
})

export default instance
