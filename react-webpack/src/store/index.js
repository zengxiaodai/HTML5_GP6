// React生态中有两个经典的状态管理工具
// 面试题：mobx 与 redux 有区别？

// mobx、mobx-react
// redux、react-redux

// Flux是React官方团队提出一种流程化(单向数据流)的状态管理思想。
// Redux 比较适用大型的React项目、基于React高阶和上下文来实现的。
// Mobx 比较适用小型的React项目、基于响应式原理来实现的。

// 关于mobx的版本问题（这个两个版本的语法和api相关很大）：
// mobx(v5)、mobx-react(v6)  [2020年8月之前，使用mobx(v5)]
// mobx(v6)、mobx-react(v7)  [2020年8月之后，使用mobx(v6)]

import StudyStore from './modules/study'
import UserStore from './modules/user'

class Store {
  constructor() {
    // init sub store
    this.study = new StudyStore()
    this.user = new UserStore()
  }
}
export default new Store()

// [mobx 5语法示例]（2020年8月之前）
// import { observable, action, computed, autorun } from 'mobx'
// class SubStore {
//   @observable list = []
//   @action changeList(payload) {
//     this.list = payload
//   }
//   @computed get total() {
//     return this.list.length
//   }
//   @autorun getToken(){
//     console.log('自动运行')
//   }
// }
