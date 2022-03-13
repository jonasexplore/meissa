import { CSSProperties } from "react"
import { Tag } from "antd"
import { For } from "react-extras"

import { typeList } from "models/enums"

import styles from './tagList.module.scss'

type Props = {
  tags: string[]
  className?: string
  style?: CSSProperties
  onClick?: (tag: string) => void
}


const handlerColor = (tag: string) => {
  const selectedColor = Object.entries(typeList).find(([key]) => key === tag)
  return selectedColor ? selectedColor[1] : typeList.fire
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