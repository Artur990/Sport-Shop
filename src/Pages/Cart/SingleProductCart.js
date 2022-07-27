import React, { useState } from "react";
import { CartState } from "../../context/Context";

import "./SingleProductCart.scss";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FROM_CARD, ADD_QTY } from "../../features/shopSlice";

const SingleProductCart = ({ prod }) => {
  // const { dispatch, cart } = CartState();
  const dispatch1 = useDispatch();

  // console.log(cart);
  const handleClickRemove = () => {
    dispatch1(REMOVE_FROM_CARD(prod));

    // dispatch({
    //   type: "REMOVE_FROM_CARD",
    //   // payload1: prod,
    //   payload: { id: prod.id, isOpen: false },
    // });
  };

  const onChangeValue = (e) => {
    dispatch1(ADD_QTY({ id: prod.id, qty: e.target.value }));
    //     {
    //     type: "ADD_QTY",
    //     payload: { id: prod.id, qty: e.target.value },
    //   });
  };

  return (
    <div className="products-cart">
      <img className="products-cart__img" src={prod.image} alt={prod.name1} />
      <div className="products-cart__description">
        <h2 style={{ color: "black" }}>{prod.name1}</h2>
        <spam>{prod.price}$ </spam>
        <spam>{prod.fast ? <div>Fast Deliver</div> : "4 days deliver"}</spam>
        <span>ocena:{prod.ratings}/5</span>
      </div>
      <div className="products-cart__input">
        <input
          type="number"
          className="products-input-number"
          onChange={onChangeValue}
          min="1"
          max="5"
          placeholder="1"
        ></input>
        <div className="products-cart__buttons">
          <button
            className="products-cart__button"
            onClick={() => handleClickRemove()}
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCart;
