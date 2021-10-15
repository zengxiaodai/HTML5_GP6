import { makeAutoObservable } from 'mobx'
import axios from 'axios'

export default class Test {
  constructor() {
    makeAutoObservable(this)
  }
  msg = 'hello rn'
  list = []
  changeMsg(payload) {
    this.msg = payload
  }
  getConde(params) {
    axios({
      url: 'https://cnodejs.org/api/v1/topics',
      method: 'get',
      params
    }).then(res=>{
      console.log('res', res)
      this.list = res.data.data
    })
  }
}
