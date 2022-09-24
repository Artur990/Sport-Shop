import React from "react";
import { GrStatusGood } from "react-icons/gr";

import { CartState } from "../../../context/Context";
import {} from "../../../context/Context";
import {
  ADD_TO_CALCULATOR,
  REMOVE_BUTTON_CALCLATE,
} from "../../../context/const";

import "./DietSingle.scss";

const iconStyles = {
  color: "red",
  fontSize: "1.5em",
};
const DietaSingle = ({ prod, id, kcal, isOpen }) => {
  const { foodDispatche } = CartState();

  const handleClickAdd = () => {
    foodDispatche({
      type: ADD_TO_CALCULATOR,
      payload: { prod, id: id, kcal: kcal },
    });
    foodDispatche({
      type: REMOVE_BUTTON_CALCLATE,
      payload: { id: id, isOpen: true },
    });
  };

  return (
    <div className="dieta-single">
      <h3 className="dieta-single__title" style={{ color: "black" }}>
        {prod}
      </h3>
      {isOpen ? (
        <div>
          <GrStatusGood style={iconStyles} />
        </div>
      ) : (
        <button
          className="dieta-single__button"
          onClick={() => handleClickAdd()}
        >
          Doodaj
        </button>
      )}
    </div>
  );
};
export default DietaSingle;
