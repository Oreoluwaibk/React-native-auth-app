import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';


const Tabs = createBottomTabNavigator();
export default function HomePage() {
  return (
    <NavigationContainer>
        <Tabs.Navigator initialRouteName="Home">
            <Tabs.Screen name="Home" component={HomeScreen}/>
            <Tabs.Screen name="Profile" component={ProfileScreen} />
            <Tabs.Screen name="Settings" component={SettingScreen} />
        </Tabs.Navigator>
    </NavigationContainer>
  )
}