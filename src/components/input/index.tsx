import { Input, InputProps } from "antd";

import styles from './styles.module.scss';

const DefaultInput = ({ children, ...props }: InputProps) => (
  <Input {...props} className={styles.defaultInput} />
);

export { DefaultInput }