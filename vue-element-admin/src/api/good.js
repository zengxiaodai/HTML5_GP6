import request from '@/utils/request'


export function getGoodList(params) {
  return request({
    url: '/good/list',
    method: 'get',
    params
  })
}

export function getCates(params) {
  return request({
    url: '/cates',
    method: 'get',
    params
  })
}

export function updateGood(data) {
  return request({
    url: '/good/update',
    method: 'post',
    data
  })
}

export function getGoodInfo(params) {
  return request({
    url: '/good/info',
    method: 'get',
    params
  })
}

export default {
  getGoodList,
  getCates,
  updateGood,
  getGoodInfo
}
