import React from 'react'

import { connect } from 'react-redux'
import { updateMsg } from '@/store/actions'

export default connect(
  ({test})=>({
    msg: test.msg
  }),
  dispatch=>({
    updateMsg: payload=>dispatch(updateMsg(payload))
  })
)(props => {
  return (
    <div>
      <h1>在函数式组件中使用redux数据</h1>
      <h1>{props.msg}</h1>
      <button onClick={()=>props.updateMsg(Math.random())}>修改MSG</button>
    </div>
  )
})
