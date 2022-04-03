import React, { useCallback, useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { Episode } from '../../store/types'
import styles from './styles'
import axios from '../../services/axios'

const EpisodeItem = ({ episode }: { episode: string }) => {
  const [item, setItem] = useState<Episode>()

  const fetchData = useCallback(async () => {
    const { data } = await axios.get(episode)
    setItem(data)
  }, [episode])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <View style={styles.row}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item?.name || ''} </Text>
        </View>
      </View>

      <Text style={styles.plot}>{item?.episode || ''}</Text>
    </Pressable>
  )
}
export default EpisodeItem
