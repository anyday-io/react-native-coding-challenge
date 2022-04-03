import { CharacterParam } from '../sagas/types'
import axios from './axios'
import { CharactersResponse, CharacterResponse } from './types'

export default {
  fetchCharacters: async (params: CharacterParam): Promise<CharactersResponse> => {
    return await axios.get('/api/character', {
      params,
    })
  },
  getCharacter: async (id: number): Promise<CharacterResponse> => {
    return await axios.get(`/api/character/${id}`)
  },
}
