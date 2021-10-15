import React from 'react'

// 入参：WrappedComponent是React组件
// 返回值：一个新的React组件

// 结论：高阶组件（高阶函数）被称之为“容器组件”，WrappedComponent被称之为“UI组件”

const Footer = ()=>(<footer>网站的底部</footer>)

export default function(WrappedComponent) {

  const point = (id)=> {
    // ajax
    console.log('调接口进行埋点', id)
  }

  return class extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <>
          <WrappedComponent
            { ...this.props }
            a='hello world'
            b={100}
            footer={()=><Footer />}
            onPoint={point}
          />
        </>
      )
    }
  }
}
