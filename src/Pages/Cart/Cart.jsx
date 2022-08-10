import React, { useEffect, useState } from "react";
import { CartState } from "../../context/Context";
import "./Cart.scss";
import SingleProductCart from "./SingleProductCart";
import { TbTruckDelivery } from "react-icons/tb";

import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const Profile = () => {
  const {
    state: { cart },
  } = CartState();
  const [total, setTotal] = useState();
  // console.log(cart[0].qty);
  useEffect(() => {
    const totalCount = cart.reduce(
      (acc, cur) => acc + Number(cur.price) * Number(cur.qty),
      0
    );
    setTotal(totalCount);
  }, [cart]);

  return (
    <>
      {" "}
      <h1 className="main-cart__title">TWÓJ KOSZYK ({cart.length} PRODUKT)</h1>
      <h2 className="main-cart__title">Produkt</h2>
      <div className="main-cart">
        <div className="main-cart__products">
          {cart.length ? (
            <span>
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
            <TbTruckDelivery /> Czas wysyłki do 24H w dni robocze
          </h3>
          <h3>
            {/* Total {cart.length} */}
            Łączna Kwota {total}
            <MdOutlineProductionQuantityLimits />
          </h3>
          <button className="main-cart__button">Przejdź do kasy </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
