import React, { useState } from 'react'

// 一、类组件
// 1、使用class关键字来定义，并extends继承自React.Component
// 2、类组件有完整的生命周期钩子函数(constructor/render/componentDidMount.....)
// 3、在类组件中，可以使用 ref、上下文、this等特性
// 4、类组件有state
// 5、相对函数式组件，类组件运行性能较差。

// export default class extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: ''
//     }
//   }
//   changeName(e) {
//     this.setState({
//       name: e.target.value
//     })
//   }
//   render() {
//     console.log('this', this)
//     const { name } = this.state
//     return (
//       <div>
//         <h1>我是类组件</h1>
//         <hr/>
//         <input type="text" value={name} onChange={this.changeName.bind(this)} />
//         <h2>{name}</h2>
//       </div>
//     )
//   }
// }


// 二、函数式组件（无状态组件）
// 1、使用function或箭头函数来定义，它不继承自React.Component
// 2、函数式组件，没有生命周期，没有this、ref、上下文等
// 3、函数式组件没有state，所以也被称之为“无状态组件”
// 4、相对类组件，函数式组件运行性能更好。
// 5、自React16.8以后，完全可以不用类组件了，全部使用函数式组件进行编码。

export default () => {
  // do something
  const [name, setName] = useState('')
  return (
    <div>
      <h1>我是函数式组件</h1>
      <hr/>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} />
      <h2>{name}</h2>
    </div>
  )
}
