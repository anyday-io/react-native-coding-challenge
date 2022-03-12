import React from 'react'
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import { StoreState } from '../store'

const { width, height } = Dimensions.get('window')

function LoadingIndicator() {
  const loading = useSelector((state: StoreState) => state.character.loading)
  if (!loading) return null
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'green'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width,
    height,
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
})
export default LoadingIndicator
