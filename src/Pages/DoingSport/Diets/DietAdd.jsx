import React, { useState } from "react";
import { CartState } from "../../../context/Context";
import "./DietAdd.scss";
const DietaAdd = ({ prod, id }) => {
  const { foodDispatche } = CartState();

  const handleClickRemove = () => {
    foodDispatche({
      type: "REMOVE_FROM_CALCULATOR",
      payload: { id: id },
      payload1: { id: id, isOpen: false },
    });
  };
  const [value, setValue] = useState(1);
  const onChangeValue = (e) => {
    setValue(e.target.value);
    foodDispatche({
      type: "ADD_QTY",
      payload: { id: id, qty: e.target.value },
    });
  };
  return (
    <div className="products-added">
      <div className="products-added__name">
        <h2 style={{ color: "black" }}>{prod}</h2>
      </div>
      <div className="products-added__input-number">
        100g/
        <input
          type="number"
          className="products-added__calculate"
          onChange={onChangeValue}
          min="1"
          max="5"
          value={value}
        ></input>
      </div>
      <div className="products-added__buttons">
        <button
          className="products-added__button"
          onClick={() => handleClickRemove()}
        >
          Usuń
        </button>
      </div>
    </div>
  );
};

export default DietaAdd;
