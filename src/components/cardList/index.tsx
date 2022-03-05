import { DefaultCard } from "components/card"

import styles from './cardList.module.scss'

type Props = {
  cards: any[]
}

const CardList = ({ cards }: Props) => {
  return (
    <div className={styles.container}>
      {cards.map((card: any) => (
        <div key={card.id} className={styles.cards}>
          <DefaultCard
            id={card.id}
            imageUrl={card.imageUrl}
            isFavorite={card.isFavorite}
            title={card.title}
            types={card.types}
          />
        </div>
      ))}
    </div>
  )
}

export { CardList }