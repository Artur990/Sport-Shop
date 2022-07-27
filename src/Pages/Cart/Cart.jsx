import React, { useEffect, useState } from "react";
// import { CartState } from "../../context/Context";
import "./Cart.scss";
import SingleProductCart from "./SingleProductCart";
import { CgDollar } from "react-icons/cg";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useSelector } from "react-redux";
const Profile = () => {
  const count = useSelector((state) => state.shop.cart);

  const [total, setTotal] = useState();

  useEffect(() => {
    const totalCount = count.reduce(
      (acc, cur) => acc + Number(cur.price) * Number(cur.qty),
      0
    );
    setTotal(totalCount);
  }, [count]);

  useEffect(() => {}, [count]);
  return (
    <>
      <div className="main-cart">
        <div className="main-cart__products">
          {count.length ? (
            <span className="produscts-container-cart">
              {count.map((prod) => (
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
            Total {count.length} <MdOutlineProductionQuantityLimits />
          </h3>
          <button className="primery-button">Zamów </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
