import { Image, Modal, Typography } from "antd";
import { DefaultButton } from "components/buttons";
import { StatList } from "components/statList";
import { TagList } from "components/tagList";
import { PokemonContext } from "contexts";
import { Pokemon } from "models";
import { useContext } from "react";

import styles from './modal.module.scss'

type Props = {
  visible: boolean
  onCancel: () => void
  pokemon: Pokemon
}

const { Title, Paragraph } = Typography

const DefaultModal = ({ visible, onCancel, pokemon }: Props) => {
  const { height, id, isFavorite, name, sprites, stats, types, weight } = pokemon

  const { setFavoritePokemon } = useContext(PokemonContext)

  const tags = types.map((type) => type.type.name);

  const handleFavorite = () => setFavoritePokemon(id)
  const titleFavoriteButton = isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"

  return (
    <Modal
      title="Detalhes"
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={450}
    >
      <Title level={3}>{name}</Title>
      <div>
        <Image
          alt={name}
          preview={false}
          src={sprites.front_default}
        />
        <Image
          alt={name}
          preview={false}
          src={sprites.back_default}
        />
      </div>
      <Paragraph strong>{height}m {weight}kg</Paragraph>
      <TagList tags={tags} />
      <div style={{
        margin: '1rem 0'
      }}>
        <StatList stats={stats} />
      </div>
      <DefaultButton onClick={handleFavorite} style={{
        backgroundColor: isFavorite ? "var(--danger-color)" : "var(--primary-color)",
      }}>
        {titleFavoriteButton}
      </DefaultButton>
    </Modal>)
}
export { DefaultModal }