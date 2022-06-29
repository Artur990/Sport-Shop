import React, { useState } from "react";
import { CartState } from "../../context/Context";

import "./SingleProductCart.css";

const SingleProductCart = ({ prod }) => {
  const { dispatch } = CartState();

  const handleClickRemove = () => {
    dispatch({ type: "REMOVE_FROM_CARD", payload: prod });
  };

  const [value, setValue] = useState(0);
  const onChangeValue = (e) => {
    dispatch({
      type: "ADD_QTY",
      payload: { id: prod.id, qty: e.target.value },
    });
  };

  return (
    <div className="products-cart">
      <img className="img-cart" src={prod.image} alt={prod.name1} />
      <div className="description-cart">
        <h2 style={{ color: "black" }}>{prod.name1}</h2>
        <spam>{prod.price}$ </spam>
        <spam>{prod.fast ? <div>Fast Deliver</div> : "4 days deliver"}</spam>
        <span>ocena:{prod.ratings}/5</span>
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

export default SingleProductCart;
