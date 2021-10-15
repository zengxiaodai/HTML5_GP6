import React from 'react'

import { updateMsg } from '@/store/actions'

import { useAppDispatch, useAppSelector } from '@/hooks'


export default () => {
  const msg = useAppSelector(({test})=>test.msg)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>在函数式组件中使用redux数据</h1>
      <h1>{msg}</h1>
      <button onClick={()=>dispatch(updateMsg(Math.random()))}>修改MSG</button>
    </div>
  )
}
