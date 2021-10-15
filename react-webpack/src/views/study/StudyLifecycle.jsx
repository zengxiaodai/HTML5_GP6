import React from 'react'

// 生命周期（3-2-1）
// 第一阶段(3)：装载阶段 constructor、render、componentDidMount
// 第二阶段(2)：更新阶段 [render|shouldComponentUpdate]、componentDidUpdate
// 第三阶段(1)：卸载阶段 componentWillUnmount

export default class extends React.Component {
  // constructor
  // React类的构造器函数，它的入参是props，它的第一行代码是super(props)
  // super(props) 调用父类的构造器，目的是继承Component类的成员属性和成员方法.
  // 类组件的声明式state必须定义在这个生命周期中，语法this.state={}
  // 注意1：不要在这里对props和state进行交叉赋值，目的是保证props与state的完全彼此独立。
  // 注意2：不要这里使用this.setState()，会导致render()运行错误。
  // 在构造器函数中可以执行异步操作(调接口、开启websocket、定义器)，但是不推荐这段做。无论你做什么异步操作，都不要涉及到this.setState()的调用。
  // 除了可以做异步任务以外，还可以执行一些初始化操作（this指向修改）。
  // 永远不要修改props。
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      loading: false
    }
    // do something
    console.log('-----constructor')
  }

  // componentDidMount
  // 这个生命周期相当于是vue中的mounted()，表示视图初始化渲染已完成。
  // 在这里可以正常访问到DOM结构、可以执行DOM操作、Ref操作。
  // 在这里经常触发调接口、开定时器、建立长连接、各种与DOM相关的UI插件的初始化(图表、地图等)。
  // 在这里可以使用this.setState()，可以做任何事儿。
  componentDidMount() {
    console.log('-----componentDidMount')
  }

  static getDerivedStateFromProps(state, props) {
    console.log('state', state)
    console.log('props', props)
    return null
  }

  // shouldComponentUpdate
  // 这是组件更新的“开关”，这个生命钩子必须返回一个布尔值，当返回“真”时，组件正常render更新；当返回“假”时，组件不更新。
  // 作用：用于精细化地控制组件的更新机制，避免那些与视图渲染无关的state变量的变化导致render发生、diff运算发生。本质上是一种性能优化的方案。
  // 在这里也不能使用this.setState()
  // 在这里不要做复杂的业务运算
  shouldComponentUpdate(state, props) {
    console.log('-----shouldComponentUpdate')
    return true
  }

  // componentDidUpdate
  // 这个生命周期相当于是vue中的updated，表示视图更新已完成
  // 在这里不能使用this.setState()
  // 在这里可以做任何事儿，只要不做this.setState()这个操作就行。
  // 在这里可以访问到更新成功后的最新DOM结构。
  componentDidUpdate() {
    console.log('-----componentDidUpdate')
  }

  // componentWillUnmount
  // 这个生命周期相当于是vue中的beforeDestory()，表示当前组件即将销毁
  // 在这里不能使用this.setState()
  // 一般在这里清除定时器、关闭长连接、清除缓存等。
  componentWillUnmount() {
    console.log('-----componentDidUpdate')
  }

  // render
  // 也叫做渲染函数，每次执行都会返回新的JSX对象（进而生成新的虚拟DOM）
  // 注意：在渲染函数中永远不能使用this.setState()，在那些参与视图渲染的自定义方法也不能使用this.setState()。
  // render()必须要有返回值，一般返回的都是JSX对象，如果真的不需要返回值、可以返回null。
  // 在render()函数的return语句之前，可以做任何事（this.setState除外）。
  // 特点：每次render执行，都会触发新虚拟DOM的生成，还会执行diff运算。
  // render() 在装载阶段会运行，在更新阶段也会运行，它跨越了两个阶段。
  render () {
    console.log('-----render')
    let { count } = this.state
    // do something
    return (
      <div>
        <h1>学习生命周期</h1>
        <h1>{count}</h1>
        <button onClick={()=>this.setState(s=>({count:s.count+1}))}>自增</button>
      </div>
    )
  }
}
