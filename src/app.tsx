import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './store'
import { navigation } from '@navigators/index'
import RootNavigator from '@modules/rootNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigation.ref}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
