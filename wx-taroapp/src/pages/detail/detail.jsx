import React from 'react'

import { View } from '@tarojs/components'
import { useRouter, useReady } from '@tarojs/taro'

export default () => {
  const router = useRouter()
  console.log('router', router.params.id)
  useReady(()=>{
    console.log('调接口')
  })
  return (
    <View>我是详情页</View>
  )
}

// export default class Detail extends React.Component {
//   onLoad(opt) {
//     console.log('路由参数', opt)
//   }
//   render() {
//     return (
//       <View>
//          我是详情页
//       </View>
//     )
//   }
// }
