import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, StyleSheet, FlatList, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacterAction } from '../../sagas/character'
import { ICharacter } from '../../store/types'
import CharacterItem from './components/CharacterItem'
import { StoreState } from '../../store'
import { setShowLoading } from '../../store/character'

const ITEM_HEIGHT: number = 80

function HomeScreen() {
  const dispatch = useDispatch()
  const characterInfo = useSelector((state: StoreState) => state.character.characterInfo)
  const results = useSelector((state: StoreState) => state.character.results)
  const searchDebounceRef = useRef<ReturnType<typeof setInterval>>()
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    dispatch(setShowLoading(true))
    dispatch(getCharacterAction('', ''))
  }, [dispatch])

  useEffect(() => {
    setRefreshing(false)
  }, [characterInfo])

  function handleSearch(text: string) {
    clearTimeout(searchDebounceRef.current as NodeJS.Timeout)
    searchDebounceRef.current = setTimeout(() => {
      dispatch(getCharacterAction(text, ''))
    }, 1000)
  }

  const handleRefresh = useCallback(() => {
    setRefreshing(true)
    dispatch(getCharacterAction('', ''))
  }, [dispatch])

  const renderItem = ({ item }: { item: ICharacter }) => {
    return <CharacterItem data={item} />
  }

  function handleLoadMore() {
    if (results?.length && characterInfo?.next) {
      dispatch(getCharacterAction('', characterInfo?.next))
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder={'Search by name...'}
        onChangeText={(text) => {
          handleSearch(text)
        }}
      />
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={handleLoadMore}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
})
export default HomeScreen
