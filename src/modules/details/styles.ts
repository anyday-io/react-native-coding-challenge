import colors from '@constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  titleContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  listContainer: {
    padding: 20,
  },
  headerContainer: {
    padding: 12,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
  name: { fontSize: 24, fontWeight: 'bold' },
  type: { color: colors.darkGrey, marginRight: 5 },
  species: { color: colors.darkMode, fontWeight: 'bold' },
  gender: { color: colors.white, marginRight: 5, fontWeight: 'bold' },
  typeContainer: {
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    paddingHorizontal: 3,
    marginHorizontal: 5,
  },
  status: {
    color: colors.green,
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 18,
  },
  origin: { color: colors.darkGrey, marginRight: 5, marginTop: 10, fontWeight: 'bold' },
  location: { color: colors.darkGrey, marginRight: 5, fontWeight: 'bold' },
  episode: { color: colors.darkMode, marginRight: 5, fontWeight: 'bold' },
})

export default styles
