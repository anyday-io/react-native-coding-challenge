import {
  applyMiddleware,
  combineReducers,
  configureStore,
  MiddlewareAPI,
  PayloadAction,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import phone, { actions as phoneAC, INITIAL_STATE as PhoneInitialState } from './phone'
import rootSaga from '../sagas'
import character from './character'

export const InitialState = {
  phone: PhoneInitialState,
}

export const ActionCreators = {
  phone: phoneAC,
}

const rootReducer = combineReducers({
  phone,
  character,
})

const loggerMiddleware =
  (store: MiddlewareAPI) => (next: (action: PayloadAction) => void) => (action: PayloadAction) => {
    const before = store.getState()
    const result = next(action)
    if (process.env.NODE_ENV !== 'production') {
      // Group these console logs into one closed group
      /* eslint-disable no-console*/
      const after = store.getState()

      console.groupCollapsed(`%c dispatching action => ${action.type}`, 'color: rgb(118, 74, 188)')
      console.log('BEFORE', before)
      console.log('ACTION', action.type, action)
      console.log('AFTER', after)
      console.groupEnd()
      /* eslint-enable no-console */
    }
    return result
  }

const configureAppStore = (preloadedState = InitialState) => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, loggerMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }),
    preloadedState,
    enhancers: [middlewareEnhancer],
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  sagaMiddleware.run(rootSaga)

  return store
}

export const store = configureAppStore()

export type StoreState = ReturnType<typeof store.getState>

export type StoreDispatch = typeof store.dispatch
