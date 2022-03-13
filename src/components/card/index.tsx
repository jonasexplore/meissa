import { useContext, useState } from "react";
import { Card, Image, Typography } from "antd";

import { Pokemon } from "models";
import { PokemonContext } from "contexts";
import { TagList } from "components/tagList";
import { DefaultModal } from "components/modal";
import { DefaultButton, FavoriteButton } from "components/buttons";

import styles from './card.module.scss';

const { Title, Paragraph } = Typography

type CardProps = Pokemon & {
  isLoading?: boolean
};

const DefaultCard = (
  { isLoading = false, ...pokemon }: CardProps
) => {
  const { id, isFavorite, types, sprites, name } = pokemon
  const { setFavoritePokemon } = useContext(PokemonContext)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleFavorite = () => {
    setFavoritePokemon(id)
  }

  const tags = types.map((type) => type.type.name);

  return (
    <>
      <Card hoverable className={styles.card} loading={isLoading}>
        <FavoriteButton isFavorite={isFavorite} onClick={handleFavorite} />

        <div className={styles.image}>
          <Image
            alt={name}
            preview={false}
            src={sprites?.other?.home?.front_default}
          />
        </div>

        <Title level={3} style={{ marginTop: 4, marginBottom: 0 }}>{name}</Title>
        <Paragraph>ID: {id}</Paragraph>

        <TagList tags={tags} />

        <DefaultButton
          className={styles.button}
          onClick={() => setIsModalVisible(true)}
        >
          Ver detalhes
        </DefaultButton>
      </Card>
      <DefaultModal
        onCancel={() => setIsModalVisible(false)}
        pokemon={pokemon}
        visible={isModalVisible}
      />
    </>
  )
}

export { DefaultCard }