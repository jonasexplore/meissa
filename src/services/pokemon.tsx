import { api } from "./api";
import { ListPokemons, Pokemon } from "models";
import { apiResponse } from "./apiResponse";

const pokemonService = {
  getPokemon: async (url: string): Promise<Pokemon> => {
    const [, pokemon] = url.split(/pokemon\//);
    const id = pokemon.split("/")[0];

    const response = await api.get<Pokemon>(`/pokemon/${id || "25"}`);
    return apiResponse(response);
  },

  listPokemons: async (
    offset: string,
    limit: string
  ): Promise<ListPokemons[]> => {
    const response = await api.get<Pokemon[]>(
      `/pokemon?offset=${offset}&limit=${limit}`
    );
    return apiResponse(response).results;
  },
};

export { pokemonService };
