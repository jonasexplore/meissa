import { CSSProperties } from "react"
import { Tag } from "antd"
import { For } from "react-extras"

import { listTypes } from "domain/types"

import styles from './tagList.module.scss'

type Props = {
  tags: string[]
  className?: string
  style?: CSSProperties
  onClick?: (tag: string) => void
}


const handlerColor = (tag: string) => {
  const selectedColor = Object.entries(listTypes).find(([key]) => key === tag)
  return selectedColor ? selectedColor[1] : listTypes.Fire
}

const TagList = ({ tags, className, style, onClick }: Props) => {
  return (
    <div>
      <For
        of={tags}
        render={(tag, index: number) =>
          <Tag
            key={index}
            style={style}
            color={`${handlerColor(tag)}`}
            onClick={() => onClick && onClick(tag)}
            className={`${styles.tag} ${className}`}
          >
            {tag}
          </Tag>}
      />
    </div>
  )
}

export { TagList }