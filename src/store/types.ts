export interface PhoneStore {
  [key: string]: unknown
}

export interface CharacterStore {
  characterInfo?: any
  results?: ICharacter[]
  loading: boolean
}

export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
  [key: string]: any
}
