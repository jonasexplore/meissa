import { Typography } from "antd"
import { CardList } from "components/cardList"

type Props = {
  pokemons: any[]
  isLoading?: boolean
}

const FavoriteLayout = ({ pokemons, isLoading = false }: Props) => {
  const title = pokemons.length === 0 ? "Nenhum Pokemon encontrado" :
    `Olá, você tem ${pokemons.length} pokémon salvo!`

  return (
    <>
      <Typography.Title level={2}>{title}</Typography.Title>
      <CardList cards={pokemons} isLoading={isLoading} />
    </>
  )
}

export { FavoriteLayout }