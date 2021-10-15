import {
  TEST_MSG_UPDATE,
  COUNTER_NUM_ADD,
  COUNTER_NUM_SUB,
  GET_CNODE_LIST
} from '../types'

import { fetchCnode } from '@/api'

// 理解action：是redux工作流程的核心，它由dispatch(action)
// 事实上，一个action信号，在当前应用程序中就是一个业务操作

// action creator
export function updateMsg(payload) {
  return {
    type: TEST_MSG_UPDATE,
    payload
  }
}

export function addNum(payload) {
  return {
    type: COUNTER_NUM_ADD,
    payload
  }
}

export function subNum(payload) {
  return {
    type: COUNTER_NUM_SUB,
    payload
  }
}

// action creator => {type,payload}
// redux-thunk要求异步action creator返回一个函数
export function getList(params) {
  return dispatch => {
    // 调接口
    fetchCnode(params).then(list=>{
      console.log('文章列表', list)
      dispatch({
        type: GET_CNODE_LIST,
        payload: list
      })
    })
  }
}
