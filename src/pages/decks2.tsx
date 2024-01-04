import { Link } from 'react-router-dom'

import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/base-api'

export const Decks2 = () => {
  const { data, isError, isLoading } = useGetDecksQuery()

  if (isError) {
    return <Typography variant={'h1'}>An error has occured ...</Typography>
  }

  if (isLoading) {
    return <Typography variant={'h1'}>Is loading ...</Typography>
  }

  return (
    <>
      <Typography variant={'h1'}>It is decks 2</Typography>
      <Link to={'/'}>to Decks 1</Link>
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
    </>
  )
}
