import { Input, InputProps } from "antd";

import styles from './input.module.scss';

const DefaultInput = ({ children, ...props }: InputProps) => (
  <Input {...props} className={`${props.className} ${styles.input}`} />
);

export { DefaultInput }