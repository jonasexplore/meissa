import { ReactNode } from 'react'
import styles from './container.module.scss'

type Props = {
  children: ReactNode
}

const Container = ({ children }: Props) =>
  <div className={styles.background}>
    <div className={styles.container}>
      {children}
    </div>
  </div>

export { Container }