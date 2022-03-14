const getIdByUrl = (url: string) => {
  const POKEMON_EXPRESSION = /pokemon\//;

  const [, id] = url.split(POKEMON_EXPRESSION);
  return id.split("/")[0];
}

export { getIdByUrl }