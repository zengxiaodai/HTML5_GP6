
// import Music from '@/views/Music'
// import txt from '@/utils/hello.txt'
// console.log('txt', txt)
// function Hello(props) {
//   return <h1>{props.hello}</h1>
// }

import React from 'react'
import ThemeCtx from '@/utils/theme'

import DashBoard from '@/dashboard'

import '@/assets/style.css'
import '@/assets/style.scss'
// 引入antd的样式文件（使用CDN加速css导入）
// import 'antd/dist/antd.css'

import { HashRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import store from '@/store'

function App() {
  // const [theme, setTheme] = useState({
  //   color: '#ffffff',
  //   background: '#000000'
  // })
  return (

    <HashRouter>
      {/* mobx-react的这个 Provider组件的属性可以自定义 */}
      <Provider {...store}>
        <ThemeCtx.Provider value={{color:'#000000', background:'#ffffff'}}>
          <DashBoard />
        </ThemeCtx.Provider>
      </Provider>
    </HashRouter>
  )
}

export default App
