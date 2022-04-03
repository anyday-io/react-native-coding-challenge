import { createSlice } from '@reduxjs/toolkit'
import { CharacterStore } from './types'

export const INITIAL_STATE: CharacterStore = {
  info: undefined,
  items: [],
  item: undefined,
  loading: false,
  nextPage: 1,
  searchText: '',
}

const characterSlice = createSlice({
  name: 'character',
  initialState: INITIAL_STATE,
  reducers: {
    getCharactersRequest(state, _) {
      state.loading = true
    },
    getChatactersSuccess(state, action) {
      const { info, results } = action.payload
      state.loading = false
      state.info = info
      state.items = state.items.concat(results)
      state.nextPage = state.nextPage + 1
    },
    getChatacterSuccess(state, action) {
      state.loading = false
      state.item = action.payload
    },
    getChatacterError(state) {
      state.loading = false
    },
    refreshCharacters(state, action) {
      state.items = []
      state.nextPage = 1
      state.searchText = action?.payload?.searchText
    },
  },
})

export const { actions } = characterSlice

export const {
  getCharactersRequest,
  getChatactersSuccess,
  getChatacterSuccess,
  getChatacterError,
  refreshCharacters,
} = actions

export default characterSlice.reducer
