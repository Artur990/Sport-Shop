import React, { useState } from "react";
import { CartState } from "../../context/Context";
import FormValue from "../FormValue/FormValue";
import "./SingleProduct.css";
import { FaShippingFast } from "react-icons/fa";
import { ModalProducts } from "../../Pages/Products/ModalProducts";

const SingleProduct = ({ prod, cart }) => {
  const { dispatch } = CartState();

  const [isAdded, setIsAdded] = useState(false);

  const [qty, setQty] = useState();
  const handleClickAdd = () => {
    dispatch({ type: "ADD_TO_CARD", payload: { ...prod, qty: qty } });
  };

  const handleClickRemove = () => {
    setIsAdded(false);
    dispatch({ type: "REMOVE_FROM_CARD", payload: prod });
  };

  const [value, setValue] = useState(0);
  const onChangeValue = (e) => {
    dispatch({
      type: "ADD_QTY",
      payload: { id: prod.id, qty: e.target.value },
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    // <ModalProducts isOpen={isOpen} setIsOpen={setIsOpen}>
    <div className="products">
      <img className="img" src={prod.image} alt={prod.name1} />

      <h3 style={{ color: "black" }}>{prod.name1}</h3>
      <spam className="dostawa">
        <FaShippingFast className="icon-dostawa" />{" "}
        {prod.fast ? <div>Fast Deliver</div> : <div>4 days deliver</div>}
      </spam>

      <span>ocena:{prod.ratings}/5</span>

      <spam className="cena-button">
        <spam className="price">{prod.price}$ </spam>
        <button className="button" onClick={() => handleClickAdd()}>
          Doodaj
        </button>
      </spam>
    </div>
    // </ModalProducts>
  );
};

export default SingleProduct;
