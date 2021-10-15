import React from 'react'

export default class Music extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }
  changeCount(type) {
    let { count } = this.state
    this.setState({ count: type==='add' ? count+1 : count-1})
  }
  render() {
    return (
      <div>
        <h1>音乐列表</h1>
        <div>{this.state.count}</div>
        <button onClick={()=>this.changeCount('add')}>自增</button>
        <button onClick={()=>this.changeCount('sub')}>自减</button>
      </div>
    )
  }
}
