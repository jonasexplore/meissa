type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  stats: PokemonStats[];
  isFavorite: boolean;
  sprites: {
    front_default: string;
    back_default: string;
    other: {
      home: {
        front_default: string;
      };
    };
  };
};

type PokemonType = {
  type: {
    name: string;
  };
};

type PokemonStats = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type ListPokemons = {
  name: string;
  url: string;
};

export type { Pokemon, ListPokemons, PokemonStats, PokemonType };
