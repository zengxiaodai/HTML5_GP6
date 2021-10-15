import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'

const baseURL = 'http://m.3fengs.com'
const verson = '/api/v1'

const instance = axios.create({
  baseURL: baseURL + verson,
  timeout: 7000,
  headers: {}
})

// 请求拦截器
instance.interceptors.request.use(c=> {
  // 加token
  c.headers['Authorization'] = localStorage.getItem('token')
  return c
}, err=>Promise.reject(err))

// 响应拦截器
instance.interceptors.response.use(r=> {
  console.log('---响应拦截器', r)
  let res = null
  // 第一重拦截：对HTTP状态码进行错误拦截
  // console.log('响应拦截器', r)
  if (r.status === 200) {
    // 第二重拦截：对业务状态进行错误拦截
    if(r.data) {
      switch (r.data.err) {
        case 0:
          res = r.data.data
          break
        case -1:
          // 当token无效时跳转登录页
          router.push('/login')
          // window.location.herf = '#/login'
          break
        default:
          Toast.fail(r.data.msg)
      }
    }
  } else {
    Toast.fail('网络异常，稍后再试')
  }
  return res
}, err=>Promise.reject(err))

export default instance
