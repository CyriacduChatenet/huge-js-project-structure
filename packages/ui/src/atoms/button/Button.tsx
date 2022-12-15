import { FC } from "react";

import styles from "./Button.module.css";

interface IProps {
  label: string;
}

export const Button: FC<IProps> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};
