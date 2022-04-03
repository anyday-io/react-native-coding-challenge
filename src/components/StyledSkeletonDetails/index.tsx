import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { StyledSkeletonContentProps } from '../types'
import styles from './styles'

const StyledSkeletonDetails: React.FC<StyledSkeletonContentProps> = ({}) => {
  return (
    <>
      <View style={styles.container}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item width="100%" aspectRatio={16 / 9} borderRadius={4} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
      <View style={styles.container}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item flexDirection="row" height={100}>
            <SkeletonPlaceholder.Item flex={1} justifyContent={'space-between'}>
              <SkeletonPlaceholder.Item width="50%" height={20} borderRadius={4} />
              <SkeletonPlaceholder.Item width="30%" height={20} borderRadius={4} />
              <SkeletonPlaceholder.Item width="80%" height={20} borderRadius={4} />
              <SkeletonPlaceholder.Item width="80%" height={20} borderRadius={4} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    </>
  )
}
export default StyledSkeletonDetails
