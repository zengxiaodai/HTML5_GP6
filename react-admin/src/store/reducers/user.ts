import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchLogin,
  fetchUserInfo,
  fetchUserAdd,
  fetchUserList,
  fetchUserStatus
} from '@/api'

// 在视图中使用 dispatch(login(data))
type LoginData = {
  username: string,
  password: string
}
const login = createAsyncThunk(
  'user/login',  // type
  async (data: LoginData) => {
    const res: any = await fetchLogin(data)
    console.log('登录成功', res)
    localStorage.setItem('token', res.token)
    return res.token  // payload
  }
)

// 在视图中，dispatch(getUserInfo(data))
const getUserInfo = createAsyncThunk(
  'user/userinfo',
  async (token: string)=>{
    const res: any = await fetchUserInfo(token)
    let user = res.user
    // 字段转化
    user.roleName = user.role_name
    return user
  }
)

type User = {
  username: string,
  role: string
}
const addUser = createAsyncThunk(
  'user/add',
  async (data: User) => {
    const res: any = await fetchUserAdd(data)
    return res
  }
)

type ListParams = {
  name?: string,
  page?: number,
  size?: number
}
const getUserList = createAsyncThunk(
  'user/list',
  async (params: ListParams) => {
    const res: any = await fetchUserList(params)
    return res
  }
)

type StatusParams = {
  id: string,
  status: number
}
const changeUserStatus = createAsyncThunk(
  'user/status',
  async (params: StatusParams) => {
    await fetchUserStatus(params)
    return
  }
)

const initialState = {
  token: localStorage.getItem('token'),
  user: {},
  total: 0,
  list: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    // 监听异步action成功，当异步action成功时，把结果直接更新到state上
    builder
    .addCase(login.fulfilled, (state, action)=>{
      // console.log('---login', action)
      state.token = action.payload
    })
    .addCase(getUserInfo.fulfilled, (state, action)=>{
      // console.log('---getUserInfo', action)
      state.user = action.payload
    })
    .addCase(addUser.fulfilled, (state, action)=>{
      console.log('添加用户成功')
    })
    .addCase(getUserList.fulfilled, (state, {payload})=>{
      state.total = payload.total
      state.list = payload.list
    })
    .addCase(changeUserStatus.fulfilled, (state, action)=>{
      //
    })
  }
})

// 在子reducer中，一定要抛出一个reducer（实际上是一个由switch语句构成的函数）
export default userSlice.reducer  // 给根store进行合并reducer
export { login, getUserInfo, addUser, getUserList, changeUserStatus }     // 给业务逻辑用的
