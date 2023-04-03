import { useEffect } from "react";

import { CartState } from "../../context/Context";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import Modal from "../../Components/modal/Modal";
import Filter from "../../Components/Filter/Filter";

import "./Products.scss";

const Products = () => {
  const id = Math.random().toString(16);

  const {
    productState: { sort, byfastDeliver, search },
    state: { products, modal },
  } = CartState();

  const transformProducts = () => {
    if (sort) {
      return products.sort((a, b) =>
        sort === "lowToHight" ? a.price - b.price : b.price - a.price
      );
    }
    if (byfastDeliver) {
      return products.filter((prod) => prod.fast);
    }

    if (search) {
      return products.filter((prod) =>
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
            <SingleProduct key={id + index} {...prod} />
          ))}
        </div>
        <div>
          {modal.map((prod, index) => (
            <Modal key={id + index + 2} {...prod} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
