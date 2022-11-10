import { configureStore } from '@reduxjs/toolkit'
import { currencyApi } from '../api/CurrencyApi'
import reducer from './reducer'

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyApi.middleware)
})