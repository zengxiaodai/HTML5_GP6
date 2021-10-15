function fetchList() {
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve({
        err: 0,
        msg: 'success',
        data: {
          list: [{id: 1, name:'a'}, {id: 2, name:'b'}]
        }
      })
    }, 500);
  })
}

export default {
  
  namespace: 'user',

  state: {
    list: []
  },

  reducers: {
    // 未启用immer时
    // save(state, action) {
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    // },
    // 启用 immer 之后
    changeList(state, action) {
      state.list = action.payload
    },
  },
  effects: {
    *getList({ payload }, { call, put }) {
      const res = yield call(fetchList, payload)
      console.log('调接口成功', res)
      yield put({type: 'changeList', payload: res.data.list} )
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log('入口鉴权，登录拦截')
    }
  }
}
