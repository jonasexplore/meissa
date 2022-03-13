import type { NextPage } from 'next'

import { HomeLayout } from 'layouts/home'
import { PokemonProvider } from 'contexts'

const Home: NextPage = () =>
  <PokemonProvider>
    <HomeLayout />
  </PokemonProvider>

export default Home
