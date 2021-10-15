import React from 'react'
import { View, Text} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

const FindList = ({navigation}) => <View>
  <Text>首页</Text>
  <Text onPress={()=>navigation.navigate('Find')}>跳转到发现页面</Text>
</View>

const FindDetail = () => <View>
  <Text>详情页</Text>
</View>

const FindStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='FindList' component={FindList} />
    <Stack.Screen name='FindDetail' component={FindDetail} />
  </Stack.Navigator>
)

export default FindStack
