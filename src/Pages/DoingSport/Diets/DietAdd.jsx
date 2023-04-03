import React, { useState, useEffect } from "react";

import { CartState } from "../../../context/Context";
import { TypeFood } from "../../../context/Reducer";

import "./DietAdd.scss";

const DietaAdd = ({ prod, id }) => {
  const { foodDispatche } = CartState();

  const handleClickRemovee = () => {
    foodDispatche({
      type: TypeFood.removeButtonCalculator,
      payload: { id: id, isOpen: false },
    });
  };

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count === 0) {
      foodDispatche({
        type: TypeFood.removeFromCalculator,
        payload1: prod,
        payload: { id: id, isOpen: false },
      });
    } else {
      foodDispatche({
        type: TypeFood.addQtyCalculator,
        payload: { id: id, qty: Number(count) },
      });
    }
  }, [count]);

  return (
    <div className="products-added">
      <div className="products-added__name">
        <h2 style={{ color: "black" }}>{prod}</h2>
      </div>
      <div className="products-added__input-number">
        100g/
        <span className="products-added__input-btn">
          <button
            className="products-added__btn-minus"
            onClick={() => setCount((prevCount) => prevCount - 1)}
          >
            -
          </button>
          <input
            className="products-added__number-input"
            type="number"
            min="0"
            max="5"
            value={count}
            placeholder="0"
          />
          <button
            className="products-added__btn-plus"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            +
          </button>
        </span>
      </div>
      <div className="products-added__buttons">
        <button
          className="products-added__button"
          onClick={() => handleClickRemovee()}
        >
          Usuń
        </button>
      </div>
    </div>
  );
};

export default DietaAdd;
