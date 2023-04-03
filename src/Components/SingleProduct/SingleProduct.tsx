import { FaShippingFast } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { CartState } from "../../context/Context";
import Button from "../button/Button";
import { TypeCart } from "../../context/Reducer";

import "./SingleProduct.scss";

const SingleProduct = (prod: any) => {
  const { dispatch } = CartState();

  const handleClickAdd = () => {
    dispatch({ type: TypeCart.addToCart, payload: { ...prod } });
    dispatch({
      type: TypeCart.removeButton,
      payload: { id: prod.id, isOpen: true },
    });
  };
  const addModal = () => {
    dispatch({ type: TypeCart.addToModal, payload: { ...prod } });
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
        <div className="products__title">
          <h3 onClick={() => addModal()}>{prod.name1} </h3>
        </div>

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
