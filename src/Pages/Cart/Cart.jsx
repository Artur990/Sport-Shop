import React, { useEffect, useState } from "react";

import { CartState } from "../../context/Context";
import "./Cart.scss";
import SingleProductCart from "./SingleProductCart";
import { CgDollar } from "react-icons/cg";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const Profile = () => {
  const {
    state: { cart },
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    const totalCount = cart.reduce(
      (acc, cur) => acc + Number(cur.price) * Number(cur.qty),
      0
    );
    setTotal(totalCount);
  }, [cart]);

  return (
    <>
      <div className="main-cart">
        <div className="main-cart__products">
          {cart.length ? (
            <span className="produscts-container-cart">
              {cart.map((prod) => (
                <SingleProductCart prod={prod} key={prod.id} />
              ))}
            </span>
          ) : (
            <div className="main-cart__tekst"> Twój koszyk jest pusty</div>
          )}
        </div>
        <div className="main-cart__filter">
          <h3>
            SubTotal: {total} <CgDollar />
          </h3>
          <h3>
            Total {cart.length} <MdOutlineProductionQuantityLimits />
          </h3>
          <button className="primery-button">Zamów </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
