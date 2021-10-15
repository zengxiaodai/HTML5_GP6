import { getCates } from '@/api/good'

const state = {
  cates: []
}

const mutations = {
  CHANGE_CATES: (state, payload) => {
    state.cates = payload
  }
}

const actions = {
  // 获取品类列表
  getCates({commit}) {
    getCates({}).then(res=>{
      commit('CHANGE_CATES', res.data.list)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
