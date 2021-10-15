// Redux的3个“三”
// 三个核心API：createStore、combineReducers、applyMiddleware
// 三个概念：store、reducer、action
// 三个特点： store是单一数据源、store是只读的、只能使用reducer纯函数来修改store

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import test from './reducers/test'
import counter from './reducers/counter'
import cnode from './reducers/cnode'

export default createStore(
  combineReducers({
    test,
    counter,
    cnode
  }),
  // 当有多个中间件时
  compose(applyMiddleware(thunk), applyMiddleware(logger))
)
