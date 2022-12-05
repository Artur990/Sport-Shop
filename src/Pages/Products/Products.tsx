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
    state: { products, modal },
  } = CartState();
  console.log(search);
  // console.log(modal);
  const transformProducts = () => {
    if (sort) {
      return products.sort((a: any, b: any) =>
        sort === "lowToHight" ? a.price - b.price : b.price - a.price
      );
    }
    if (byfastDeliver) {
      return products.filter((prod: any) => prod.fast);
      // state.
    }

    if (search) {
      return products.filter((prod: any) =>
        prod.name1.toLowerCase().includes(search)
      );
    }
    return products;
  };

  useEffect(() => {
    transformProducts();
  }, [products]);
  return (
    <>
      <div className="home-prod">
        <Filter className="home-prod__filter-prod" />
        {search?.search.length > 3 ? (
          <div>wyszukiwany wynik dla {search} to : </div>
        ) : (
          ""
        )}
        <div className="home-prod__main-products">
          {transformProducts()?.map((prod, index) => (
            // <div key={prod.id}>
            <SingleProduct key={index} prod={prod} />
            // </div>
          ))}
        </div>
        <div>
          {/* {modal?.map((prod: any, index: any) => ( */}
          {/* <Modal key={index} prod={prod} /> */}
          {/* ))}  */}
        </div>
      </div>
    </>
  );
};
export default Products;
