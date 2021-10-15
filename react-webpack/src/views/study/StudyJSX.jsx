import React from 'react'

// React类（组件） vs. React元素（JSX元素）
// QfChild - React类（React组件）
// <QfChild /> - React元素（JSX元素）
// 特别提醒：定义React类（React组件）的名字，必须采用大驼峰命名法。

// 1、JSX = JavaScript XML，是一种语法糖，是JavaScript的一个语法版本，是React团队设计的。
// 2、作用：JSX可以大大地提升React的可维护性，但是在React开发中JSX语法不是必须的。
// 3、JSX在React环境默认是不支持的，要安装@babel/preset-react进行编译，编译的结果是React.createElement()的语法。
// const ele = (
//   <div className='container'>
//     <h1>学习JSX</h1>
//     <h2>
//
//       <span className='box'>
//         <a href="https://baidu.com" target='_blank'>百度</a>
//       </span>
//     </h2>
//   </div>
// )
// const eA = React.createElement('a', {href:'https://baidu.com',target:'_blank'}, ['百度'])
// const eSpan = React.createElement('span',{className:'box'},[eA])
// const eH2 = React.createElement('h2', null, [eSpan])
// const eH1 = React.createElement('h1', null, ['学习JSX'])
// const res = React.createElement('div', {className:'container'}, [eH1, eH2])

// 4、JSX是变量，是对象，也是React元素（不是React组件）。
// 5、JSX中，可以写注释，语法是： {/* 注释内容 */}
// 6、JSX中可以使用变量（原始数据类型、数组、函数调用），但要使用 {} 包起来。
// 7、JSX中的 {} 里只能使用表达式，不能使用使用语句。
// 8、JSX中的 {} 表达式的返回值，如果文本类的值会参与视图渲染；如果是布尔值、undefined、null都不显示（也不报错）。
// 9、JSX中的 {} 表达式的返回值，还可以是数组（多维数组）。
// 10、当使用style时，{} 可以放样式的CSS键值对的对象：style={{color:'red',opacity:'0.5'}}。
// 11、JSX中使用动态属性也可用 {} 包起来。
// 12、JSX中有三个特殊的属性：className(相当于HTML中的class)，htmlFor(相当于HTML中的for)，tabIndex(相当于HTML中的tabindex)。
// 13、JSX中新增了三个新属性：key，ref，dangerouslySetInnerHTML(相当于是vue中的v-html)
// 14、JSX的 {}语法，可以防注入攻击（XSS）。
// 15、JSX是不可变对象。当使用this.setState()这种方式来修改声明式变量时，这会触发渲染函数render重新运行、返回一个全新的JSX对象，进一步得到一个新的虚拟DOM。再与上一个旧的虚拟DOM进行diff运算，找到出两个虚拟DOM的最小差异（脏节点），最后把脏节点更新到视图中去。

const Child = (props) => {
  // console.log('study jsx child props', props)
  return <div>我是child</div>
}

class StudyJSX extends React.Component {
  // 构造函数
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      title: 'qf',
      attr: {
        className: 'on',
        title: 'qf'
      }
    }
    console.log('StudyJSX props', this.props)
  }
  renderHello() {
    return <h1>Hello GP6</h1>
  }
  addCount() {
    this.setState({
      count: this.state.count+1
    })
  }
  componentDidMount() {
    this.timer = setInterval(()=>{
      this.setState({
        count: this.state.count+1
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  // 渲染函数
  render() {
    return (
      <div>

        <h1>学习JSX</h1>
        {/*
          <h2>一行文字</h2>
          <h1>二行文字</h1>
        */}
        <hr/>
        <h1>{ this.state.count*100 }</h1>
        <h1>{ null }</h1>
        <h1>{ undefined }</h1>
        <h1>{ true }</h1>
        <h1>{ false }</h1>
        <h1>Hello React</h1>
        <h1>{ 'Hello React' }</h1>
        <h1>100</h1>
        <h1>{ 100 }</h1>
        <h1>{ '100' }</h1>
        <hr/>
        <div>
          {
            [
              200, '300', false, true, null, undefined,
              <h1 key='1'>数组的一行</h1>,
              <h1 key='2'>数组的二行</h1>,
              [
                <h1 key='3'>数组的三行</h1>,
                <h1 key='4'>数组的四行</h1>
              ]
            ]
          }
        </div>
        <div style={{color:'red',opacity:'0.8'}}>
          { this.renderHello() }
        </div>
        <hr/>
        <h1 title='qf'>测试属性的写法（静态属性）</h1>
        <h1 title={'qf'+'html5'}>测试属性的写法（静态属性）</h1>
        <h1 title={this.state.title}>测试属性的写法（动态属性）</h1>
        <div />
        <div>
          <input disabled={true} type="text"/><br/>
          <input disabled type="text"/>
        </div>
        {/* 属性继承 */}
        <div {...this.state.attr}>接受一组属性</div>
        <br/>
        <h1>
          {
            (()=>[1,2,3,4].map(ele=>(<div key={ele}>{ele}</div>)))()
          }
        </h1>
        <hr/>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.addCount()}>自增</button>

        {/* 使用属性继承把路由api传递给Child组件（不推荐这么干） */}
        <Child {...this.props} />
        <hr/>
      </div>
    )
  }
}

export default StudyJSX
