import React from "react";
import { GrStatusGood } from "react-icons/gr";
import { TypeFood } from "../../../context/Reducer";
import { CartState } from "../../../context/Context";

import "./DietSingle.scss";

const iconStyles = {
  color: "red",
  fontSize: "1.5em",
};
const DietaSingle = ({ prod, id, kcal, isOpen }) => {
  const { foodDispatche } = CartState();

  const handleClickAdd = () => {
    foodDispatche({
      type: TypeFood.addToCalculator,
      payload: { prod, id: id, kcal: kcal },
    });
    foodDispatche({
      type: TypeFood.removeButtonCalculator,
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
