import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Strings } from './contants'
import { navigation } from './navigators'
import { Provider } from 'react-redux'
import { store } from './store'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
          <Text style={styles.welcomeText}>{Strings.general.welcome}</Text>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  )
}

export default App
