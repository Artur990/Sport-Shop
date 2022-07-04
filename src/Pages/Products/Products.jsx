import React, { useState } from "react";
import "./Products.css";
import { CartState } from "../../context/Context";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import Filter from "../../Components/Filter/Filter";

import { ModalProducts } from "./ModalProducts";
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

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="home-prod">
        <Filter className="filter-prod" />

        <div
          className="main-products"
          // isOpen={isOpen}
          // setIsOpen={setIsOpen}
        >
          {transformProducts().map((prod) => (
            <SingleProduct
              prod={prod}
              key={prod.id}
              onClick={() => setIsOpen(true)}
              // cart={cart}
              // setCart={setCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
