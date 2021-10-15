import React from 'react'

import { observer, inject } from 'mobx-react'
import { useHistory } from 'react-router-dom'

import { Layout, Login } from '@/components'
import { Route } from 'react-router-dom'

export default inject(['user'])(observer(
  ({user}) => {
    const history = useHistory()

    const token = user.token
    if(!token) history.replace('/login')
    return (
      token
      ? <Route path='/' component={Layout} />
      : <Route path='/login' component={Login} />
    )
  }
))
