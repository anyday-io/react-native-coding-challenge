import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { StoreState, StoreDispatch } from './index'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<StoreDispatch>()
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector
