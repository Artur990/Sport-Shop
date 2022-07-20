import React from "react";
import { CartState } from "../../context/Context";
import "./SingleProduct.scss";
import { FaShippingFast } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const SingleProduct = ({ prod, cart }) => {
  const { dispatch } = CartState();

  const handleClickAdd = () => {
    dispatch({ type: "ADD_TO_CARD", payload: { ...prod } });
    dispatch({
      type: "REMOVE_BUTTON",
      payload: { id: prod.id, isOpen: true },
    });
  };

  const addModal = (e) => {
    dispatch({ type: "ADD_TO_MODAL", payload: { ...prod } });
  };

  return (
    <div className="products">
      <img
        className="products__img"
        src={prod.image}
        alt={prod.name1}
        onClick={() => addModal()}
      />
      <h3 className="products__title">{prod.name1}</h3>
      <spam className="products__deliver" onClick={() => addModal()}>
        <FaShippingFast className="products__icon-deliver" />{" "}
        {prod.fast ? <div>Fast Deliver</div> : <div>4 days deliver</div>}
      </spam>
      <span className="products__rating">
        ocena:
        {[...Array(...prod.ratings)].map(() => (
          <AiFillStar className="products__stars" />
        ))}
      </span>
      <spam className="products__pice-and-button">
        <spam className="products__price">{prod.price}$ </spam>
        {prod.isOpen ? (
          ""
        ) : (
          <button className="primery-button" onClick={() => handleClickAdd()}>
            Doodaj
          </button>
        )}
      </spam>
    </div>
  );
};

export default SingleProduct;
