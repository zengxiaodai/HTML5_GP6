import React, { Component } from 'react'

import QfModal from './components/QfModal'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  // 打开弹框修改用户
  userEdit() {
    // do something
    this.setState(state=>({show: !state.show}))
  }

  render() {
    let { show } = this.state
    return (
      <div>
        <h1>学习组合</h1>

        <button onClick={()=>this.userEdit()}>修改用户名</button>

        <QfModal
          visible={show}
          onCancel={()=>this.setState(s=>({show:!s.show}))}
          closeIcon={<span>XX</span>}


        >
          <input type="text"/>
        </QfModal>
      </div>
    )
  }
}
