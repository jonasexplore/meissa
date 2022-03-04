import { Button, ButtonProps } from "antd";

import styles from './styles.module.scss';

const DefaultButton = ({ children, ...props }: ButtonProps) => (
  <Button type="primary" {...props} className={styles.defaultButton}>
    {children}
  </Button>
);

export { DefaultButton }