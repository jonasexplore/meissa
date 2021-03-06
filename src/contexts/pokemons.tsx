import { createContext, useEffect, useState } from "react";

import { Pokemon } from "models";
import { env } from "config/env";
import { getIdByUrl } from "utils";
import { pokemonService } from "services";
import { pokemonMapper } from "utils/mappers";

type PokemonContextType = {
  isLoading: boolean;
  pokemons: Pokemon[];
  setFavoritePokemon: (id: number) => void;
  getPokemon: (id: number) => Pokemon | undefined;
};

type Props = {
  children: React.ReactNode;
};

export const PokemonContext = createContext<PokemonContextType>(
  {} as PokemonContextType
);

export const PokemonProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemon = (id: number) => {
    return pokemons.find((pokemon) => pokemon.id === id);
  };

  const setFavoritePokemon = (id: number) => {
    const pokemon = getPokemon(id);

    if (pokemon) {
      pokemon.isFavorite = !pokemon.isFavorite;
      setPokemons([...pokemons]);
    }
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);

      const response = await pokemonService.listPokemons(
        env.pokemonOffset,
        env.pokemonLimit
      );

      const promisses = [];

      for (const data of response) {
        const pokemonId = getIdByUrl(data.url)
        promisses.push(pokemonService.getPokemon(pokemonId))
      }

      const pokemons = await Promise.all([...promisses]);

      const mappedPokemons = pokemonMapper(pokemons);

      setPokemons(mappedPokemons as any);
      setIsLoading(false);
    }

    fetchPokemons();
  }, []);

  const value = {
    pokemons,
    isLoading,
    getPokemon,
    setFavoritePokemon,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
