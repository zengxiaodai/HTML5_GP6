import store from '../store'

export function qfMapMutations(space, arr) {
  var res = {}
  arr.map(ele=>{
    res[ele] = payload => {
      store.commit(`${space}/S{ele}`, payload)
    }
  })
  return res
}

// ...qfMapMutations(['changeCount', ''])
