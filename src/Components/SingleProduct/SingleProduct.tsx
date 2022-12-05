import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import { CartState } from "../../context/Context";
import Button from "../button/Button";
import { ADD_TO_CARD, REMOVE_BUTTON, ADD_TO_MODAL } from "../../context/const";
import { ProductsType } from "../../context/Context";

import "./SingleProduct.scss";

const SingleProduct = ({ prod }: any) => {
  const { dispatch } = CartState();

  const handleClickAdd = () => {
    dispatch({ type: ADD_TO_CARD, payload: { ...prod } });
    dispatch({
      type: REMOVE_BUTTON,
      payload: { id: prod.id, isOpen: true },
    });
  };
  const addModal = () => {
    dispatch({ type: ADD_TO_MODAL, payload: { ...prod } });
  };

  return (
    <div key={prod.id} className="products">
      <img
        className="products__img"
        src={prod.image}
        alt={prod.name1}
        onClick={() => addModal()}
      />
      <div className="contnetProducts">
        <h3 className="products__title" onClick={() => addModal()}>
          {prod.name1}{" "}
        </h3>
        <span className="products__deliver" onClick={() => addModal()}>
          <FaShippingFast className="products__icon-deliver" />
          {prod.fast ? <div>Szybka dostawa</div> : <div>4 Dni dostawy</div>}
        </span>
        <span className="products__rating">
          ocena:
          {[...Array(...prod.ratings)].map(() => (
            <AiFillStar className="products__stars" />
          ))}
        </span>
      </div>
      <span className="products__pice-and-button">
        <span className="products__price">{prod.price}ZŁ </span>
        {!prod.isOpen && (
          <Button class="primery-button" onClick={handleClickAdd}>
            Doodaj
          </Button>
        )}
      </span>
    </div>
  );
};

export default SingleProduct;
