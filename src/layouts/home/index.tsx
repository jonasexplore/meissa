import { useContext, useState } from "react"
import { Layout } from "antd"
import { Choose } from "react-extras"

import { menuItems } from "models/enums"
import { Container } from "components/container"
import { Header } from "components/header"
import { SearchLayout } from "./search"
import { CategoryLayout } from "./category"
import { FavoriteLayout } from "./favorite"
import { PokemonContext } from "contexts"

const HomeLayout = () => {
  const { pokemons, isLoading } = useContext(PokemonContext)
  const [currentTab, setCurrentTab] = useState<menuItems>(menuItems.favorites);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<any[]>(pokemons);
  const [filteredAll, setFilteredAll] = useState<any[]>(pokemons);

  const defaultTag = 'Todos'

  const favoritePokemons = pokemons.filter(pokemon => pokemon.isFavorite)

  const onSearch = (value: string) => {
    setIsSearching(true)

    const search = pokemons.filter(pokemon => pokemon.name.includes(value))
    setFiltered(search)

    setIsSearching(false)
  }

  const onSearchByTag = (tag: string) => {
    setIsSearching(true)

    if (tag === defaultTag) {
      setFilteredAll(pokemons)
      return
    }

    const search = pokemons.filter(
      pokemon => pokemon.types?.map(types => types.type.name).includes(tag)
    )

    setFilteredAll(search)

    setIsSearching(false)
  }

  const tagList = pokemons
    .map(pokemon => pokemon.types?.map(types => types.type.name))
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index)

  tagList.unshift(defaultTag)

  return (
    <div>
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        numberOfFavorites={favoritePokemons.length}
      />
      <Layout style={{ width: '100%' }}>
        <Container>
          <Choose>
            <Choose.When condition={currentTab === menuItems.favorites}>
              <div style={{ padding: 16, height: '100vh' }}>
                <FavoriteLayout pokemons={favoritePokemons} isLoading={isLoading} />
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
                <CategoryLayout
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