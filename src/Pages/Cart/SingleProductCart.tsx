import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import { CartState } from "../../context/Context";
import { TypeCart } from "../../context/Reducer";

import "./SingleProductCart.scss";
import { TModal, TProductArray, TSingelProduct } from "../../types/types";

const SingleProductCart = (prod: TProductArray) => {
  console.log(prod);
  const { dispatch } = CartState();
  const handleClickRemove = () => {
    dispatch({
      type: TypeCart.RemoveFromCard,
      payload: { id: prod.id, isOpen: false },
    });
  };
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count === 0) {
      dispatch({
        type: TypeCart.RemoveFromCard,
        payload: { id: prod.id, isOpen: false },
      });
    } else {
      dispatch({
        type: TypeCart.addQty,
        payload: { id: prod.id, qty: Number(count) },
      });
    }
  }, [count]);
  console.log(prod.ratings);
  return (
    <div className="products-cart">
      <img className="products-cart__img" src={prod.image} alt={prod.name1} />
      <div className="products-cart__description">
        <h2 style={{ color: "black" }}>{prod.name1}</h2>
        <span>{prod?.price}zł </span>
        <span>{prod?.fast ? <div>Szybka dostawa</div> : "4 Dni dostawy"}</span>
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
