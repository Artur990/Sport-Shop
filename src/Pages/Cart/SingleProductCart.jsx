import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import { CartState } from "../../context/Context";
import { REMOVE_FROM_CARD, ADD_QTY } from "../../context/const";

import "./SingleProductCart.scss";

const SingleProductCart = ({ prod }) => {
  const { dispatch } = CartState();
  const handleClickRemove = () => {
    dispatch({
      type: REMOVE_FROM_CARD,
      payload1: prod,
      payload: { id: prod.id, isOpen: false },
    });
  };

  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count === 0) {
      dispatch({
        type: REMOVE_FROM_CARD,
        payload1: prod,
        payload: { id: prod.id, isOpen: false },
      });
    } else {
      dispatch({
        type: ADD_QTY,
        payload: { id: prod.id, qty: Number(count) },
      });
    }
  }, [count]);

  return (
    <div className="products-cart">
      <img className="products-cart__img" src={prod.image} alt={prod.name1} />
      <div className="products-cart__description">
        <h2 style={{ color: "black" }}>{prod.name1}</h2>
        <spam>{prod.price}zł </spam>
        <spam>{prod.fast ? <div>Szybka dostawa</div> : "4 Dni dostawy"}</spam>

        <span className="products-cart__rating">
          ocena:
          {[...Array(...prod.ratings)].map(() => (
            <AiFillStar className="products__stars" />
          ))}
        </span>
      </div>
      <span className="input-btn">
        <button
          className="btn-minus"
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          -
        </button>
        <input
          className="products-cart__number"
          type="number"
          min="0"
          max="5"
          value={count}
          placeholder="0"
        />
        <button
          className="btn-plus"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          +
        </button>
      </span>
      <div className="products-cart__buttons">
        <MdOutlineRemoveShoppingCart
          className="products-cart__button"
          onClick={() => handleClickRemove()}
        />
      </div>
    </div>
  );
};

export default SingleProductCart;
