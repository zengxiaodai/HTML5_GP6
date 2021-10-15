import React from 'react'

// 条件渲染
// 1、使用 &&、!、三元表达式、switch封装render函数实现条件渲染。类似vue中的v-if*。
// 2、使用className和style，从css角度实现条件渲染。类似vue中的v-show和动态样式。
  // className={`${asyncClassName} static`}
  // style={ styleObj }

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bol1: true,
      bol2: true,
      idx: 1,
      toggle: '',
      size: 20,
      show: true
    }
  }

  renderRow() {
    const { idx } = this.state
    let result = null
    switch (idx) {
      case 1:
        result = <h2>1111111111111</h2>
        break
      case 2:
        result = <h2>2222222222222</h2>
        break
      case 3:
        result = <h2>3333333333333</h2>
        break
      case 4:
        result = <h2>4444444444444</h2>
        break
      default:
    }
    return result
  }


  render() {

    const {
      bol1,
      bol2,
      idx,
      toggle,
      size,
      show
    } = this.state

    return (
      <div>
        <h1>条件渲染</h1>

        {/* 单一元素的显示与隐藏 */}
        { bol1 && <h2>我是一行文字</h2> }
        <button onClick={()=>this.setState(s=>({bol1:!s.bol1}))}>显示/隐藏</button>

        {/* 两个元素的显示与隐藏 */}
        {/* bol2 && <h2>我是白天</h2> */}
        {/* !bol2 && <h2>我是黑夜</h2> */}
        {
          bol2 ? <h2>我是白天</h2> : <h2>我是黑夜</h2>
        }
        <button onClick={()=>this.setState(s=>({bol2:!s.bol2}))}>显示/隐藏</button>

        {/* 三个以上的元素的显示与隐藏 */}
        { idx===1 && <h2>1111111111111</h2> }
        { idx===2 && <h2>2222222222222</h2> }
        { idx===3 && <h2>3333333333333</h2> }
        { idx===4 && <h2>4444444444444</h2> }
        <hr/>
        { this.renderRow() }
        <button onClick={()=>this.setState(s=>({idx:s.idx===4?1:s.idx+1}))}>切换</button>
        <hr/>

        <h2 className={`${toggle} box`}>奥运会中国加油</h2>
        <button onClick={()=>this.setState(s=>({toggle:s.toggle?'':'hidden'}))}>显示/隐藏</button>
        <hr/>

        <h2
          style={
            {
              ...styles.box,
              [('font-size')]: size+'px',
              display: show ? 'block' : 'none'              
            }
          }
        >
          奥运会中国加油
        </h2>
        <button onClick={()=>this.setState(s=>({size:s.size+2}))}>放大</button>
        <button onClick={()=>this.setState(s=>({show:!s.show}))}>显示/隐藏</button>

      </div>
    )
  }
}

const styles = {
  box: {
    background: 'orange',
    color:'blue',
    'border-bottom': '1px solid red',
    paddingBottom: '20px',
  }
}
