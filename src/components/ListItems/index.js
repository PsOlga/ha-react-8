import { useState } from "react";
import { useEffect } from "react";
import styles from "./styles.module.css"
import React from "react";

function ListItems() {

    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function addItem() {
        // проверяем, что строка не пустая
        if (inputValue.trim() !== "")
            // Добавляем новый элемент в массив
            setItems([...items, inputValue]);
        //  очищаем после ввода
        setInputValue('');
    }

    useEffect(() => {
        console.log("Компонент ListItems обновлен");
    }, []);

    return (
        <div className={styles.containLisst}>
            <div className={styles.divLisst}>
                <h1> Мої дівчачі роздуми </h1>
                <textarea
                    className={styles.inpLisst}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />

                <button
                    className={styles.btnLisst}
                    onClick={addItem}>додати</button>
            </div>

            <div className={styles.ulDiv}>
                <ul className={styles.ulLisst}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.liDiv}>
                            <li  className={styles.liLisst}> {item} </li>
                        </div>

                    ))}

                </ul>

            </div>

        </div>
    )
}

export default ListItems;