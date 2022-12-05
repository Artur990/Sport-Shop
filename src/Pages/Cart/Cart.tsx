import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

import { CartState, ProductsType } from "../../context/Context";
import SingleProductCart from "./SingleProductCart";

import "./Cart.scss";

const Profile: FC = () => {
  const {
    state: { cart },
  } = CartState();
  const [total, setTotal] = useState([]);

  useEffect(() => {
    const totalCount = cart.reduce(
      (acc: any, cur: any) => acc + Number(cur.price) * Number(cur.qty),
      0
    );
    setTotal(totalCount);
  }, [cart]);

  return (
    <>
      {cart.length ? (
        <div>
          {" "}
          <h1 className="main-cart__title">
            TWÓJ KOSZYK ({cart.length} PRODUKT)
          </h1>
          <h2 className="main-cart__title1">Produkt:</h2>
          <div className="main-cart">
            <div className="main-cart__products">
              <span>
                {cart.map((prod, i) => (
                  <SingleProductCart key={i} prod={prod} />
                ))}
              </span>
            </div>
            <div className="main-cart__filter">
              <h3 className="main-cart__deliver-container">
                <TbTruckDelivery className="main-cart__deliver-icon" />
                <div>Czas wysyłki do 24H w dni robocze</div>
              </h3>
              <h3 style={{ color: "grey", fontSize: "0.9rem" }}>
                * Łączna Kwota {total} ZŁ
              </h3>
              <h3>DO Zapłaty {total} ZŁ</h3>
              <Link to="/">
                <button
                  className="main-cart__button"
                  onClick={() => alert("Dziękujemy za skorzystanie z zakupów")}
                >
                  Przejdź do kasy{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="main-cart-empty">
          <div className="main-cart-empty__cart">
            <BiShoppingBag className="main-cart-empty__icon" />
            <h1>Twój koszyk jest pusty</h1>
            <Link to="/sklep">
              <h2>Przejdź do Sklepu</h2>
            </Link>
            <Link to="/">
              <h2>Wróć do strony głównej</h2>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
