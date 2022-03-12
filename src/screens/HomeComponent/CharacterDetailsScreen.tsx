/**
 * Created by HongHP on 11/03/2022
 */
import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, ScrollView, RefreshControl } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ICharacter } from '../../store/types'
import { getCharacterInfo } from '../../ultilities/ApiManage'

const FIELDS = [
  {
    title: 'Species',
    key: 'species',
  },
  {
    title: 'Type',
    key: 'type',
  },
  {
    title: 'Gender',
    key: 'gender',
  },
  {
    title: 'Location',
    key: 'location',
  },
]
type RootStackParamList = {
  CharacterDetailsScreen: { data: ICharacter }
}
type Props = NativeStackScreenProps<RootStackParamList, 'CharacterDetailsScreen'>

function CharacterDetailsScreen({ route }: Props) {
  const { data } = route?.params || {}
  const [characterData, setCharacterData] = useState(data)
  const [refreshing, setRefreshing] = useState(false)

  async function handleRefreshData() {
    try {
      setRefreshing(true)
      const res = await getCharacterInfo(data?.id)
      if (res?.status !== 200) throw new Error('Some thing went wrong')
      setCharacterData(res?.data)
    } catch (e) {
    } finally {
      setRefreshing(false)
    }
  }

  function getValue(key: string) {
    switch (key) {
      case 'location':
        return data?.location?.name
      default:
        return characterData?.[key]
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefreshData} />}
      >
        <View style={styles.avatarContainer}>
          <Image source={{ uri: characterData?.image }} style={styles.avatar} />
          <Text style={styles.name}>{characterData?.name}</Text>
          <Text>{characterData?.status}</Text>
        </View>
        <View style={styles.infoContainer}>
          {FIELDS.map((item, index) => {
            return (
              <View key={index.toString()} style={styles.row}>
                <Text style={styles.title}> {item.title}</Text>
                <Text>{getValue(item.key)}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  infoContainer: { paddingHorizontal: 15, marginTop: 20 },
})
export default CharacterDetailsScreen
