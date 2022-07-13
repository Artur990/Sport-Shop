import React, { useState } from "react";
import { CartState } from "../../../context/Context";
import "./DietAdd.css";
const DietaAdd = ({ prod, id }) => {
  const { foodDispatche } = CartState();

  const handleClickRemove = () => {
    foodDispatche({ type: "REMOVE_FROM_CARD", payload: { id: id } });
  };

  const [value, setValue] = useState(0);
  const onChangeValue = (e) => {
    foodDispatche({
      type: "ADD_QTY",
      payload: { id: id, qty: e.target.value },
    });
  };
  return (
    <div className="products-add">
      <div className="name-product">
        <h2 style={{ color: "black" }}>{prod}</h2>
      </div>
      <div className="">
        100g/
        <input
          type="number"
          className="input-number-cart"
          onChange={onChangeValue}
          min="1"
          max="5"
          placeholder="1"
        ></input>
      </div>
      {/* <div className="buttons-cart"> */}
      <button className="button-cart" onClick={() => handleClickRemove()}>
        Usuń
      </button>
      {/* </div> */}
    </div>
  );
};

export default DietaAdd;
