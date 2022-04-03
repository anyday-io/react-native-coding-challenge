import { all } from 'redux-saga/effects'
import { characterSaga } from './characterSaga'

export * from './characterSaga'

export default function* root() {
  yield all([characterSaga()])
}
