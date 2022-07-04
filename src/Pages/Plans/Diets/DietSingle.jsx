import React from "react";
import { CartState } from "../../../context/Context";
import "./DietSingle.css";
const DietaSingle = ({ prod }) => {
  const { foodDispatche } = CartState();
  const handleClickAdd = () => {
    foodDispatche({ type: "ADD_TO_CARD", payload: { ...prod } });
  };

  return (
    <div className="dieta-single-main">
      <h3 className="dieta-single-title" style={{ color: "black" }}>
        {prod.name}
      </h3>
      <button className="dieta-single-button" onClick={() => handleClickAdd()}>
        Doodaj
      </button>
    </div>
  );
};
export default DietaSingle;
