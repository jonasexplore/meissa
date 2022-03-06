import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import { Choose } from "react-extras"

import styles from './favoriteButton.module.scss'

type Props = {
  isFavorite: boolean,
  onClick: () => void
}

const FavoriteButton = ({ isFavorite, onClick }: Props) => {

  return (
    <Choose>
      <Choose.When condition={isFavorite}>
        <HeartFilled className={styles[`heart--filled`]} onClick={onClick} />
      </Choose.When>
      <Choose.Otherwise>
        <HeartOutlined className={styles.heart} onClick={onClick} />
      </Choose.Otherwise>
    </Choose>
  )
}

export { FavoriteButton }