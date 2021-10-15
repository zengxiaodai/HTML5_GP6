import React from 'react'

// state 声明式
// 特点：只有使用this.setState()这个专属API来修改state时，视图才能更新。
// this.setState()会带来这么一套连环工作：触发render执行、返回新的JSX、进而生成新的虚拟DOM、再进一步执行diff运算（找出脏节点）、最后更新视图并删除掉旧的虚拟DOM。

// state声明式变量必须定义在构造器函数constructor()中，语法this.state = {}
// 坑：修改state时，如果没有用到this.setState()这个专属方法，render()不执行，视图不会更新。所以在业务逻辑中永远不要直接修改state，但是可以用state变量参与计算。
  // [wrong] this.state.count++
  // [wrong] this.state.arr.push({a:1})
  // [wrong] this.state.info['name'] = 'lisi'
  // [wrong] delete this.state.info.name
  // [ok] const num = this.state.count*100
  // [ok] const list = [...this.state.arr, {a:1}]

// 语法1：this.setState({}, callback)。在业务逻辑中，如果新state与旧state毫无关系，直接使用这种语法。
// 语法2：this.setState((state,props)=>({}), callback)。在业务逻辑中修改state变量时，如果新state是由旧state计算而来，建议使用这种语法。

// this.setState()在合成事件(on*系列的事件处理器，生命周期的钩子函数)中是异步的。在定时器(setTimeout、setInterval)是同步的。在Promise的.then()中使用this.setState()是异步的。

export default class extends React.Component {
  constructor(props) {
    super(props)
    // 声明式变量的定义
    this.state = {
      count: 1,
      a: 100,
      b: 200,
      c: 300,
      name: 'LiSi',
      show: true
    }
  }

  subCount() {
    // [wrong] this.state.count--
    // [wrong] this.setState({ count: (--this.state.count) })
    // [ok] [只是不够优雅] this.setState({ count: this.state.count - 1})
    // [ok] [只是不够优雅] this.setState(state=>{return {count: state.count - 1}})
    setTimeout(()=>{
      // 下面两行代码是同步
      this.setState(state=>({count:state.count-1}))
      console.log('flag a', this.state.count)
    }, 0)
    console.log('flag b', this.state.count)
  }

  addCount() {
    // [wrong] this.state.count++
    // [wrong] this.setState({ count: (++this.state.count) })
    this.setState(state=>({count:state.count+1}), ()=>{
      console.log('flag a', this.state.count)
    })
    console.log('flag', this.state.count)
  }

  handle() {
    this.setState({a: 1000})
    console.log('a', this.state.a)
    this.setState({b: 2000})
    console.log('b', this.state.b)
    this.setState({c: 3000})
    console.log('c', this.state.c)
    this.setState({a: 10000})
    this.setState({c: 30000})
    // 在React合成事件中，React会自动帮我们把多个异步的setState合并成一个setState()，只触发一次render()、一次diff运算、一次DOM更新。
    this.setState({
      a: 10000,
      b: 2000,
      c: 30000,
      d: 4000
    }, ()=>{
      console.log('new state', this.state)
    })
  }

  render() {
    // do something
    const { count, name, show, num } = this.state
    console.log('-----render-----')
    return (
      <div>
        <h1>学习state</h1>
        <hr/>

        <h1>{count}</h1>
        <button onClick={()=>this.subCount()}>自减</button>
        <button onClick={()=>this.addCount()}>自增</button>
        <hr/>

        <button onClick={()=>this.handle()}>操作</button>
        <hr/>

        <h1>{name}</h1>
        <button onClick={()=>this.setState({name:'ZhangSan'})}>改名</button>
        <hr/>

        { show && <h1>我是一个可有可无的人</h1> }
        <button onClick={()=>this.setState(s=>({show:!s.show}))}>显示/隐藏</button>
        <hr/>
      </div>
    )
  }
}
