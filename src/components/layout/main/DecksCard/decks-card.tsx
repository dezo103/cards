type Props = {
  authorName: string
  cardsCount: number
  key: string
  name: string
  updatedDate: string
}

export const DecksCard = ({ authorName, cardsCount, name, updatedDate }: Props) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{cardsCount}</td>
      <td>{new Date(updatedDate).toLocaleDateString()}</td>
      <td>{authorName}</td>
    </tr>
  )
}
