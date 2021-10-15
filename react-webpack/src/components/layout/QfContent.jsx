import React, { useCallback } from 'react'

import routes from '@/views'
import { Route, Switch, Redirect } from 'react-router-dom'

export default () => {

  const renderRoute = useCallback(
    () => {
      let result = []
      routes.map(ele=>{
        ele.children && ele.children.map(ele=>{
          result.push(
            <Route exact key={ele.id} path={ele.path} component={ele.component} />
          )
        })
      })
      return result
    },
    []
  )

  return (
    <div className='qf-content'>
      {/* 加快路由匹配的速度 */}
      {/* Switch组件的子组件们必须是Route，不能用div等把Route套起来 */}
      <Switch>
        { renderRoute() }
        {/* 重定向，在Route组件上要添加 exact，才能正常地重定向 */}
        <Redirect from='/*' to='/' />
      </Switch>
    </div>
  )
}
