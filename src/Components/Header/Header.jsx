import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
// import AiFillHome from "react-icons/Ai";
import { CartState } from "../../context/Context";
import { GrLogin } from "react-icons/gr";

import "./Header.css";

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
    <div className="title">
      <ul className="nav">
        <div className="nav-left">
          <li>
            <Link to="/">
              <h2 className="title-sklep">Lubimy sport</h2>
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiOutlineHome className="icon-heder" />
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
        <div className="nav-right">
          <li>
            <Link to="/profile">
              <HiOutlineShoppingCart fontSize="25px" />
              <div style={{ color: "blue" }}>{cart.length}</div>
            </Link>
          </li>
          <li>
            <Link to="/form">
              <GrLogin fontSize="25px" />
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
