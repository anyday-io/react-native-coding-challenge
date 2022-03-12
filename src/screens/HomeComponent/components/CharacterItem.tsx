/**
 * Created by HongHP on 11/03/2022
 */
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import { navigation, RouteKey } from '../../../navigators'
import { ICharacter } from '../../../store/types'

interface IProps {
  data: ICharacter
}

function CharacterItem({ data }: IProps) {
  const handleItemPress = () => {
    navigation.navigate(RouteKey.CharacterDetailsScreen, {
      data,
    })
  }

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        handleItemPress()
      }}
    >
      <Image source={{ uri: data?.image }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {data?.name}
        </Text>
        <Text style={styles.status}>{data?.status}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    marginHorizontal: 10,
  },
  avatar: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  infoContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    color: '#000',
  },
  status: {
    color: '#000',
  },
})
export default CharacterItem
