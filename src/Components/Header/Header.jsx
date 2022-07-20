import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
// import AiFillHome from "react-icons/Ai";
import { CartState } from "../../context/Context";
import { GrLogin } from "react-icons/gr";

import "./Header.scss";

// import { FaSchoppingCart } from "react-icons/fa";
const Header = () => {
  // const StyledItem = styled(DropdownMenu.Item, {
  //   "&[data-disabled]": { color: "gainsboro" },
  // });
  const {
    empty,
    state: { cart },
  } = CartState();
  return (
    <div className="heder">
      <ul className="heder__nav">
        <div className="heder__nav-left">
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
            <Link to="/products">Produkty</Link>
          </li>
          <li>
            <Link to="/dlaczegoWartoUprawiacSport">
              Dlaczego warto uprawiać sport
            </Link>
          </li>
          <li>
            <Link to="/planTreningowy">Plany Treningowe</Link>
          </li>
        </div>
        <div className="heder__nav-right">
          <li>
            <Link to="/profile">
              <HiOutlineShoppingCart fontSize="1,4rem" />
              <div style={{ color: "blue" }}>{cart.length}</div>
            </Link>
          </li>
          <li>
            <Link to="/form">
              <GrLogin fontSize="1,4rem" />
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
