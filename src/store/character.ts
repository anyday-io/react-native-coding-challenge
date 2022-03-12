import { createSlice } from '@reduxjs/toolkit'
import { CharacterStore } from './types'

export const INITIAL_STATE: CharacterStore = {
  results: [],
  loading: false,
}
const characterSlice = createSlice({
  name: 'character',
  initialState: INITIAL_STATE,
  reducers: {
    getCharacterSuccess: (state, action) => {
      state.characterInfo = action?.payload?.info
      if (action?.payload?.info?.prev) {
        state.results = [...(state.results || []), ...action?.payload?.results]
      } else {
        state.results = action?.payload?.results
      }
      state.loading = false
    },
    setShowLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { getCharacterSuccess, setShowLoading } = characterSlice.actions

export default characterSlice.reducer
