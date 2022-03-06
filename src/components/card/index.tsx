import { useState } from "react";
import { Card, Image, Typography } from "antd";

import { DefaultButton, FavoriteButton } from "components/buttons";
import { TagList } from "components/tagList";

import styles from './card.module.scss';

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
    <Card hoverable className={styles.card}>
      <FavoriteButton isFavorite={isFav} onClick={handleFavorite} />

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