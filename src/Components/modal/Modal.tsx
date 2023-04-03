import { FaShippingFast } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import { TypeCart } from "../../context/Reducer";
import Button from "../button/Button";
import { CartState } from "../../context/Context";
import { TModal } from "../../types/types";

import "./Modal.scss";

const Modal = (prod: TModal) => {
  const { dispatch } = CartState();

  const handleClickRemove = () => {
    dispatch({
      type: TypeCart.removeFromModal,
    });
  };

  const handleClickAdd = () => {
    dispatch({ type: TypeCart.addToCart, payload: { product: prod } });
    dispatch({
      type: TypeCart.removeButton,
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
          <h3 style={{ color: "black" }} className="portal-product__name">
            {prod.name1}
          </h3>
          <span className="portal-product__deliver">
            <FaShippingFast className="portal-product__icon-deliver" />{" "}
            {prod.fast ? <div>szybka dostawa</div> : <div>4 Dni dostawy</div>}
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
            <h2 className="portal-product__description">Opis produktu</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
