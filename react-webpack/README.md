created by gp6 at 07-26

# Webpack
- 常识：目前市场还有使用v4。
- 趋势：v5简单很多、性能更好；vite呼声很高。
- 相关：rollup、gulp……
- 知识：入口、出口、loaders、plugins、WDS、HMR、生产与开发分离
- 扩展：工程层面的性能（代码打包优化、构建速度优化）
- 扩展：自定义loader、自定义plugin

# React全家桶

- React：JSX、事件绑定、表单绑定、两种组件、生命周期、state、props、组合、上下文、高阶组件
- Hooks：用于函数式组件的一套API、 自定义Hooks
- Router：常用组件、代码分割、Hooks API、路由实战应用（路由传参、嵌套视图、权限管理）
- Antd：布局类组件、表单组件、表格组件……
- Mobx：依赖收集（本质上不是响应式的）注意识别v5和v6的代码风格。
- Mobx-React（这才是响应式实现的核心）：
  - Provider(使用上下文注入mobx数据)、
  - inject(把mobx数据放到props上)、
  - observer(对props数据进行getter/setter支持，当props数据变化时，forceUpdate强制更新组件视图)。
- Sass/Less：注意局部样式的写法。
