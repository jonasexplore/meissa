import { Pokemon } from "models";
import { statsMapper } from "./stats";
import { typesMapper } from "./types";

const pokemonMapper = (pokemons: Pokemon[]): Pokemon[] => {
  return pokemons?.map(
    ({ height, id, name, sprites, stats, types, weight }: Pokemon) => ({
      height,
      id,
      name,
      sprites: {
        back_default: sprites?.back_default,
        front_default: sprites?.front_default,
        other: {
          home: {
            front_default: sprites?.other?.home?.front_default,
          },
        },
      },
      stats: statsMapper(stats),
      types: typesMapper(types),
      weight,
      isFavorite: false,
    })
  );
};

export { pokemonMapper };
