import React, { useCallback, useEffect } from 'react'
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'
import { DetailsProps } from '@modules/types'
import { Strings } from '@constants/index'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import EpisodeItem from '@components/EpisodeItem'
import styles from './styles'
import { commonStyles } from '@constants/index'
import { getCharacter } from '../../sagas/action'
import { colors } from '@constants/index'
import StyledSkeletonDetails from '@components/StyledSkeletonDetails'

const Details: React.FC<DetailsProps> = ({ route }) => {
  const { id } = route.params

  const { item: details, loading } = useAppSelector((state) => state.character)
  const { image, name, status, species, type, gender, origin, location, episode } = details || {}
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCharacter(id))
  }, [dispatch, id])

  const renderEpisodeItem = useCallback(({ item }) => {
    return <EpisodeItem episode={item} />
  }, [])

  const renderHeader = useCallback(
    ({}) => {
      return (
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.status}>{status}</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.species}>{species}</Text>
            <View style={styles.typeContainer}>
              <Text style={styles.gender}>{gender}</Text>
            </View>
            <Text style={styles.type}>{type}</Text>
          </View>
          <Text style={styles.origin}>
            <Text>{Strings.details.origin}</Text>: {origin?.name || ''}
          </Text>
          <Text style={styles.location}>
            {Strings.details.location}: {location?.name || ''}
          </Text>

          <Text style={styles.episode}>{Strings.details.episode}:</Text>
        </View>
      )
    },
    [gender, location, name, origin, species, status, type],
  )

  if (loading) {
    return <StyledSkeletonDetails />
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <FlatList
        data={episode}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderEpisodeItem}
        style={styles.listContainer}
        ListHeaderComponent={renderHeader}
      />
      {loading && (
        <ActivityIndicator size="large" style={commonStyles.indicator} color={colors.red} />
      )}
    </View>
  )
}

export default Details
