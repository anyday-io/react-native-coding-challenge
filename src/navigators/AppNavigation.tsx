import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeComponent/HomeScreen'
import { RouteKey } from './RouteKey'
import CharacterDetailsScreen from '../screens/HomeComponent/CharacterDetailsScreen'

const Stack = createNativeStackNavigator()

export function HomeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteKey.HomeScreen} component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen
        name={RouteKey.CharacterDetailsScreen}
        component={CharacterDetailsScreen}
        options={{ title: 'Detail' }}
      />
    </Stack.Navigator>
  )
}
