import { Component } from 'react'
import { Provider } from 'mobx-react'
import './app.scss'
import Taro from '@tarojs/taro'

import store from './store'

export default class App extends Component {
  onLaunch() {
    console.log('启动了')
    Taro.login().then(res=>{
      console.log('code', res)
      // Taro.request().then()
    })
  }
  render() {
    let { props } = this
    return (
      <Provider {...store}>
        {props.children}
      </Provider>
    )
  }
}
