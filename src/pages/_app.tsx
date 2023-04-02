import '../styles/globals.css'

import { useStore } from '@/state/store'

import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore()
  const persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
