import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";
import { BiShoppingBag } from "react-icons/bi";
import "./Cart.scss";
import SingleProductCart from "./SingleProductCart";
import { TbTruckDelivery } from "react-icons/tb";

const Profile = () => {
  const {
    state: { cart },
  } = CartState();
  const [total, setTotal] = useState();
  console.log(cart[0]);
  useEffect(() => {
    const totalCount = cart.reduce(
      (acc, cur) => acc + Number(cur.price) * Number(cur.qty),
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
                {cart.map((prod) => (
                  <SingleProductCart prod={prod} key={prod.id} />
                ))}
              </span>
            </div>
            <div className="main-cart__filter">
              <h3 className="main-cart__deliver-container">
                <TbTruckDelivery className="main-cart__deliver-icon" />
                <div>Czas wysyłki do 24H w dni robocze</div>
              </h3>
              <h3 style={{ color: "grey", fontSize: "0.9rem" }}>
                Łączna Kwota {total} ZŁ
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
{
  /* <button
            className="main-cart__button"
            onChange={() => alert("dziękujemy za skorzystanie z zakupów")}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Przejdź do kasy
            </Link>
          </button> */
}
