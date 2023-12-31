import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
} from '@/services/decks-service'

export const Decks = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { data, isError, isLoading, refetch } = useGetDecksQuery({ currentPage, itemsPerPage: 10 })
  const { data: deckByIdData } = useGetDeckByIdQuery({ id: 'clr0gbgqi03gszk2v2bzxzowf' })
  const [createDeck, { isLoading: isLoadingDeckCreation }] = useCreateDeckMutation()

  console.log(deckByIdData)

  if (isError) {
    return <Typography variant={'h1'}>An error has occured ...</Typography>
  }

  if (isLoading) {
    return <Typography variant={'h1'}>Is loading ...</Typography>
  }

  return (
    <>
      <Button onClick={refetch} variant={'secondary'}>
        Refetch data
      </Button>
      <Button
        disabled={isLoadingDeckCreation}
        onClick={() => {
          createDeck({ name: "it is new Dezo's dack" })
        }}
        variant={'tertiary'}
      >
        Create new deck
      </Button>
      <Typography variant={'h1'}>It is decks 1</Typography>
      <Link to={'/decks2'}>to Decks 2</Link>
      <Typography variant={'h1'}>CurrentPage: {data?.pagination?.currentPage}</Typography>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Cards Count</td>
            <td>Last Update</td>
            <td>Created by</td>
          </tr>
        </thead>
        <tbody>
          {data?.items?.map(deck => {
            return (
              <tr key={deck?.id}>
                <td>{deck?.name}</td>
                <td>{deck?.cardsCount}</td>
                <td>{new Date(deck?.updated).toLocaleDateString()}</td>
                <td>{deck?.author.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {data?.pagination?.totalPages &&
        newArray(data?.pagination?.totalPages).map(i => {
          return (
            <Button
              key={i}
              onClick={() => {
                setCurrentPage(i)
              }}
              variant={'secondary'}
            >
              {i}
            </Button>
          )
        })}
    </>
  )
}

const newArray = (num: number) => {
  const arr = []

  for (let i = 1; i <= num; i++) {
    arr.push(i)
  }

  return arr
}
