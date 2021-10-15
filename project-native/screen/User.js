import React from 'react'

import { View, Text} from 'react-native'

// 创建screen视图
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

import Login from './user/Login'

export default () => (
  <Stack.Navigator>
    <Stack.Screen name='Login' component={Login} />
  </Stack.Navigator>
)
