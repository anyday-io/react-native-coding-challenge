import { get } from './networking'

const baseUrl = 'https://rickandmortyapi.com/api'

export function getCharacters(searchText: string, nextApi: RequestInfo) {
  let url: RequestInfo = `${baseUrl}/character/`
  if (searchText) {
    url += `?name=${searchText}`
  }
  return get(nextApi || url)
}

export function getCharacterInfo(id: number) {
  return get(`${baseUrl}/character/${id}`)
}
