import React, { useState } from "react";
import "./Products.css";
import { CartState } from "../../context/Context";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import Modal from "../../Components/Portal/Modal";
import Filter from "../../Components/Filter/Filter";
import { PortalProducts } from "./PortalProducts";
import Gym from "../Plans/Gym/Gym";
import {
  SORT_BY_PRICE,
  SORT_BY_FAST_DELIVER,
  SEARCH,
  CLEAR,
} from "../../features/filterSlice";
// import { useSelector, useDispatch } from "react-redux";
// import { ADD } from "../../features/productSlice";

import { useSelector } from "react-redux";

const Products = () => {
  const shop = useSelector((state) => state.shop.products);
  const filter = useSelector((state) => state.filter);
  console.log(filter);
  // const productsN = useSelector((state) => state.products.value);
  // console.log(productsN);
  // const dispatch = useDispatch()
  const {
    productState: { sort, byfastDeliver, search },
    state: { products },
  } = CartState();
  console.log();
  const transformProducts = (e) => {
    let sortedtProdusct = shop;
    if (sort) {
      sortedtProdusct = sortedtProdusct.sort((a, b) =>
        sort === "lowToHight" ? a.price - b.price : b.price - a.price
      );
    }
    if (SORT_BY_FAST_DELIVER) {
      sortedtProdusct = sortedtProdusct.filter((prod) => prod.fast);
    }
    if (SEARCH) {
      sortedtProdusct = sortedtProdusct.filter((prod) =>
        prod.name1.toLowerCase().includes(search)
      );
    }
    return sortedtProdusct;
  };

  return (
    <>
      <div className="home-prod">
        <Filter className="filter-prod" />
        {search.length > 3 ? (
          <div>wyszukiwany wynik dla {search} to : </div>
        ) : (
          ""
        )}
        <div className="main-products">
          {transformProducts().map((prod) => (
            <SingleProduct prod={prod} key={prod.id} />
          ))}
        </div>
        <div>
          {/* <PortalProducts open={isOpen} setIsOpen={setIsOpen}> */}
          {/* {state.modal.map((prod) => (
            <Modal prod={prod} key={prod.id} />
          ))} */}
          {/* <button>Hejo</button>
          </PortalProducts> */}
        </div>
        {/* <button onClick={() =>}>dd</button> */}
      </div>
    </>
  );
};
export default Products;
