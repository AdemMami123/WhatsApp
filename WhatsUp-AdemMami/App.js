import React from 'react'
import Auth from './Screens/Auth'
import NewAccount from './Screens/NewAccount'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import chat from './Screens/Chat'

const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Auth" component={Auth}></Stack.Screen>
        <Stack.Screen options={{headerShown: true,headerTitle:"Back to Auth"}} name="NewAccount" component={NewAccount}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Chat" component={chat}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  )
}