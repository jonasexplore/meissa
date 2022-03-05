import { Button, ButtonProps } from "antd";

import styles from './button.module.scss';

const DefaultButton = ({ children, ...props }: ButtonProps) => (
  <Button
    type="primary" {...props}
    className={`${styles.button} ${props.className}`}>
    {children}
  </Button>
);

export { DefaultButton }