import React, { useState } from "react";
import { CartState } from "../../context/Context";
import "./SingleProductsModal.css";
import { FaShippingFast } from "react-icons/fa";

const SingleProductModal = ({ prod, cart }) => {
  const { dispatch } = CartState();

  const handleClickRemove = () => {
    dispatch({ type: "REMOVE_FROM_MODAL", payload: prod });
  };
  const handleAddCart = () => {
    dispatch({ type: "ADD_TO_CARD", payload: { ...prod } });
  };

  const addModal = (e) => {
    dispatch({ type: "ADD_TO_MODAL", payload: { ...prod } });
  };

  return (
    <div className="portal-main-product">
      <div className="portal-product">
        <div className="home">
          <img
            className="img-single-product"
            src={prod.image}
            alt={prod.name1}
            onClick={() => addModal()}
          />
          <h3 style={{ color: "black" }}>{prod.name1}</h3>
          <spam className="dostawa" onClick={() => addModal()}>
            <FaShippingFast className="icon-dostawa" />{" "}
            {prod.fast ? <div>Fast Deliver</div> : <div>4 days deliver</div>}
          </spam>
          <span>ocena:{prod.ratings}/5</span>
          <spam className="price-button">
            <spam className="price">{prod.price}$ </spam>
            <button className="button" onClick={() => handleClickRemove()}>
              Zamknij
            </button>
            <button className="button" onClick={() => handleAddCart()}>
              Dodaj
            </button>
          </spam>
        </div>
      </div>
    </div>
  );
};

export default SingleProductModal;
