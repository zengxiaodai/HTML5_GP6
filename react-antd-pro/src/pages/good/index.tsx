import React from 'react'
import { useSelector, useDispatch } from 'umi'

export default (): React.ReactNode => {

  const dispatch = useDispatch()

  const num = useSelector(model=>model.count.num)
  console.log('num', num)

  // const num = useSelector(model=>{
  //   console.log('model', model)
  //   return 100
  // })

  // console.log('num', num)
  return (
    <>
    <h1>我是商品列表</h1>
    <h1>{num}</h1>
    <button onClick={()=>dispatch({type:'count/changeList', payload:10})}>测试dva</button>
    </>
  )
}
