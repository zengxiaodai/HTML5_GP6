
function getUserList() {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve({
        err:0,
        msg:'success',
        data:{
          list:[
            {id:1, name:'zhang san', age: 10},
            {id:2, name:'zhang san', age: 20},
            {id:3, name:'zhang san', age: 30}
          ]
        }}
      )
    }, 500)
  })
}

export default {

  namespace: 'user',
  // 可共享的数据
  state: {
    list: []
  },

  // 类比成vuex中mutations
  // 因为redux的store不能直接修改，所以要使用深复制，并返回新的store
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    changeList(state, action) {
      return { ...state, list: action.payload }
    }
  },
  // 类比成vuex中actions
  // 这种语法来自于redux-saga
  // call调用一个异步方法
  // put相当于是dispatch({type,payload})，用于一个reducers方法
  effects: {
    *getList({ payload }, { call, put }) {  // eslint-disable-line
      const res = yield call(getUserList, payload)
      console.log('调接口成功', res)
      // 触发一个reducers方法，更新state。
      yield put({ type: 'changeList', payload: res.data.list });
    },
  },
  // 启动时就会运行
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log('启动时运行')
    },
  }
};
