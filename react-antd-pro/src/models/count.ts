
export default {

  namespace: 'count',

  state: {
    num: 100
  },

  reducers: {
    // 启用 immer 之后
    changeList(state, action) {
      state.num += action.payload
    },
  },
  // effects: {
  //   *getList({ payload }, { call, put }) {
  //     const res = yield call(fetchList, payload)
  //     console.log('调接口成功', res)
  //     yield put({type: 'changeList', payload: res.data.list} )
  //   },
  // },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log('初始化')
    }
  }
}
