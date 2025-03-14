import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import ListUsers from './Home/ListUsers'
import Forums from './Home/Forums'
import Setting from './Home/Setting'

const Tab=createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      
      <Tab.Screen name="Users" component={ListUsers}></Tab.Screen>
      <Tab.Screen name="Forums" component={Forums}></Tab.Screen>
      <Tab.Screen name="Settings" component={Setting}></Tab.Screen>



    </Tab.Navigator>
  )
}