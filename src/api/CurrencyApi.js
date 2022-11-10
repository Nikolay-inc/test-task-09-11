import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

export const currencyApi = createApi({
    reducerPath: 'CurrencyApi',
    tagTypes: ['Currency'],
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        getCurrency: build.query({
            query: () => '/',
            providesTags: (result) => result
            ? [
                ...result.map(({ id }) => ({ type: 'Code'})),
                { type: 'Code', id: 'LIST' },
                ]
            : [{ type: 'Code', id: 'LIST' }],
            }),
    })
})

export const { useGetCurrencyQuery } = currencyApi