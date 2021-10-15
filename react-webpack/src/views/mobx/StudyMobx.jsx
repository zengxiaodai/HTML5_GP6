import React from 'react'
import { inject, observer } from 'mobx-react'
// inject 从上下文中取出store数据，向React组件中注入数据
// observer 把当前React组件变成观察者，当store数据变化时，React组件自动更新

@inject(['study'])
@observer
class StudyMobx extends React.Component {
  render() {
    let { study } = this.props
    return (
      <div>
        <h1>{study.msg}</h1>
        <button onClick={()=>study.changeMsg('hello GP7')}>修改store中的msg</button>
      </div>
    )
  }
}

export default StudyMobx
