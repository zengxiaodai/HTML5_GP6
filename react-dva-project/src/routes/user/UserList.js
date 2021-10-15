import React from 'react'

import { connect } from 'dva'

class UserList extends React.Component {
  componentDidMount() {
    let { dispatch } = this.props
    dispatch({type: 'user/getList', payload: {}})
  }
  skip(ele){
    let { history } = this.props
    // 动态路由传参
    history.push('/user/info/'+ele.id)
  }
  render() {
    console.log('user list props', this.props)
    let { list } = this.props
    return (
      <div>
        <h1>用户列表</h1>
        {
          list.map(ele=>(
            <div key={ele.id} onClick={()=>this.skip(ele)}>
              <span>{ele.id}</span>
              --
              <span>{ele.name}</span>
              --
              <span>{ele.age}</span>
            </div>
          ))
        }
      </div>
    )
  }
}

export default connect(model=>model.user)(UserList)
