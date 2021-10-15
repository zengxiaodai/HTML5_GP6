【阿里系】
1、React组件（ant-design、antv、ant-design-mobile、icons库、ant-design-charts）

2、dva
- 是阿里前端工程师个人构建的，三年前用得比较多（现在几乎不用了），不支持Hooks，只能使用React传统写法。
- 构建工具不是webpack，是roadhog。它的作用是简化redux架构、react-router集成、redux-saga集成。
- 项目创建 dva-cli 这个脚手架
- 如何感兴趣，了解一下  roadhog 这个构建工具。
- dva = redux + react-router + redux-saga
- 默认只支持css，能不能支持sass？（注意，这不是webpack环境）
- dva在项目控制台报的警告，常常需要在dav源码中去修复。
- 添加路由规则，直接在 src/router.js 添加；
  - 路由跳转使用 props.history.push()/replace()
  - 动态路由传参，参考 router.js中 <Route path='/user/info/:id' />
- 使用dva封装过的redux、redux-saga
  - redux-saga支持Generator函数语法，也是解决redux不支持异步action的解决方案，它是redux-thunk替代器。
  - 被dva封装的redux，与vuex流程十分相似。有四个核心概念：state、reducers、effects、subscriptions。
