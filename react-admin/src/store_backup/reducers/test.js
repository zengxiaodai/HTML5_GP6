import produce from 'immer'
// immutable 也可以实现“不可变对象”

import {
  TEST_MSG_UPDATE
} from '../types'

const initState = {
  msg: 'hello redux',
  list: []
}

// reducer作用：用于修改state的，是真正做事的，你可以理解是Redux工厂中的员工。
// reducer是纯函数（不能修改入参，并且相同的入参永远得到唯一的输出）
// reducer的本质是一由switch语句构成的函数，对旧的state进行深复制、修改，最后返回新的state。

// const newState = JSON.parse(JSON.stringify(state))
// const newState = {...state}
// const newState = Object.assign({}, state)

export default function (state=initState, {type, payload}) {
  return produce(state, (newState)=>{
    switch (type) {
      case TEST_MSG_UPDATE:
        newState.msg = payload
        break
      case 'delete':
        newState.list = []
        break
      default:
        // 初始化
        newState = state
    }
    return newState
  })
}
