import { ListStats } from "models";

const statsMapper = (stats: ListStats[]): ListStats[] => {
  return stats?.map(({ base_stat, stat: { name } }: ListStats) => ({
    base_stat,
    stat: {
      name,
    },
  }));
};

export { statsMapper };
