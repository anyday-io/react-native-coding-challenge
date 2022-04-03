import { all, call, put, takeLatest } from 'redux-saga/effects'
import api from '@services/index'
import {
  getCharactersRequest,
  getChatactersSuccess,
  getChatacterSuccess,
  getChatacterError,
} from '../store/character'
import { fetchCharacters, getCharacter } from './action'
import { CharacterParam } from './types'

function* fetchCharacterSaga({ payload }: { payload: CharacterParam }) {
  try {
    yield put(getCharactersRequest({}))
    const { data } = yield call(api.fetchCharacters, payload)
    yield put(getChatactersSuccess(data))
  } catch (e) {
    console.log(e)
    yield put(getChatacterError())
  }
}

function* getCharacterSaga({ payload }: any) {
  try {
    yield put(getCharactersRequest({}))
    const { data } = yield call(api.getCharacter, payload)
    yield put(getChatacterSuccess(data))
  } catch (e) {
    console.log(e)
  }
}

function* characterSaga() {
  yield all([
    takeLatest(fetchCharacters, fetchCharacterSaga),
    takeLatest(getCharacter, getCharacterSaga),
  ])
}

export { fetchCharacterSaga, getCharacterSaga, characterSaga }
