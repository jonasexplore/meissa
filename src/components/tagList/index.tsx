import { CSSProperties } from "react"
import { Tag } from "antd"
import { For } from "react-extras"

import { typeList } from "models/enums"
import { getEnumValue } from "utils"

import styles from './tagList.module.scss'

type Props = {
  tags: string[]
  className?: string
  style?: CSSProperties
  onClick?: (tag: string) => void
}

const TagList = ({ tags, className, style, onClick }: Props) => {

  const handlerColor = (tag: string) => {
    return getEnumValue(typeList, tag) ?? typeList.fire
  }

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