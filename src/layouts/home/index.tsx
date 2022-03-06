import { useState } from "react"
import { Layout } from "antd"
import { Choose } from "react-extras"

import { menuItems } from "domain/types"
import { Container } from "components/container"
import { Header } from "components/header"
import { SearchLayout } from "./search"
import { AllLayout } from "./all"
import { FavoriteLayout } from "./favorite"

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
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<any[]>(pokemons);
  const [filteredAll, setFilteredAll] = useState<any[]>(pokemons);

  const onSearch = (value: string) => {
    setIsSearching(true)

    const search = pokemons.filter(pokemon => pokemon.title.includes(value))
    setFiltered(search)

    setIsSearching(false)
  }

  const onSearchByTag = (tag: string) => {
    setIsSearching(true)

    if (tag === 'Todos') {
      setFilteredAll(pokemons)
      return
    }

    const search = pokemons.filter(pokemon => pokemon.types.includes(tag))
    setFilteredAll(search)

    setIsSearching(false)
  }

  const tagList = pokemons
    .map(pokemon => pokemon.types.map(type => type))
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index)

  tagList.unshift("Todos")

  return (
    <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Layout style={{ width: '100%' }}>
        <Container>
          <Choose>
            <Choose.When condition={currentTab === menuItems.favorites}>
              <div style={{ padding: 16, height: '100vh' }}>
                <FavoriteLayout pokemons={pokemons} />
              </div>
            </Choose.When>
            <Choose.When condition={currentTab === menuItems.search}>
              <div style={{ padding: 16, height: '100vh' }}>
                <SearchLayout
                  isSearching={isSearching}
                  onSearch={onSearch}
                  cards={filtered}
                />
              </div>
            </Choose.When>
            <Choose.When condition={currentTab === menuItems.all}>
              <div style={{ padding: 16, height: '100vh' }}>
                <AllLayout
                  tags={tagList}
                  cards={filteredAll}
                  onSearch={onSearchByTag}
                />
              </div>
            </Choose.When>
          </Choose>

        </Container>
      </Layout>
    </div>
  )
}

export { HomeLayout }