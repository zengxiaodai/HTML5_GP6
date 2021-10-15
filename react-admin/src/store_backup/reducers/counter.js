import produce from 'immer'

import {
  COUNTER_NUM_ADD,
  COUNTER_NUM_SUB
} from '../types'

const initState = {
  num: 0
}

export default function(state=initState, {type,payload}) {
  return produce(state, (newState)=>{
    switch (type) {
      case COUNTER_NUM_ADD:
        // 加加减减
        newState.num += payload
        break
      case COUNTER_NUM_SUB:
        newState.num -= payload
        break;
      default:
    }
    return newState
  })
}
