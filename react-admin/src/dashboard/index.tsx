import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Layout, Login } from '@/components'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { getUserInfo } from '@/store/reducers/user'

export default () => {
  const history = useHistory()
  const dispatch = useAppDispatch()

  const u = useAppSelector(({user})=>user.user)
  const token = useAppSelector(({user})=>user.token)

  // 如果有token，触发获取用户信息
  useEffect(()=>{
    if(token) dispatch(getUserInfo(token))
  }, [token, dispatch])

  // 如果没有token，跳转到登录页
  useEffect(()=>{
    if(!token) history.replace('/login')
  }, [token, history])

  return (
    u.roleName
    ? <Route path='/' component={Layout} />
    : <Route path='/login' component={Login} />
  )
}
