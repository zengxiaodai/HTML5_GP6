import React from 'react'
import ThemeCtx from '@/utils/theme'

// 上下文
// 作用：在组件树中自上而下地传递数据
// 特点：只能从根组件向后代组件传递数据，反过来是不行的
// 应用：状态管理(mobx、redux)使用上下文向组件提供数据的

// 二、在类组件中使用上下文数据的第一种写法
export default class extends React.Component {
  render() {
    console.log('props', this.props)
    return (
      <ThemeCtx.Consumer>
      {
        theme => {
          console.log('theme', theme)
          return (
            <div style={theme}>
              <h1>学习上下文</h1>
            </div>
          )
        }
      }
      </ThemeCtx.Consumer>
    )
  }
}


// 一、在类组件中使用上下文数据的第二种写法

// class StudyContext extends React.Component {
//   render() {
//     console.log('ctx', this.context)
//     const theme = this.context
//     return (
//       <div style={theme}>
//         <h1>学习上下文</h1>
//
//       </div>
//     )
//   }
// }
//
// StudyContext.contextType = ThemeCtx
// export default StudyContext
