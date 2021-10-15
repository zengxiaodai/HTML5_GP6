import { useState, useEffect, useCallback } from 'react'
import { history, useSelector, useDispatch } from 'umi'

export default () => {
  const dispatch = useDispatch()
  const [count, setCount] = useState(100)
  const list = useSelector(model=>model.user.list)

  useEffect(()=>{
    dispatch({type: 'user/getList', payload: {}})
  }, [])

  const skip = useCallback((ele)=>history.push('/user/info/'+ele.id), [])

  return (
    <div>
      <h1>用户列表</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>增加</button>
      <hr/>
      {
        list.map(ele=>(
          <div key={ele.id} onClick={()=>skip(ele)}>
            <span>{ele.id}</span>
            --
            <span>{ele.name}</span>
          </div>
        ))
      }
    </div>
  )
}
