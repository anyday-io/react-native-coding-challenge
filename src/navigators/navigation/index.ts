import { createNavigationContainerRef, NavigationAction } from '@react-navigation/core'
import { NavigationProp, NavigationState } from '@react-navigation/native'
import { RootStackParamList } from '../types'

const createNavigation = () => {
  const navigationRef = createNavigationContainerRef()

  const canGoBack = (): boolean => navigationRef.isReady() && navigationRef.canGoBack()

  const getState = (): NavigationState | null =>
    navigationRef.isReady() ? navigationRef.getState() : null

  const getParent = (): NavigationProp<RootStackParamList> | null =>
    navigationRef.isReady() ? navigationRef.getParent() : null

  const call =
    (func: (...args: any[]) => any) =>
    (...args: any[]) => {
      if (navigationRef.isReady()) {
        func(...args)
      }
    }

  const navigate = (
    name: keyof RootStackParamList,
    params: RootStackParamList[keyof RootStackParamList],
  ) => {
    // @ts-ignore
    navigationRef.navigate(name, params)
  }

  const reset = (state: NavigationState) => {
    navigationRef.reset(state)
  }

  const goBack = () => {
    navigationRef.goBack()
  }

  const setParams = (params: RootStackParamList[keyof RootStackParamList]) => {
    // @ts-ignore
    navigationRef.setParams(params)
  }

  const dispatch = (action: NavigationAction | ((state: NavigationState) => NavigationAction)) => {
    navigationRef.dispatch(action)
  }

  return {
    canGoBack,
    getState,
    getParent,
    navigate: call(navigate),
    reset: call(reset),
    goBack: call(goBack),
    setParams: call(setParams),
    dispatch: call(dispatch),
    ref: navigationRef,
  }
}

export const navigation = createNavigation()
