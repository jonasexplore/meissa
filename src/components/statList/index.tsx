import { For } from "react-extras"

import { getEnumValue } from "utils"
import { PokemonStats } from "models"
import { statsList } from "models/enums"

import styles from './statList.module.scss'

type Props = {
  stats: PokemonStats[]
}

const StatList = ({ stats }: Props) => {

  const handlerStat = (stat: string) => {
    return getEnumValue(statsList, stat) ?? ''
  }

  return (
    <>
      <For of={stats} render={(stat, index) =>
        <div key={index} className={styles.container}>
          <div className={styles.label}>{handlerStat(stat.stat.name)}</div>

          <div className={styles.backgroundBar}>
            <div
              className={styles.filledBar}
              style={{ width: `${stat.base_stat}%` }}
            >
            </div>
          </div>

          <div className={styles.label}>{stat.base_stat}</div>
        </div>
      } />
    </>
  )
}

export { StatList }