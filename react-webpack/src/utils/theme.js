import React from 'react'

const ThemeCtx = React.createContext()
// <ThemeCtx.Provider> 可以组件树注入数据
// <ThemeCtx.Consumer> 可以在组件中使用上下文

export default ThemeCtx
