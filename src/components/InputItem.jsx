import { Plus } from "phosphor-react";

import styles from "./InputItem.module.css";

export const InputItem = (props) => {
  const { onChange, value, onCreate } = props;
  return (
    <div className={styles.inputItem}>
      <input placeholder="Estudar..." onChange={onChange} value={value} />
      <Plus size={24} className={styles.icon} onClick={onCreate} />
    </div>
  );
};
