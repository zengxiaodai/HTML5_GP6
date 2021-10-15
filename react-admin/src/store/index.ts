import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger'
import user from './reducers/user'
import article from './reducers/article'
import analyse from './reducers/analyse'

const store = configureStore({
  reducer: {
    user,
    article,
    analyse
  },
  middleware: (getDefaultMiddleware => ([...getDefaultMiddleware()]) )
})

// 声明了两个类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
