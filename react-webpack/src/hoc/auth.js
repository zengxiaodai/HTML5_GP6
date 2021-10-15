import React from 'react'

const NotMatch = ()=> (<div>你没有权限</div>)

// ['admin', 'editor']
function auth(roleArr) {

  return function(WrappedComponent) {
    // 在这里从store拿到用户信息
    const roleName = 'admin'
    // 判断当前用户，是否有权限来访问当前的UI组件
    const isAuth = roleArr.includes(roleName)

    return props=>{
      return (
        <>
        {
          isAuth
          ? <div>
              <WrappedComponent {...props} />
            </div>
          : <NotMatch />
        }
        </>
      )
    }
  }
}

export default auth
// 用法：auth(['admin', 'editor'])(UI)
