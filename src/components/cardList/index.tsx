import { DefaultCard } from "components/card"
import { Pokemon } from "models"

import styles from './cardList.module.scss'

type Props = {
  cards: Pokemon[]
  isLoading?: boolean
}

const CardList = ({ cards, isLoading = false }: Props) => {
  return (
    <div className={styles.container}>
      {cards.map((card: any) => (
        <div key={card.id} className={styles.cards}>
          <DefaultCard
            {...card}
            isLoading={isLoading}
          />
        </div>
      ))}
    </div>
  )
}

export { CardList }