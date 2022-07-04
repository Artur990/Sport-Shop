import React, { useState } from "react";
import { CartState } from "../../../context/Context";
import "./DietAdd.css";
const DietaAdd = ({ prod }) => {
  const { foodDispatche } = CartState();

  const handleClickRemove = () => {
    foodDispatche({ type: "REMOVE_FROM_CARD", payload: prod });
  };

  const [value, setValue] = useState(0);
  const onChangeValue = (e) => {
    foodDispatche({
      type: "ADD_QTY",
      payload: { id: prod.id, qty: e.target.value },
    });
  };

  return (
    <div className="products-add">
      <div className="description-cart">
        <h2 style={{ color: "black" }}>{prod.name}</h2>
      </div>
      <div className="inputs-cart">
        <input
          type="number"
          className="input-number-cart"
          onChange={onChangeValue}
          min="1"
          max="5"
          placeholder="1"
        ></input>
        <div className="buttons-cart">
          <button className="button-cart" onClick={() => handleClickRemove()}>
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
};

export default DietaAdd;
