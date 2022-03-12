import { call, put, takeLatest } from 'redux-saga/effects'
import { createAction, PayloadAction } from '@reduxjs/toolkit'
import { getCharacters } from '../ultilities/ApiManage'
import { getCharacterSuccess } from '../store/character'
import { ResponseGenerator } from './types'

export const getCharacterAction = createAction(
  'character/getCharacter',
  function prepare(searchText: String, next: RequestInfo) {
    return {
      payload: {
        searchText,
        next,
      },
    }
  },
)

function* getCharacterSaga(action: PayloadAction<{ searchText: string; next: string }>) {
  try {
    const res: ResponseGenerator = yield call(
      getCharacters,
      action.payload?.searchText,
      action.payload?.next,
    )
    if (res.status !== 200) throw new Error(res.data?.message)
    yield put(getCharacterSuccess(res.data))
  } catch (e) {}
}

export default [takeLatest(getCharacterAction.type, getCharacterSaga)]
