import React, { useCallback, useEffect, useState } from 'react'
import { View, FlatList, Pressable, Text, Image, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import debounce from 'lodash.debounce'
import { commonStyles } from '@constants/index'
import { HomeProps } from '@modules/types'
import { colors } from '@constants/index'
import { fetchCharacters } from '../../sagas/action'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { refreshCharacters } from '../../store/character'

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { items, nextPage, loading } = useAppSelector((state) => state.character)
  const dispatch = useAppDispatch()

  const [searchInput, setSearchInput] = useState<string>('')

  const fetchData = useCallback(() => {
    dispatch(fetchCharacters({ page: 1 }))
  }, [dispatch])

  const debouncedSearch = debounce((textInput) => {
    setSearchInput(textInput)
    dispatch(refreshCharacters({ searchText: textInput }))
    dispatch(fetchCharacters({ page: 1, name: textInput.toLowerCase() }))
  }, 200)

  const handleChangeSearchInput = useCallback(
    (textInput) => {
      debouncedSearch(textInput)
    },
    [debouncedSearch],
  )

  const handleOnCancel = useCallback(() => {
    setSearchInput('')
    fetchData()
  }, [fetchData])

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event: any) => handleChangeSearchInput(event.nativeEvent.text),
        onCancelButtonPress: () => handleOnCancel(),
        hideNavigationBar: false,
        hideWhenScrolling: false,
      },
    })
  }, [handleChangeSearchInput, handleOnCancel, navigation])

  const refreshData = useCallback(() => {
    dispatch(refreshCharacters({}))
    dispatch(fetchCharacters({ page: 1 }))
  }, [dispatch])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleOnEndReached = useCallback(() => {
    if (!loading) {
      dispatch(fetchCharacters({ page: nextPage, name: searchInput }))
    }
  }, [dispatch, nextPage, loading, searchInput])

  const onPress = useCallback(
    (id) => {
      navigation.navigate('Details', { id })
    },
    [navigation],
  )

  const _renderItems = ({ item }: any) => {
    const { id, name, status, image } = item
    return (
      <Pressable onPress={() => onPress(id)}>
        <View style={commonStyles.itemContainer}>
          <View style={commonStyles.wallpaperImageContainer}>
            <Image source={{ uri: image }} style={commonStyles.wallpaperImage} />
          </View>
          <View style={commonStyles.titleContainer}>
            <Text style={commonStyles.titleHeader}>{name}</Text>
            <Text style={commonStyles.title}>{status}</Text>
          </View>
        </View>
      </Pressable>
    )
  }

  return (
    <SafeAreaView style={commonStyles.container}>
      <FlatList
        contentContainerStyle={commonStyles.listContainer}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        data={items}
        renderItem={_renderItems}
        onRefresh={refreshData}
        refreshing={loading}
        onEndReached={handleOnEndReached}
      />
      {loading && (
        <ActivityIndicator size="large" style={commonStyles.indicator} color={colors.red} />
      )}
    </SafeAreaView>
  )
}

export default Home
