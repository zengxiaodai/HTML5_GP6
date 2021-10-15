import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { inject, observer } from 'mobx-react'

export default inject(['test'])(observer(({navigation,test}) => {
  console.log('mobx test', test)
  useEffect(()=>{
    // 触发调接口
    test.getConde({limit:5,tab:'',page:1})
  }, [])
  const _renderList = () => {
    return test.list.map(ele=>(
      <Text key={ele.id}>{ele.title}</Text>
    ))
  }
  return (
    <View>
      <Text>{test.msg}</Text>
      <Text onPress={()=>navigation.navigate('HomeDetail')}>跳转到发现页面</Text>
      { _renderList() }
    </View>
  )
}))
