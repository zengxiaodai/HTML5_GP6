import React from 'react'

import { test, theme, auth, config } from '@/hoc'

// 高阶组件
// 作用：是一种业务逻辑复用的高级技巧。
// 语法基础：React组合特性。
// 本质：高阶组件本质上就是一个纯函数，所以高阶组件也被称之为“高阶函数”。
// 应用：状态管理(redux)就是基于高阶组件封装的。

// 一、使用高阶组件的第一种写法
// class StudyHoc extends React.Component {
//   render() {
//     let { footer } = this.props
//     return (
//       <div>
//         <h1>学习高阶组件</h1>
//         { footer() }
//       </div>
//     )
//   }
// }
// const NewStudyHoc = test(StudyHoc)
// export default NewStudyHoc


// 二、使用高阶组件的第二种写法
// ES6环境默认不支持装饰器语法，要安装相关Babel插件
// 当多个高阶组件对同一个UI组件进行修饰时，会出现props被覆盖的问题。怎么解决呢？使用属性继承。
// @theme
// @test
// @auth(['editor'])
// class StudyHoc extends React.Component {
//   render() {
//     console.log('props', this.props)
//     let { footer } = this.props
//     return (
//       <div>
//         <h1>学习高阶组件</h1>
//         { footer && footer() }
//       </div>
//     )
//   }
// }
// export default StudyHoc


// 三、使用高阶组件的第三种写法
export default config(auth(['admin','editor'])(
  test(theme(props => {
    console.log('props', props)
    let { footer, theme } = props
    return (
      <div>
        <h1>学习高阶组件</h1>
        { footer && footer() }
      </div>
    )
  }))
))
