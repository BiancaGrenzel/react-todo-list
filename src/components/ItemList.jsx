import React, { useState } from "react";

import { Trash } from "phosphor-react";

import styles from "./ItemList.module.css";

export const ItemList = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const { item, onDeleteItem } = props;

  function handleItemSelection() {
    setIsSelected(!isSelected);
  }

  const itemStyle = isSelected ? styles.itemListSelected : styles.itemList;

  return (
    <div className={itemStyle}>
      <div className={styles.item}>
        <input type="checkbox" onChange={handleItemSelection} />
        <p>{item}</p>
      </div>
      <Trash size={24} className={styles.icon} onClick={onDeleteItem} />
    </div>
  );
};
