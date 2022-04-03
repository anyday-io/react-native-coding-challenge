import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from './details'
import Home from './home'
import { RootStackParamList } from '@navigators/types'

const RootStack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Details" component={Details} options={{ headerBackTitle: 'Home' }} />
    </RootStack.Navigator>
  )
}

export default RootNavigator
