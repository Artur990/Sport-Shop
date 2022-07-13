import React from "react";
import "./Products.css";
import { CartState } from "../../context/Context";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import SingleProductModal from "../../Components/SingleProduct/SingleProductsModal";
import Filter from "../../Components/Filter/Filter";

const Products = ({ prod }) => {
  const {
    productState: { sort, Asceding, byfastDeliver },
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
    if (productState.search.length > 3) {
      sortedtProdusct = sortedtProdusct.filter(
        (prod) => prod.name1 === productState.search
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
            <SingleProductModal prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
