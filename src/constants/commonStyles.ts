import { StyleSheet } from 'react-native'
import colors from './colors'
import { DEVICE_WIDTH } from './dimensions'

export const commonStyles = StyleSheet.create({
  container: {
    color: colors.whiteSmoke,
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  listContainer: {
    marginTop: 100,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  skeletonContainer: {
    flex: 1,
    width: DEVICE_WIDTH,
  },
  title: {
    fontWeight: 'bold',
  },
  titleHeader: {
    marginVertical: 10,
  },
  titleContainer: {
    textAlign: 'left',
    padding: 5,
    marginLeft: 10,
    justifyContent: 'center',
  },
  wallpaperImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 40,
  },
  wallpaperImageContainer: {
    height: 100,
    width: 100,
  },
  indicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
})
