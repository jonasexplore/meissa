import { ListTypes } from "models";

const typesMapper = (types: ListTypes[]): ListTypes[] => {
  return types?.map(({ type: { name } }: ListTypes) => ({
    type: {
      name,
    },
  }));
};

export { typesMapper };
