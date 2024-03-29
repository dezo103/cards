import {
  CreateDeckArgs,
  GetDeckByIdArgs,
  GetDecksArgs,
  GetDecksResponse,
  GetDecksResponseItems,
} from '@/pages/flashcards.types'
import { baseApi } from '@/services/base-api'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<GetDecksResponseItems, CreateDeckArgs>({
        invalidatesTags: ['Decks'], // invalidate cache for its refetching
        onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
          // const state = getState() as RootState<any, any, any>
          const currentPage = 1
          const itemsPerPage = 10
          const res = await queryFulfilled

          dispatch(
            decksService.util.updateQueryData('getDecks', { currentPage, itemsPerPage }, draft => {
              draft.items.unshift(res.data)
            }) // данные мы должны вынимать из slice (а для этого нужно в слайсах хранить пользовательские настройки)
          ) //диспатч состояния непосредственно перед запросом на сервер
        },
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: `v1/decks/`,
          }
        },
      }),
      getDeckById: builder.query<GetDecksResponse, GetDeckByIdArgs>({
        providesTags: ['Decks'], // it will execute when cache is not valid
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => {
          return {
            params: args ?? {},
            url: 'v1/decks',
          }
        },
      }),
      updateDeck: builder.mutation<any, any>({
        invalidatesTags: ['Decks'],
        onQueryStarted: async ({ id, ...body }, { dispatch, queryFulfilled }) => {
          // const state = getState() as RootState<any, any, any>
          const currentPage = 1
          const itemsPerPage = 10

          dispatch(
            decksService.util.updateQueryData('getDecks', { currentPage, itemsPerPage }, draft => {
              const deck = draft.items.find(deck => deck.id === id)

              // util.updateQueryData используется как ключ стейта
              if (deck) {
                Object.assign(deck, {
                  ...deck,
                  ...body,
                })
              }
            }) // данные мы должны вынимать из slice (а для этого нужно в слайсах хранить пользовательские настройки)
          ) //диспатч состояния непосредственно перед запросом на сервер
          await queryFulfilled
        },
        query: ({ id, ...body }) => {
          return {
            body,
            method: 'PATCH',
            url: `v1/decks/${id}`,
          }
        },
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksService
