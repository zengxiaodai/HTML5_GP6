/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

// 创建底部的tabbar
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

import HomeStack from './screen/Home'
import FindStack from './screen/Find'
import UserStack from './screen/User'

import { Provider } from 'mobx-react'
import store from './store'

const App = () => {
  return (
    <NavigationContainer>
      <Provider {...store}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name='Home' component={HomeStack} />
          <Tab.Screen name='Find' component={FindStack} />
          <Tab.Screen name='User' component={UserStack} />
        </Tab.Navigator>
      </Provider>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  box: {
    fontSize: 80,
    color: 'red'
  }
})


export default App;
