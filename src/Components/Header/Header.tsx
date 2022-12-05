import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart, HiMenu } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { GrLogin } from "react-icons/gr";

import { CartState } from "../../context/Context";

import "./Header.scss";
const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    state: { cart },
  } = CartState();
  return (
    <div className="heder">
      <ul className="heder__nav-left">
        <li>
          <Link to="/">
            <h2 className="heder__title-sklep">Lubimy sport</h2>
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineHome className="heder__icon-heder" />
          </Link>
        </li>

        <li>
          <Link to="/sklep">Sklep</Link>
        </li>
        <li>
          <Link to="/dlaczegoWartoUprawiacSport">
            Dlaczego warto uprawiać sport
          </Link>
        </li>
      </ul>
      <ul className="heder__nav-right">
        <li className="heder__nav-right-content">
          <Link to="/koszyk">
            <HiOutlineShoppingCart
              fontSize="1.5rem"
              style={{ color: "white" }}
            />
            <div style={{ color: "red" }} className="icon-cart">
              {cart.length}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/form">
            <GrLogin fontSize="1,4rem" />
          </Link>
        </li>
      </ul>
      <div className="navBar-mobile">
        <div>
          <Link to="/">
            <h2 className="heder__title-sklep">Lubimy sport</h2>
          </Link>
        </div>
        <div>
          <Link to="/form">
            <GrLogin className="nav-Bar-icon" />
          </Link>
        </div>
        <div onClick={() => setIsOpen(!isOpen)}>
          <HiMenu className="nav-Bar-icon" />
        </div>
        {isOpen && (
          <div className="nav-bar" onClick={() => setIsOpen(!isOpen)}>
            <div className="nav-bav-floadMenu">
              <div className="nav-bav-floadMenu__contnet">
                <Link to="/">Strona Główna</Link>
              </div>
              <div className="nav-bav-floadMenu__contnet">
                <Link to="/sklep">Sklep</Link>
              </div>
              <div className="nav-bav-floadMenu__contnet">
                <Link to="/dlaczegoWartoUprawiacSport">
                  Dlaczego warto uprawiać sport
                </Link>
              </div>
              <div className="nav-bav-floadMenu__contnet">
                <Link to="/koszyk">
                  Koszyk
                  <div
                    className="nav-bav-floadMenu__contnet"
                    style={{ color: "rgba(236, 77, 77)" }}
                  >
                    (liczba produktów:{cart.length})
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
