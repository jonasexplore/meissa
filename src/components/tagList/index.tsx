import { Tag } from "antd"
import { For } from "react-extras"

import { listTypes } from "domain/types"

import styles from './tagList.module.scss'

type Props = {
  tags: string[]
}


const handlerColor = (tag: string) => {
  const selectedColor = Object.entries(listTypes).find(([key]) => key === tag)
  return selectedColor ? selectedColor[1] : listTypes.Fire
}

const TagList = ({ tags }: Props) => {
  return (
    <div>
      <For
        of={tags}
        render={(tag, index: number) =>
          <Tag
            key={index}
            color={`${handlerColor(tag)}`}
            className={styles.tag}
          >
            {tag}
          </Tag>}
      />
    </div>
  )
}

export { TagList }