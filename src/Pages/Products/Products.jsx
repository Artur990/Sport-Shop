import React from "react";
import "./Products.scss";
import { CartState } from "../../context/Context";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import Modal from "../../Components/Portal/Modal";
import Filter from "../../Components/Filter/Filter";

const Products = () => {
  const {
    productState: { sort, byfastDeliver, search },
    state,
  } = CartState();

  const transformProducts = (e) => {
    let sortedtProdusct = state.products;
    if (sort) {
      sortedtProdusct = sortedtProdusct.sort((a, b) =>
        sort === "lowToHight" ? a.price - b.price : b.price - a.price
      );
    }
    if (byfastDeliver) {
      sortedtProdusct = sortedtProdusct.filter((prod) => prod.fast);
    }
    if (search) {
      sortedtProdusct = sortedtProdusct.filter((prod) =>
        prod.name1.toLowerCase().includes(search)
      );
    }
    return sortedtProdusct;
  };

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
