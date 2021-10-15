import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAnalyse } from '@/api'

export const getDashAnalyse = createAsyncThunk(
  'analyse/dash',
  async () => {
    const res = await fetchAnalyse({})
    return res
  }
)

const initialState = {
  editorAnalyse: {}
}

const userSlice = createSlice({
  name: 'analyse',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    // 监听异步action成功，当异步action成功时，把结果直接更新到state上
    builder
    .addCase(getDashAnalyse.fulfilled, (state, action)=>{
      state.editorAnalyse = action.payload
    })
  }
})
export default userSlice.reducer
