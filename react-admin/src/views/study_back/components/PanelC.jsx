import React from 'react'

// import { useSelector, useDispatch } from 'react-redux'
import { useQfDispatch, useQfSelector } from '../qf'

import { updateMsg } from '@/store/actions'

export default () => {

  const msg = useQfSelector(({test})=>test.msg)
  const dispatch = useQfDispatch()

  return (
    <div>
      <h1>在函数式组件中使用redux数据</h1>
      <h1>{msg}</h1>
      <button onClick={()=>dispatch(updateMsg(Math.random()))}>修改MSG</button>
    </div>
  )
}
