import { useUpdateDeckMutation } from '@/services/decks-service'

type Props = {
  authorName: string
  cardsCount: number
  id: string
  key: string
  name: string
  updatedDate: string
}

export const DecksCard = ({ authorName, cardsCount, id, name, updatedDate }: Props) => {
  const [updateDeck] = useUpdateDeckMutation()

  return (
    <tr>
      <td
        onClick={() => {
          updateDeck({ id, name: 'it is a newest' })
        }}
      >
        {name}
      </td>
      <td>{cardsCount}</td>
      <td>{new Date(updatedDate).toLocaleDateString()}</td>
      <td>{authorName}</td>
    </tr>
  )
}
