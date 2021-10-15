// import { makeAutoObservable } from 'mobx'

import {
  makeObservable,
  observable,
  action,
  flow,
  computed
} from 'mobx'

import { fetchCnodeList } from '@/api'

export default class StudyStore {
  constructor() {
    // 把当前类中的成员属性变成可共享的响应式数据（相当于是vuex中的state）
    // 把当前类中的成员方法变成可触响应式数据变化的函数（相当于vuex中的actions和mutations）
    // makeAutoObservable(this)

    makeObservable(this, {
      msg: observable,
      list: observable,
      total: computed,

      // 概念：Actions
      changeMsg: action,
      getCnodeList: action,
      getCnodeList2: flow,

    })
  }
  msg = 'hello mobx'
  list = []

  // 计算属性一定要用get关键字进行修饰
  get total() {
    return this.list.length
  }


  changeMsg(payload) {
    this.msg = payload
  }
  getCnodeList(params) {
    fetchCnodeList(params).then(list=>{
      console.log('文章列表', list)
      this.list = list
    })
  }
  async getCnodeList2(params) {
    const list = await fetchCnodeList(params)
    console.log('async list', list)
    this.list = list
  }
}
