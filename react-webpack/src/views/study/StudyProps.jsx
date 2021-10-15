import React from 'react'

// props
// props 是父子组件之间通信的桥梁。路由、状态管理、父子组件通信、组件化。。。
// 特点：在组件内部不能修改props。
// 类组件和函数式组件，都有props。在类组件中使用this.props访问，在函数式组件中函数的入参就是props。
// props可以向后代组件传递以下数据类型：原始数据类型、数组、对象、函数、JSX元素（React元素）.
// 注意：当向子组件传递函数时，我们约定属性名称以 “onMyEvent={fn}” 这种语法编写代码。
// 使用自定义组件时，可以嵌套其它的任何JSX元素，在子组件中使用props.children来接收。

function HelloChild(props) {
  console.log('子 props', props)
  return (
    <div>
      <h2>我是子组件</h2>
      <h2>{props.xxx}</h2>
    </div>
  )
}

export default class extends React.Component {
  render() {
    console.log('父 props', this.props)
    return (
      <div>
        <h1>学习Props</h1>
        <hr/>

        <HelloChild
          xxx='123'
          msg='hello child'
          {...this.props}
          bol={false}
          type={null}
          arr={[1,2,3]}
          user={{name:'lisi',avatar:''}}
          header={<header>我是头部</header>}
          onRun={()=>console.log('event')}
        >
          <div>一行文字</div>
          <div>二行文字</div>
        </HelloChild>

      </div>
    )
  }
}
