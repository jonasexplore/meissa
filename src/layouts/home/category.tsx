import { CardList } from "components/cardList"
import { TagList } from "components/tagList"

type Props = {
  tags: string[],
  cards: any[]
  onSearch: (value: string) => void
}

const CategoryLayout = ({ cards, tags, onSearch }: Props) => {
  return (
    <>
      <TagList tags={tags} onClick={onSearch} style={{
        padding: '6px 12px',
        cursor: 'pointer',
        margin: '16px 4px'
      }} />
      <CardList cards={cards} />
    </>
  )
}

export { CategoryLayout }