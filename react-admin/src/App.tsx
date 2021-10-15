import React from 'react'
import { HashRouter } from 'react-router-dom'

import { ConfigProvider } from 'antd'
import { LangProvider } from '@/lang'

// import enUS from 'antd/lib/locale/en_US'
import zhCN from 'antd/lib/locale/zh_CN'

// import en from '@/lang/en'
import zh from '@/lang/zh'

import { Provider } from 'react-redux'
import store from '@/store'

import Dashboard from './dashboard/index'

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <LangProvider value={zh}>
            <div className="app">
              <Dashboard />
            </div>
          </LangProvider>
        </ConfigProvider>
      </Provider>
    </HashRouter>
  )
}

export default App
