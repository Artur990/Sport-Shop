import React from "react";
import { CartState } from "../../context/Context";
import "./Modal.scss";
import { FaShippingFast } from "react-icons/fa";

const Modal = ({ prod, cart }) => {
  const { dispatch } = CartState();

  const handleClickRemove = () => {
    dispatch({ type: "REMOVE_FROM_MODAL", payload: prod });
  };
  // const handleAddCart = () => {
  //   dispatch({ type: "ADD_TO_CARD", payload: { ...prod } });
  //   // dispatch({
  //   //   type: "REMOVE_BUTTON",
  //   //   payload: { id: prod.id, isOpen: true },
  //   // });
  // };
  // console.log(prod);

  // const addModal = (e) => {
  //   dispatch({ type: "ADD_TO_MODAL", payload: { ...prod } });
  // };

  return (
    <div className="portal-product">
      <div className="portal-product__main">
        <div className="portal-product__home">
          <img
            className="portal-product__img-single-product"
            src={prod.image}
            alt={prod.name1}
            // onClick={() => addModal()}
          />
          <h3 style={{ color: "black" }}>{prod.name1}</h3>
          <spam
            className="portal-product__deliver"
            // onClick={() => addModal()}
          >
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
          </spam>
        </div>
      </div>
    </div>
  );
};

export default Modal;
