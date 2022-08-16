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
  const [products, setProducts] = useState({
    count: 1,
  });
  const handleChange = (e) => {
    setProducts({ count: e.target.value || 0 });
    dispatch({
      type: "ADD_QTY",
      payload: { id: prod.id, qty: Number(products.count) },
    });
  };
  console.log(products.count);
  const decrease = (e) => {
    if (products.count <= 0) {
      return;
    }
    setProducts({ count: products.count - 1 });
  };

  const [value, setValue] = useState(1);

  // const onChangeValueminus = (e) => {
  //   setValue((val) => val + e);

  //   if (Number(value) === 0) {
  //     dispatch({
  //       type: "REMOVE_FROM_CARD",
  //       payload1: prod,
  //       payload: { id: prod.id, isOpen: false },
  //     });
  //   }
  //   if (Number(value) !== 0) {
  //     dispatch({
  //       type: "ADD_QTY",
  //       payload: { id: prod.id, qty: Number(value) },
  //     });
  //   }
  // };
  // const onChangeValueplus = (e) => {
  //   setValue((val) => val + e);

  //   if (Number(value) === 0) {
  //     dispatch({
  //       type: "REMOVE_FROM_CARD",
  //       payload1: prod,
  //       payload: { id: prod.id, isOpen: false },
  //     });
  //   } else {
  //     dispatch({
  //       type: "ADD_QTY",
  //       payload: { id: prod.id, qty: Number(value) },
  //     });
  //   }
  // };

  // const onChangeValue = (e) => {
  //   setValue(value);
  //   // console.log(e.target);
  //   // if (Number(value) === 0) {
  //   //   dispatch({
  //   //     type: "REMOVE_FROM_CARD",
  //   //     payload1: prod,
  //   //     payload: { id: prod.id, isOpen: false },
  //   //   });
  //   // } else {
  //   //   dispatch({
  //   //     type: "ADD_QTY",
  //   //     payload: { id: prod.id, qty: Number(e.target.value) },
  //   //   });
  //   // }
  // };
  // // console.log(value);

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
      {/* <div className="products-cart__input"> */}
      <span className="input-btn">
        <button
          className="btn-minus"
          // onClick={() => onChangeValueminus(Number(-1))}
          onClick={decrease}
        />
        {/* -
        </button> */}
        <input
          className="products-cart__number"
          type="text"
          // onChange={onChangeValue}
          // // min="0"
          // // max="5"
          // value={value}
          value={products.count}
          onChange={handleChange}
          placeholder="0"
        />
        <button
          className="btn-plus"
          // onClick={() => onChangeValueplus(Number(1))}
          onClick={() => setProducts({ count: products.count + 1 })}
        />
        {/* +{" "}
        </button>{" "} */}
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
