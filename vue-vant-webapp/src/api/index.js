import axios from '@/utils/axios'

export const fetchGoodList = params => axios({url:'/good/list', method:'get', params})
export const fetchAllCates = params => axios({url:'/good/cate', method:'get', params})
export const fetchGoodInfo = params => axios({url:'/good/info', method:'get', params})
export const fetchRegist = data => axios({url:'/user/regist', method:'post', data})
export const fetchLogin = data => axios({url:'/user/login', method:'post', data})
export const fetchCartAdd = data => axios({url:'/cart/add', method:'post', data})
export const fetchCartList = params => axios({url:'/cart/list', method:'get', params})
export const fetchCartDel = params => axios({url:'/cart/del', method:'get', params})
export const fetchCartUpd = params => axios({url:'/cart/upd', method:'get', params})
export const fetchCartSubmit = data => axios({url:'/cart/submit', method:'post', data})

export default {
  fetchGoodList,
  fetchAllCates,
  fetchGoodInfo,
  fetchRegist,
  fetchLogin,
  fetchCartAdd,
  fetchCartList,
  fetchCartDel,
  fetchCartUpd,
  fetchCartSubmit
}

// import api from '@/api'
// api.fetchGoodList()
// import { fetchGoodList } from '@/api'
// fetchGoodList()
