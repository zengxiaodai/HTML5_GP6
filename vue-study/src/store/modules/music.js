import { fetchMusicList } from '@/api/'

// 音乐子store
export default {
  namespaced: true,
  state: {
    list: [],
    count: 200
  },
  mutations: {
    changeCount(state, payload) {
      state.count = payload
    },
    updateList(state, payload) {
      state.list = payload
    }
  },
  actions: {
    getList(store, payload) {
      fetchMusicList(payload).then(res=>{
        console.log('音乐数据', res.song.list)
        store.commit('updateList', res.song.list)
      })
    }
  }
}
