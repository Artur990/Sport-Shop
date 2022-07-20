import React from "react";
import "./Products.css";
import { CartState } from "../../context/Context";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import Modal from "../../Components/Portal/Modal";
import Filter from "../../Components/Filter/Filter";

const Products = () => {
  const {
    productState: { sort, byfastDeliver },
    state: { products },
    state,
    productState,
  } = CartState();

  const transformProducts = (e) => {
    let sortedtProdusct = products;
    if (sort) {
      sortedtProdusct = sortedtProdusct.sort((a, b) =>
        sort === "lowToHight" ? a.price - b.price : b.price - a.price
      );
    }
    if (byfastDeliver) {
      sortedtProdusct = sortedtProdusct.filter((prod) => prod.fast);
    }
    if (productState.search) {
      sortedtProdusct = sortedtProdusct.filter((prod) =>
        prod.name1.includes(productState.search)
      );
    }
    return sortedtProdusct;
  };

  return (
    <>
      <div className="home-prod">
        <Filter className="filter-prod" />
        {productState.search.length > 3 ? (
          <div>wyszukiwany wynik dla {productState.search} to : </div>
        ) : (
          ""
        )}
        <div className="main-products">
          {transformProducts().map((prod) => (
            <SingleProduct prod={prod} key={prod.id} />
          ))}
        </div>
        <div>
          {state.modal.map((prod) => (
            <Modal prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
