import React, { useEffect, useState } from "react";

import { CartState } from "../../context/Context";
import "./Cart.css";
import SingleProductCart from "./SingleProductCart";

const Profile = () => {
  const {
    state: { cart },
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    const totalCount = cart.reduce((acc, cur) => acc + Number(cur.price), 0);
    setTotal(totalCount);
  }, [cart]);

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
          <h3>SubTotal: {total} $</h3>
          <h3>Total {cart.length}</h3>
          <button>Zamóws </button>
        </div>
      </div>
      <div className="main-foot-cart">Dane firmy:</div>
    </>
  );
};

export default Profile;
