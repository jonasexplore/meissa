import { Typography } from "antd"
import { CardList } from "components/cardList"

import astronaut from 'assets/images/astronaut.png'
import Image from "next/image"
import { DefaultButton } from "components/buttons"
import { Choose, If } from "react-extras"

type Props = {
  pokemons: any[]
  isLoading?: boolean
  onPush?: () => void
}

const { Title, Paragraph } = Typography

const FavoriteLayout = ({ pokemons, onPush, isLoading = false }: Props) => {

  const isEmpty = pokemons.length === 0

  return (
    <>
      <Choose>
        <Choose.When condition={isEmpty}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Image src={astronaut} width={516} height={334} alt="astronaut" />
            <Title>Está meio vazio por aqui!</Title>
            <Paragraph>Procure por pokémons para adicioná-los aos seus favoritos.</Paragraph>
            <DefaultButton onClick={onPush} style={{
              maxWidth: '400px',
              background: 'transparent',
              border: '1px solid #000',
            }}>Procurar pokémons</DefaultButton>
          </div>
        </Choose.When>
        <Choose.Otherwise>
          <Title level={2}>Olá, você tem {pokemons.length} pokémon salvo!</Title>
          <CardList cards={pokemons} isLoading={isLoading} />
        </Choose.Otherwise>
      </Choose>
    </>
  )
}

export { FavoriteLayout }