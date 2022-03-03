import { createSlice } from '@reduxjs/toolkit'
import { PhoneStore } from './types'

export const INITIAL_STATE: PhoneStore = {}

const phoneSlice = createSlice({
  name: 'phone',
  initialState: INITIAL_STATE,
  reducers: {},
})

export const { actions } = phoneSlice

export default phoneSlice.reducer
