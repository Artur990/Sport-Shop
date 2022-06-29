import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
// import AiFillHome from "react-icons/Ai";
import { CartState } from "../../context/Context";

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
      {/* <h2 className="title-sklep">Lubimy sport</h2> */}
      <ul className="nav">
        <h2 className="title-sklep">Lubimy sport</h2>
        <li>
          <Link to="/">
            <AiOutlineHome className="icon-heder" />
          </Link>
        </li>

        <li>
          <Link to="/about">Produkty</Link>
        </li>
        <li>
          <Link to="/dlaczegoWartoUprawiacSport">
            Dlaczego warto uprawiać sport
          </Link>
        </li>
        <li>
          <Link to="/planTreningowy">Plany Treningowe</Link>
        </li>
        <li>
          <Link to="/about">Ankieta</Link>
        </li>

        <li>
          <Link to="/profile">
            <HiOutlineShoppingCart fontSize="25px" />
            {cart.length}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
