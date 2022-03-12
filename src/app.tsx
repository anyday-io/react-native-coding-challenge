import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { HomeStackNavigation, navigation } from './navigators'
import { Provider } from 'react-redux'
import { store } from './store'
import LoadingIndicator from './common/LoadingIndicator'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeText: {
    color: 'tomato',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 36,
  },
})

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigation.ref}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <HomeStackNavigation />
        </SafeAreaView>
        <LoadingIndicator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
