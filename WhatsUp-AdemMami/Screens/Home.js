import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListUsers from './Home/ListUsers';
import Forums from './Home/Forums';
import Setting from './Home/Setting';

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator  barStyle={{ backgroundColor: '#6974d6' }}>
      <Tab.Screen 
        name="Users" 
        component={ListUsers} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="Forums" 
        component={Forums} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="forum" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Setting} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

