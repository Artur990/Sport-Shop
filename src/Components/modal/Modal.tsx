import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import Button from "../button/Button";
import { CartState, ProductsType } from "../../context/Context";
import {
  REMOVE_FROM_MODAL,
  ADD_TO_CARD,
  REMOVE_BUTTON,
} from "../../context/const";

import "./Modal.scss";

const Modal: React.FC<ProductsType> = ({ prod }: any) => {
  const { dispatch } = CartState();

  const handleClickRemove = () => {
    dispatch({
      type: REMOVE_FROM_MODAL,
      //  payload: prod
    });
  };

  const handleClickAdd = () => {
    dispatch({ type: ADD_TO_CARD, payload: { ...prod } });
    dispatch({
      type: REMOVE_BUTTON,
      payload: { id: prod.id, isOpen: true },
    });
  };

  return (
    <div className="portal-product" onClick={() => handleClickRemove()}>
      <div className="portal-product__main">
        <div className="portal-product__home">
          <img
            className="portal-product__img-single-product"
            src={prod.image}
            alt={prod.name1}
          />
          <h3 style={{ color: "black" }}>{prod.name1}</h3>
          <span className="portal-product__deliver">
            <FaShippingFast className="portal-product__icon-deliver" />{" "}
            {prod.fast ? <div>zybka dostawa</div> : <div>4 Dni dostawy</div>}
          </span>
          <span className="products__rating">
            ocena:
            {[...Array(...prod.ratings)].map(() => (
              <AiFillStar className="products__stars" />
            ))}
          </span>
          <span className="portal-product__price-button">
            <span className="portal-product__price">{prod.price}ZŁ </span>
            <button
              className="second-button "
              onClick={() => handleClickRemove()}
            >
              Zamknij
            </button>
            {prod.isOpen ? (
              <div></div>
            ) : (
              <Button class="second-button" onClick={() => handleClickAdd()}>
                Dodaj
              </Button>
            )}
          </span>
          <div>
            <h2>Opis produktu</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
