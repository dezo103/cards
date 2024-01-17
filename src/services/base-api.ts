import { baseQueryWithReauth } from '@/services/base-query-with-reauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  // refetchOnFocus: true, // it will refetch on focus
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Me'], // register cache observe
})
