import React, { useState } from "react";
import { CartState } from "../../context/Context";
// MdOutlineRemoveShoppingCart
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import "./SingleProductCart.scss";
import { AiFillStar } from "react-icons/ai";
import { useEffect } from "react";

const SingleProductCart = ({ prod }) => {
  const { dispatch } = CartState();
  const handleClickRemove = () => {
    dispatch({
      type: "REMOVE_FROM_CARD",
      payload1: prod,
      payload: { id: prod.id, isOpen: false },
    });
  };

  const [value, setValue] = useState(1);

  const onChangeValueminus = (e) => {
    setValue((val) => val + e);
  };
  const onChangeValueplus = (e) => {
    setValue((val) => val + e);
  };

  const onChangeValue = (e) => {
    setValue(e.target.value);
    if (Number(value) === 0) {
      dispatch({
        type: "REMOVE_FROM_CARD",
        payload1: prod,
        payload: { id: prod.id, isOpen: false },
      });
    } else {
      dispatch({
        type: "ADD_QTY",
        payload: { id: prod.id, qty: value },
      });
    }
  };

  return (
    <div className="products-cart">
      <img className="products-cart__img" src={prod.image} alt={prod.name1} />
      <div className="products-cart__description">
        <h2 style={{ color: "black" }}>{prod.name1}</h2>
        <spam>{prod.price}$ </spam>
        <spam>{prod.fast ? <div>Szybka dostawa</div> : "4 Dni dostawy"}</spam>

        <span className="products-cart__rating">
          ocena:
          {[...Array(...prod.ratings)].map(() => (
            <AiFillStar className="products__stars" />
          ))}
        </span>
      </div>
      {/* <div className="products-cart__input"> */}
      <span className="input-btn">
        <button className="btn-minus" onClick={() => onChangeValueminus(-1)}>
          -
        </button>
        <input
          type="number"
          className="products-cart__number"
          onChange={onChangeValue}
          // min="0"
          // max="5"
          // placeholder="1"
          value={value}
        ></input>{" "}
        <button className="btn-plus" onClick={() => onChangeValueplus(+1)}>
          +{" "}
        </button>{" "}
      </span>
      {/* <div className="products-cart__buttons"> */}
      <MdOutlineRemoveShoppingCart
        className="products-cart__button"
        onClick={() => handleClickRemove()}
      />

      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default SingleProductCart;
