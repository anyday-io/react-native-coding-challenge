export interface PhoneStore {
  [key: string]: unknown
}

export interface Character {
  id: string
  name: string
  image: string
  status: string
  species: string
  type: string
  gender: string
  origin: { name?: string }
  location: { name?: string }
  episode: []
}

export interface CharacterStore {
  info: {} | undefined
  items: Character[]
  item: Character | undefined
  loading: boolean
  nextPage: number
  searchText: string
}

export interface Episode {
  name: string
  episode: string
}
