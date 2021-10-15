import request from '@/utils/request'

// axios是基于Promise封装的
// axios向后端发起请求，如果是get请求，使用params传参；
// 如果是post请求，使用data传参。

export function fetchCnodeList(params) {
  return request({
    url: '/api/v1/topics',
    method: 'get',
    params
  })
}

export function fetchMusicList(params) {
  return request({
    url: '/soso/fcgi-bin/client_search_cp',
    method: 'get',
    params
  })
}
