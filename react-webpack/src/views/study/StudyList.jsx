import React from 'react'

const Child = (props)=> <div>{props.children}</div>

const UserRow = ({user, inline}) => (
  <div style={{display: inline ? 'inline-block' : 'block'}}>
    {`${user.id}--${user.name}--${user.age}`}
  </div>
)

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, name: 'lisi-1', age: 20 },
        { id: 2, name: 'lisi-2', age: 30 },
        { id: 3, name: 'lisi-3', age: 40 },
        { id: 4, name: 'lisi-4', age: 50 }
      ]
    }
  }

  renderList1() {
    let { list } = this.state
    return list.map(ele=>{
      // do something
      ele.age += 3
      return <UserRow user={ele} key={ele.id} />
    })
  }

  renderList2() {
    let { list } = this.state
    let result = []
    list.map((ele,idx)=>{
      // do something
      ele['checked'] = (idx%2===0)
      result.push(
        <div key={ele.id}>
          <input type="checkbox" checked={ele.checked} onChange={()=>false}/>
          <UserRow user={ele} inline />
        </div>
      )
    })
    return result
  }

  render() {
    let { list } = this.state
    const arr = list.map(ele=><UserRow user={ele} key={ele.id} />)

    return (
      <div>
        <h1>学习列表渲染</h1>
        {/* 列表循环的语法基础：JSX可以直接嵌套数组 */}
        {
          [
            null,
            undefined,
            false,
            true,
            <div key='1' className='row'>一行文字</div>,
            [
              <div key='2'>二行文字</div>,
              <Child key='3'>
                <a href="#">超链接</a>
              </Child>
            ],
            ...[
              'hello react',
              10000
            ]
          ]
        }

        {/* 列表渲染的第一种写法（不封装方法）：一般不用对数组做二次处理 */}
        { list.map(ele=><UserRow user={ele} key={ele.id} />) }
        <hr/>
        { arr }
        <hr/>

        {/* 列表渲染的第二种写法（封装方法）：一般要对数组做二次处理 */}
        { this.renderList1() }
        <hr/>
        { this.renderList2() }

      </div>
    )
  }
}
