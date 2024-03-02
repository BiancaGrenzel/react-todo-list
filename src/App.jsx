import React, { useEffect, useState } from "react";

import { InputItem } from "./components/InputItem";
import { ItemList } from "./components/ItemList";

import styles from "./App.module.css";

import "./global.css";

function App() {
  const [itensList, setItensList] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    getItensListLocalStorage();
  }, []);

  useEffect(() => {
    if (itensList.length) {
      setItensListLocalStorage();
    }
  }, [itensList]);

  function getItensListLocalStorage() {
    const itensListString = localStorage.getItem("itensList");
    const itensList = JSON.parse(itensListString);
    setItensList(itensList);
  }

  function setItensListLocalStorage() {
    localStorage.setItem("itensList", JSON.stringify(itensList));
  }

  function handleNewItemChange() {
    event.target.setCustomValidity("");
    setNewItem(event.target.value);
    console.log(newItem);
  }

  function handleCreateNewItem() {
    const id = itensList.length ? itensList[itensList.length - 1].id + 1 : 0;
    setItensList([...itensList, { id: id, name: newItem }]);
    setNewItem("");
  }

  function handleDeleteItem(id) {
    const itensWithoutDeletedOne = itensList.filter((item) => item.id !== id);
    setItensList(itensWithoutDeletedOne);
  }

  return (
    <div className={styles.wrapper}>
      <h1>Todo List</h1>
      <div className={styles.content}>
        <p>{new Date().toLocaleString()}</p>
        <InputItem
          value={newItem}
          onChange={handleNewItemChange}
          onCreate={handleCreateNewItem}
        />
        <div className={styles.list}>
          {itensList.map((item) => (
            <ItemList
              key={item.id}
              item={item.name}
              onDeleteItem={() => handleDeleteItem(item.id)}
            />
          ))}
        </div>
      </div>
      <p>Bianca Grenzel Severo</p>
    </div>
  );
}

export default App;
