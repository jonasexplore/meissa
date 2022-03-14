import { api } from "./api";
import { ListPokemons, Pokemon } from "models";
import { apiResponse } from "./apiResponse";

const pokemonService = {
  getPokemon: async (id: string): Promise<Pokemon> => {
    const response = await api.get<Pokemon>(`/pokemon/${id}`);
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
