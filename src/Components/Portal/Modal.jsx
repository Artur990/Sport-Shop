import React from "react";
import "./Modal.scss";
import Button from "../button/button";
import { CartState } from "../../context/Context";
import { FaShippingFast } from "react-icons/fa";

const Modal = ({ prod }) => {
  const { dispatch } = CartState();

  const handleClickRemove = () => {
    dispatch({ type: "REMOVE_FROM_MODAL", payload: prod });
  };

  const handleClickAdd = () => {
    dispatch({ type: "ADD_TO_CARD", payload: { ...prod } });
    dispatch({
      type: "REMOVE_BUTTON",
      payload: { id: prod.id, isOpen: true },
    });
  };

  return (
    <div className="portal-product">
      <div className="portal-product__main">
        <div className="portal-product__home">
          <img
            className="portal-product__img-single-product"
            src={prod.image}
            alt={prod.name1}
          />
          <h3 style={{ color: "black" }}>{prod.name1}</h3>
          <spam className="portal-product__deliver">
            <FaShippingFast className="portal-product__icon-deliver" />{" "}
            {prod.fast ? <div>Fast Deliver</div> : <div>4 days deliver</div>}
          </spam>
          <span>ocena:{prod.ratings}/5</span>
          <spam className="portal-product__price-button">
            <spam className="portal-product__price">{prod.price}$ </spam>
            <button
              className="second-button "
              onClick={() => handleClickRemove()}
            >
              Zamknij
            </button>
            {prod.isOpen ? (
              <div>dodany</div>
            ) : (
              <Button class="second-button" onClick={() => handleClickAdd()}>
                Dodaj
              </Button>
            )}
          </spam>
          <div>
            <h2>
              Damskie rolki, LADY DESQ COOLSLIDE – jak mawiają sport to zdrowie.
              Dlatego rekreacyjna jazda na rolkach jest topowym sposobem
              spędzania wolnego czasu
            </h2>
            <h3>
              But posiada konstrukcję typu SOFT. Przednia część cholewki jest
              miękka, a tylna ma twardy element stabilizujący. Odpowiednie
              trzymanie kostki zapewnia klamra
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
