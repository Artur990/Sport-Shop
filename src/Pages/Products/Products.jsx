import React from "react";
import "./Products.css";
import { CartState } from "../../context/Context";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import Filter from "../../Components/Filter/Filter";
// import logo from "./fll.jpg";
const Products = ({ prod }) => {
  const {
    productState: { sort, Asceding, byfastDeliver },
    state: { products },
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
    return sortedtProdusct;
  };
  return (
    <>
      <div className="home-prod">
        <Filter className="filter-prod" />

        <div className="main-products">
          {transformProducts().map((prod) => (
            <SingleProduct
              prod={prod}
              key={prod.id}
              // cart={cart}
              // setCart={setCart}
            />
          ))}
        </div>
        <img src="./colorful-umbrella-1176220.jpg" alt="ss"></img>
      </div>
    </>
  );
};
export default Products;
