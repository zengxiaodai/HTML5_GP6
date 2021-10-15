import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks'

import { addNum, subNum, getList } from '@/store/actions'

// React数据流思想(Flux)：一切外部数据都要从props进来
export default () => {
  const num = useAppSelector(({counter})=>counter.num)
  const list = useAppSelector(({cnode})=>cnode.list)
  const dispatch = useAppDispatch()

  const sub = () => {
    // 发邮件
    dispatch(subNum(5))
  }
  const add = () => {
    // 发邮件
    dispatch(addNum(10))
  }

  useEffect(()=>{
    // 触发调接口
    dispatch(getList({limit:2}))
  }, [])

  return (
    <div>
      <h1>计数器</h1>
      <h1>{num}</h1>
      <button onClick={sub}>自减</button>
      <button onClick={add}>自增</button>
      <hr/>
      {
        list.map(ele=><div key={ele.id}>{ele.title}</div>)
      }

    </div>
  )
}
