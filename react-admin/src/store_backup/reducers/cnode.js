import produce from 'immer'

import {
  GET_CNODE_LIST
} from '../types'

const initState = {
  list: []
}

export default function(state=initState, {type,payload}) {
  return produce(state, (newState)=>{
    switch (type) {
      case GET_CNODE_LIST:
        console.log('文章数据来了', payload)
        newState.list = payload
        break
      default:
    }
    return newState
  })
}
