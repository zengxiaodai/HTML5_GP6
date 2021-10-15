import React, { Component } from 'react'

import { Text } from 'react-native'
import { inject, observer } from 'mobx-react'

@inject(['test'])
@observer
class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('this props', this.props.test)
    let { test } = this.props
    return (
      <>
        <Text>登录页面</Text>
        <Text>{test.msg}</Text>
      </>
    )
  }
}
export default Login
