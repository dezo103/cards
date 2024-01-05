import { GetDeckByIdArgs, GetDecksArgs, GetDecksResponse } from '@/pages/flashcards.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDeckById: builder.query<GetDecksResponse, GetDeckByIdArgs>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        query: args => {
          return {
            params: args ?? {},
            url: 'v1/decks',
          }
        },
      }),
    }
  },
  reducerPath: 'baseApi',
  // refetchOnFocus: true, // it will refetch on focus
})

export const { useGetDeckByIdQuery, useGetDecksQuery } = baseApi
