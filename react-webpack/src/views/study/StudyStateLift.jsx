import React from 'react'

// 状态提升（基于父子组件通信的另一种通信方式）
// 作用：当两个组件之间需要共享数据时，我们要把这个需要共享的数据定义在它们最近的父组件的state中。
// 原理基础：state是响应式的，当state被this.setState()更新时，diff运算会找到所有的子节点(组件)的变化，去更新它们。state是单向数据流(自上而下)，只能向下流动，不能向上流动。

const Centigrade = ({value, onChange})=> {
  return (
    <div style={styles.c}>
      <span>请输入摄氏温度：</span><br/>
      <input
        type='number'
        value={value}
        onChange={e=>onChange&&onChange(Number(e.target.value))}
      />
    </div>
  )
}

const Fahrenheit = ({ value }) => {
  return (
    <div style={styles.f}>
      <span>当前华氏温度的结果是：</span>
      <span>{((value * 9 / 5) + 32).toFixed(2)}</span>
    </div>
  )
}

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: ''   // 摄氏温度
    }
  }
  render() {
    let { temperature } = this.state
    return (
      <div>
        <h1>学习状态提升</h1>
        <Centigrade
          value={temperature}
          onChange={t=>this.setState({temperature:t})}
        />
        <Fahrenheit value={temperature} />
      </div>
    )
  }
}

const styles = {
  c: {
    padding: '20px',
    border: '1px solid #ccc'
  },
  f: {
    padding: '20px',
    border: '1px solid orange'
  }
}
