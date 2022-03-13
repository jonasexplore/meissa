const env = {
  baseUrl: process.env.POKEMON_API || "https://pokeapi.co/api/v2/",
  pokemonOffset: process.env.POKEMON_OFFSET || "20",
  pokemonLimit: process.env.POKEMON_LIMIT || "20",
};

export { env };
