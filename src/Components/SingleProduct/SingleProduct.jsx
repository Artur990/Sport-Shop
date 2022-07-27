import React from "react";
import "./SingleProduct.scss";
import Button from "../button/button";
import { CartState } from "../../context/Context";
import { FaShippingFast } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CARD, REMOVE_BUTTON } from "../../features/shopSlice";
const SingleProduct = ({ prod, cart }) => {
  const { dispatch } = CartState();
  const dispatch1 = useDispatch();

  const handleClickAdd = () => {
    dispatch1(ADD_TO_CARD(prod));
    // dispatch1(REMOVE_BUTTON({ id: prod.id, isOpen: true }));
  };
  // console.log([...prod]  );

  //   dispatch({ type: "ADD_TO_CARD", payload: { ...prod } });
  //   dispatch({
  //     type: "REMOVE_BUTTON",
  //     payload: { id: prod.id, isOpen: true },
  //   });

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
      <h3 className="products__title" onClick={() => addModal()}>
        {prod.name1}{" "}
      </h3>
      <spasm className="products__deliver" onClick={() => addModal()}>
        <FaShippingFast className="products__icon-deliver" />{" "}
        {prod.fast ? <div>Fast Deliver</div> : <div>4 days deliver</div>}
      </spasm>
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
          <Button class="primery-button" onClick={handleClickAdd}>
            Doodaj
          </Button>
        )}
      </spam>
    </div>
  );
};

export default SingleProduct;
