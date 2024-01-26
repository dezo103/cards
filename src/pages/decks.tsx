import { useState } from 'react'
import { Link } from 'react-router-dom'

import { PackListTable } from '@/components/layout/main/tables/pack-list-table/pack-list-table'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import {
  useCreateDeckMutation,
  // useGetDeckByIdQuery,
  useGetDecksQuery,
} from '@/services/decks-service'

export const Decks = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { currentData, data, isError, isLoading, refetch } = useGetDecksQuery({
    currentPage,
    itemsPerPage: 10,
  })

  const decks = currentData ?? data
  // const { data: deckByIdData } = useGetDeckByIdQuery({ id: 'clr0gbgqi03gszk2v2bzxzowf' })
  const [createDeck, { isLoading: isLoadingDeckCreation }] = useCreateDeckMutation()

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
          createDeck({ name: 'Hello incubator' })
        }}
        variant={'tertiary'}
      >
        Create new deck
      </Button>
      <Typography variant={'h1'}>It is decks 1</Typography>
      <Link to={'/decks2'}>to Decks 2</Link>
      <Typography variant={'h1'}>CurrentPage: {decks?.pagination?.currentPage}</Typography>
      <PackListTable data={decks?.items} />
      {decks?.pagination?.totalPages &&
        newArray(decks?.pagination?.totalPages).map(i => {
          return (
            <Button
              key={i}
              onClick={() => {
                setCurrentPage(i)
              }}
              style={{ margin: '3px', padding: '5px' }}
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
