import React from "react";

import { CartState } from "../../context/Context";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import Modal from "../../Components/modal/Modal";
import Filter from "../../Components/Filter/Filter";
import { LOW_TO_HIGHT } from "../../context/const";

import "./Products.scss";
import { useEffect } from "react";

const Products = () => {
  const {
    productState: { sort, byfastDeliver, search },
    state,
  } = CartState();

  const transformProducts = () => {
    if (sort) {
      return state.products.sort((a, b) =>
        sort === LOW_TO_HIGHT ? a.price - b.price : b.price - a.price
      );
    }
    if (byfastDeliver) {
      return state.products.filter((prod) => prod.fast);
    }
    if (search) {
      return state.products.filter((prod) =>
        prod.name1.toLowerCase().includes(search)
      );
    }
    return [];
  };

  useEffect(() => {
    transformProducts();
  }, [state.products]);
  return (
    <>
      <div className="home-prod">
        <Filter className="home-prod__filter-prod" />
        {search.length > 3 ? (
          <div>wyszukiwany wynik dla {search} to : </div>
        ) : (
          ""
        )}
        <div className="home-prod__main-products">
          {transformProducts().map((prod) => (
            <React.Fragment key={prod.id}>
              <SingleProduct key={prod.id} prod={prod} />
            </React.Fragment>
          ))}
        </div>
        <div>
          {state.modal.map((prod) => (
            <Modal key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
