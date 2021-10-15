import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  fetchArticleCates,
  fetchArticleAddOrEdit,
  fetchArticleList,
  fetchArticleInfo
} from '@/api'

export const getCateList = createAsyncThunk(
  'article/cates',
  async () => {
    const res: any = await fetchArticleCates({})
    return res.list
  }
)

type ArticleModel = {
  id?: string,
  title: string,
  author: string,
  img: string,
  content: string,
  cate: string
}
export const addOrEditArticle = createAsyncThunk(
  'article/update/add',
  async (data: ArticleModel) => {
    const res: any = await fetchArticleAddOrEdit(data)
    return res.info
  }
)

type ListParams = {
  page?: number,
  size?: number,
  title?: string,
  cate?: string,
  start_time?: number,
  end_time?: number
}
export const getArticleList = createAsyncThunk(
  'article/list',
  async (params: ListParams) => {
    const res: any = await fetchArticleList(params)
    return res
  }
)

type InfoParams = {
  id: string
}
export const getArticleInfo = createAsyncThunk(
  'article/info',
  async (params: InfoParams) => {
    const res: any = await fetchArticleInfo(params)
    return res.info
  }
)


type CateItem = {
  _id: string,
  cate: string,
  cate_zh: string
}

export type ArticleItem = {
  _id: string,
  title: number,
  author: string,
  img: string,
  content: string,
  cate: string,
  status: number,
  check_status: number
}

interface ArtilceState {
  cateList: Array<CateItem>,
  articleList: Array<ArticleItem>,
  total: number,
  articleInfo: ArticleItem | object
}

const initialState: ArtilceState = {
  cateList: [],
  articleList: [],
  total: 0,
  articleInfo: {}
}

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    clearArticle(state, action) {
      state.articleInfo = {}
    }
  },
  extraReducers: (builder)=>{
    builder
    .addCase(getCateList.fulfilled, (state, action)=>{
      // 把后端返回的品类列表放在redux上
      state.cateList = action.payload
    })
    .addCase(addOrEditArticle.fulfilled, (state, action)=>{
      // do something
    })
    .addCase(getArticleList.fulfilled, (state, {payload})=>{
      state.total = payload.total
      state.articleList = payload.list
    })
    .addCase(getArticleInfo.fulfilled, (state, action)=>{
      state.articleInfo = action.payload
    })
  }
})

export default articleSlice.reducer
export const { clearArticle } = articleSlice.actions
