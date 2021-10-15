import React from 'react'

// 事件绑定
// 在React中的事件名，都是以on*开头的，比如onClick、onKeyUp等，这种事件叫做React合成事件。
// 使用ES5的方式绑定事件，事件对象永远都是最后一个参数，还需要使用bind()来解决this指向问题。
// 使用箭头函数的方式绑定事件，事件对象需要手动传递，this默认就指向当前组件的实例对象。

const Child = ()=> {
  function click(e, arg) {
    console.log('clicked', e, arg)
  }
  return <button onClick={(e)=>click(e, '33')}>点我</button>
}

export default class extends React.Component {
  click1(arg, event) {
    console.log('click1 clicked', this)
    console.log('click1 event', event)
    console.log('click1 arg', arg)
  }

  click2(event, arg) {
    console.log('click2 clicked', this)
    console.log('click2 event', event)
    console.log('click2 arg', arg)
  }

  innerHandle(event) {
    event.stopPropagation()
    console.log('inner')
  }

  checkboxHandle(event) {
    event.preventDefault()
    console.log('checkbox clicked')
  }

  searchHandle(event) {
    if(event.keyCode === 13) {
      console.log('key code', event.keyCode)
      console.log('开始搜索')
    }
  }

  render() {
    return (
      <div>
        <h1>学习事件绑定</h1>

        {/* 使用ES5的语法，使用bind()修改this指向 */}
        <button onClick={this.click1.bind(this, '11')}>点击1</button>
        <br/>

        {/* 使用ES6的语法，在箭头函数中this默认指向当前实例对象 */}
        <button onClick={e=>this.click2(e, '22')}>点击2</button>
        <br/>

        <div style={styles.outer} onClick={()=>console.log('outer')}>
          <div style={styles.inner} onClick={e=>this.innerHandle(e)} />
        </div>

        <div>
          <input type="checkbox" onClick={e=>this.checkboxHandle(e)} />
        </div>

        <div>
          名称搜索：<input type="text" onKeyUp={e=>this.searchHandle(e)} />
        </div>

        <Child />

      </div>
    )
  }
}

const styles = {
  outer: {
    width: '150px',
    height: '150px',
    border: '1px solid red'
  },
  inner: {
    width: '100px',
    height: '100px',
    border: '1px solid blue'
  }
}
