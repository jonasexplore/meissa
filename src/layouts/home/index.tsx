import { useContext, useState } from "react"
import { Layout } from "antd"
import { Choose } from "react-extras"

import { Pokemon } from "models"
import { menuItems } from "models/enums"
import { SearchLayout } from "./search"
import { PokemonContext } from "contexts"
import { FavoriteLayout } from "./favorite"
import { CategoryLayout } from "./category"
import { Header } from "components/header"
import { Container } from "components/container"

import styles from './home.module.scss'

const HomeLayout = () => {
  const { pokemons, isLoading } = useContext(PokemonContext)
  const [currentTab, setCurrentTab] = useState<menuItems>(menuItems.favorites);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<Pokemon[]>(pokemons);
  const [filteredAll, setFilteredAll] = useState<Pokemon[]>(pokemons);

  const defaultTag = 'Todos'

  const favoritePokemons = pokemons.filter(pokemon => pokemon.isFavorite)

  const onSearch = (value: string) => {
    setIsSearching(true)

    const search = pokemons.filter(pokemon => pokemon.name.includes(value))
    setFiltered(search)

    setIsSearching(false)
  }

  const onSearchByTag = (tag: string) => {
    if (tag === defaultTag) {
      setFilteredAll(pokemons)
      return
    }

    const search = pokemons.filter(
      pokemon => pokemon.types?.map(types => types.type.name).includes(tag)
    )

    setFilteredAll(search)
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
      <Layout style={{ height: '100%', minHeight: '100vh' }}>
        <Container>
          <Choose>
            <Choose.When condition={currentTab === menuItems.favorites}>
              <div className={styles.container}>
                <FavoriteLayout
                  pokemons={favoritePokemons}
                  isLoading={isLoading}
                  onPush={() => setCurrentTab(menuItems.search)}
                />
              </div>
            </Choose.When>
            <Choose.When condition={currentTab === menuItems.search}>
              <div className={styles.container}>
                <SearchLayout
                  isSearching={isSearching}
                  onSearch={onSearch}
                  cards={filtered}
                />
              </div>
            </Choose.When>
            <Choose.When condition={currentTab === menuItems.all}>
              <div className={styles.container}>
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