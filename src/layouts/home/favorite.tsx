import { Typography } from "antd"
import { CardList } from "components/cardList"

type Props = {
  pokemons: any[]
}

const FavoriteLayout = ({ pokemons }: Props) => {
  return (
    <>
      <Typography.Title level={2}>Olá, você tem 01 pokémon salvo!</Typography.Title>
      <CardList cards={pokemons} />
    </>
  )
}

export { FavoriteLayout }