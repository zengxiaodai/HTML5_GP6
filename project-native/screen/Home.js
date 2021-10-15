
import React, { useState } from 'react'
import { View, Text} from 'react-native'

// 创建screen视图
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

import GoodList from './good/GoodList'

const HomeDetail = () => <View>
  <Text>详情页</Text>
</View>


// 用于第一个tabbar，它是一组路由栈
const HomeStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name='HomeList' options={{title:'商品列表'}} component={GoodList} />
    <Stack.Screen name='HomeDetail' options={{title:'商品详情'}} component={HomeDetail} />
  </Stack.Navigator>
)

export default HomeStack
