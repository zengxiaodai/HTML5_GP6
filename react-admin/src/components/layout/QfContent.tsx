import React, { useCallback } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { useAppSelector } from '@/hooks'
import routes, { constRoutes } from '@/views/index.tsx'

export default () => {

  // 来自于redux中的用户信息（登录成功，用token换回来的）
  const u = useAppSelector(({user})=>user.user)
  // 动态生成路由规则
  const renderRoute = useCallback(
    (arr, flag) => {
      let result = []
      const recursion = arr => {
        arr.map(ele=>{
          if(!flag || ele.permission.includes(u.roleName)) {
            result.push(
              <Route exact key={ele.id} path={ele.path} component={ele.component} />
            )
          }
          if(ele.children) recursion(ele.children)
        })
      }
      arr.map(ele=>{
        recursion(ele.children)
      })
      return result
    },
    [u]
  )

  return (
    <div className='qf-content'>
      {/* 加快路由匹配的速度 */}
      {/* Switch组件的子组件们必须是Route，不能用div等把Route套起来 */}
      <Switch>
        { renderRoute(constRoutes, false) }
        { u.roleName && renderRoute(routes, true) }
        {/* 重定向，在Route组件上要添加 exact，才能正常地重定向 */}
        <Redirect from='/*' to='/' />
      </Switch>
    </div>
  )
}
