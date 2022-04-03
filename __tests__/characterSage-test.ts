import { testSaga } from 'redux-saga-test-plan'
import api from '@services/index'
import { fetchCharacterSaga, getCharacterSaga } from '../src/sagas'

describe('GET characters saga', () => {
  const payload = { page: 1 }
  const data = { info: {}, results: [] }
  it('should handle success getCharacters', () => {
    testSaga(fetchCharacterSaga, { payload })
      .next()
      .put({
        type: 'character/getCharactersRequest',
        payload: {},
      })
      .next()
      .call(api.fetchCharacters, payload)
      .next({ data })
      .put({
        type: 'character/getChatactersSuccess',
        payload: data,
      })
      .next()
      .isDone()
  })
})

describe('GET character saga', () => {
  const payload = { page: 1 }
  const data = {}
  it('should handle success getCharacter', () => {
    testSaga(getCharacterSaga, { payload })
      .next()
      .put({
        type: 'character/getCharactersRequest',
        payload: {},
      })
      .next()
      .call(api.getCharacter, payload)
      .next({ data })
      .put({
        type: 'character/getChatacterSuccess',
        payload: data,
      })
      .next()
      .isDone()
  })
})
