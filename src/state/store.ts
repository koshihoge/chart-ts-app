import { axisSlice } from '@/state/axis'
import { classificationSlice } from '@/state/classification'

import {
  configureStore,
  combineReducers,
  EnhancedStore,
} from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

// HACK: `redux-persist failed to create sync storage. falling back to noop storage.`の対応
// https://github.com/vercel/next.js/discussions/15687#discussioncomment-45319
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createNoopStorage = () => {
  return {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getItem(_key: unknown) {
      return Promise.resolve(null)
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    setItem(_key: unknown, value: unknown) {
      return Promise.resolve(value)
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    removeItem(_key: unknown) {
      return Promise.resolve()
    },
  }
}

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()
const rootReducer = combineReducers({
  axis: axisSlice.reducer,
  classification: classificationSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: 'p-next-test',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const useStore = (): EnhancedStore => {
  return configureStore({
    reducer: persistedReducer,
  })
}
