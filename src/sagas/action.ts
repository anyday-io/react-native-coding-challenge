import { createAction } from '@reduxjs/toolkit'
import { CharacterParam } from './types'

export const fetchCharacters = createAction<CharacterParam>('FETCH_CHARACTERS')
export const getCharacter = createAction<{ id: number | undefined }>('GET_CHARACTER')
