import React, { useEffect, useState } from "react";

import { CartState } from "../../context/Context";
import "./Cart.css";
import SingleProductCart from "./SingleProductCart";
import { CgDollar } from "react-icons/cg";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const Profile = () => {
  const {
    state: { cart },
  } = CartState();

  const [total, setTotal] = useState();
  console.log(cart);
  useEffect(() => {
    const totalCount = cart.reduce(
      (acc, cur) => acc + Number(cur.price) * Number(cur.qty),
      0
    );
    setTotal(totalCount);
  }, [cart]);
  console.log(cart);
  return (
    <>
      <div className="main-cart">
        <div className="main-products-cart">
          {cart.length ? (
            <span className="produscts-container-cart">
              {cart.map((prod) => (
                <SingleProductCart prod={prod} key={prod.id} />
              ))}
            </span>
          ) : (
            <div className="tekst-cart"> Twój koszyk jest pusty</div>
          )}
        </div>
        <div className="filter-cart">
          <h3>
            SubTotal: {total} <CgDollar />
          </h3>
          <h3>
            Total {cart.length} <MdOutlineProductionQuantityLimits />
          </h3>
          <button className="cartbutton">Zamów </button>
        </div>
      </div>
      <div className="main-foot-cart">Dane firmy:</div>
    </>
  );
};

export default Profile;
