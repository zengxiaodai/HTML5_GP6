import React, { useState } from 'react'

// 父子组件通信：使用props实现

const Child = props => {
  const [msg, setMsg] = useState('')
  function send() {
    props.onReceive(msg)
    setMsg('')
  }
  return (
    <div>
      <h2>我是Child组件</h2>
      <input type="text" value={msg} onChange={e=>setMsg(e.target.value)} />
      <button onClick={send}>向父亲发消息</button>
      <div>
        父亲说：
        { props.content }
      </div>
    </div>
  )
}

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      content: '',
      childcontent: ''
    }
  }
  send() {
    this.setState({content: this.state.msg, msg: ''})
  }
  receive(e) {
    console.log('来自孩子的消息', e)
    this.setState({childcontent: e})
  }
  render() {
    let { msg, content, childcontent } = this.state
    return (
      <div>
        <h1>我的父组件</h1>
        <input type="text" value={msg} onChange={e=>this.setState({msg:e.target.value})}  />

        <button onClick={()=>this.send()}>向孩子发消息</button>
        <div>
          儿子说：
          { childcontent }
        </div>
        <hr/>
        <Child content={content} onReceive={(e)=>this.receive(e)} />
      </div>
    )
  }
}
