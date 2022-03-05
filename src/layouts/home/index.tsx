import { Layout, Typography } from "antd"
import { DefaultCard } from "components/card"
import { CardList } from "components/cardList"
import { Container } from "components/container"
import { Header } from "components/header"
import { menuItems } from "domain/types"
import { useState } from "react"
import { Choose } from "react-extras"

const pokemons = [
  {
    id: 1,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
    isFavorite: false,
    title: "Bulbasaur",
    types: ["Grass", "Poison"],
  },
  {
    id: 2,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
    isFavorite: false,
    title: "Ivysaur",
    types: ["Grass", "Poison"],
  },
  {
    id: 3,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
    isFavorite: false,
    title: "Venusaur",
    types: ["Grass", "Poison"],
  },
  {
    id: 4,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
    isFavorite: false,
    title: "Charmander",
    types: ["Fire"],
  },
  {
    id: 5,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
    isFavorite: false,
    title: "Charmeleon",
    types: ["Fire"],
  },
  {
    id: 6,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    isFavorite: false,
    title: "Charizard",
    types: ["Fire", "Flying"],
  },
  {
    id: 7,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
    isFavorite: false,
    title: "Squirtle",
    types: ["Water"],
  }
]



const HomeLayout = () => {
  const [currentTab, setCurrentTab] = useState<menuItems>(menuItems.favorites);

  return (
    <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Layout>
        <Container>
          <Choose>
            <Choose.When condition={currentTab === menuItems.favorites}>
              <div style={{ padding: 16, height: '100vh' }}>
                <Typography.Title level={2}>Olá, você tem 01 pokémon salvo!</Typography.Title>
                <CardList cards={pokemons} />
              </div>
            </Choose.When>
            <Choose.When condition={currentTab === menuItems.search}>
              <div>
                <Typography.Title level={2}>Pesquisa</Typography.Title>
              </div>
            </Choose.When>
            <Choose.When condition={currentTab === menuItems.all}>
              <div>
                <Typography.Title level={2}>Todos</Typography.Title>
              </div>
            </Choose.When>
          </Choose>

        </Container>
      </Layout>
    </div>
  )
}

export { HomeLayout }