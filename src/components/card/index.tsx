import { useState } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button, Card, Image, Tag, Typography } from "antd";
import { Choose } from "react-extras";

import { DefaultButton } from "components/button";

import styles from './card.module.scss';
import { TagList } from "components/tagList";

const { Title, Paragraph } = Typography

type CardProps = {
  id: string,
  title: string,
  types: string[],
  imageUrl: string,
  isFavorite: boolean,
}

const DefaultCard = ({ id, title, types, imageUrl, isFavorite }: CardProps) => {
  const [isFav, setIsFav] = useState(isFavorite)

  const handleFavorite = () => {
    setIsFav(!isFav)
  }

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      className={styles.card}
    >
      <Choose>
        <Choose.When condition={isFav}>
          <HeartFilled className={styles[`heart--filled`]} onClick={handleFavorite} />
        </Choose.When>
        <Choose.Otherwise>
          <HeartOutlined className={styles.heart} onClick={handleFavorite} />
        </Choose.Otherwise>
      </Choose>

      <div className={styles.image}>
        <Image preview={false} alt={title} src={imageUrl} />
      </div>

      <Title level={3} style={{ marginTop: 4, marginBottom: 0 }}>{title}</Title>
      <Paragraph>ID: {id}</Paragraph>

      <TagList tags={types} />

      <DefaultButton className={styles.button}>Ver detalhes</DefaultButton>
    </Card>
  )
}

export { DefaultCard }