import React from 'react'

// import { connect } from 'react-redux'
// 语法： connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)

import { qfconnect } from '../qf'

import { updateMsg } from '@/store/actions'

function mapStateToProps({test}) {
  return {
    msg: test.msg
  }
}
function mapDispatchToProps(dispatch) {
  return {
    // 行为的封装
    updateMsg: payload => dispatch(updateMsg(payload))
  }
}

@qfconnect(mapStateToProps, mapDispatchToProps)
class PanelA extends React.Component {
  updateMsg() {
    // 我的角色是“视图”，我想修改的数据在redux中
    this.props.updateMsg(Math.random())
  }
  render() {
    console.log('props', this.props)
    return (
      <div>
        <h1>在类组件中使用Redux数据</h1>
        <h1>{this.props.msg}</h1>
        <button onClick={()=>this.updateMsg()}>修改MSG</button>
      </div>
    )
  }
}
export default PanelA
