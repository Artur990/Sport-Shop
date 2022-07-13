import React from "react";
import { CartState } from "../../context/Context";
import "./SingleProduct.css";
import { FaShippingFast } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const SingleProduct = ({ prod, cart }) => {
  const { dispatch } = CartState();

  const handleClickAdd = () => {
    dispatch({ type: "ADD_TO_CARD", payload: { ...prod } });
  };

  const addModal = (e) => {
    dispatch({ type: "ADD_TO_MODAL", payload: { ...prod } });
  };

  console.log(prod.ratings.length);
  return (
    <div className="products">
      <img
        className="img"
        src={prod.image}
        alt={prod.name1}
        onClick={() => addModal()}
      />
      <h3 style={{ color: "black" }}>{prod.name1}</h3>
      <spam className="deliver" onClick={() => addModal()}>
        <FaShippingFast className="icon-deliver" />{" "}
        {prod.fast ? <div>Fast Deliver</div> : <div>4 days deliver</div>}
      </spam>
      <span className="rating">
        ocena: {prod.ratings} /5
        {/* <AiFillStar className="stars" /> */}
      </span>
      <spam className="pice-and-button">
        <spam className="price">{prod.price}$ </spam>
        <button className="button-product" onClick={() => handleClickAdd()}>
          Doodaj
        </button>
      </spam>
    </div>
  );
};

export default SingleProduct;
