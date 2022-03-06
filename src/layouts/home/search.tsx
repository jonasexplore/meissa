import { Input } from "antd"
import { CardList } from "components/cardList"

type Props = {
  isSearching: boolean,
  onSearch: (value: string) => void
  cards: any[]
}

const SearchLayout = ({ isSearching, onSearch, cards }: Props) => {
  return (
    <>
      <Input.Search
        loading={isSearching}
        placeholder="Procure por pokémons"
        onSearch={onSearch}
        style={{
          margin: '16px 0'
        }}
      />
      <CardList cards={cards} />
    </>
  )
}

export { SearchLayout }