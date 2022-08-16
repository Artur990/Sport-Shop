import React from "react";
import { CartState } from "../../../context/Context";
import { GrStatusGood } from "react-icons/gr";
import "./DietSingle.scss";
let iconStyles = {
  color: "red",
  fontSize: "1.5em",
};
const DietaSingle = ({ prod, id, kcal, isOpen }) => {
  const { foodDispatche } = CartState();

  const handleClickAdd = () => {
    foodDispatche({
      type: "ADD_TO_CALCULATOR",
      payload: { prod, id: id, kcal: kcal },
    });
    foodDispatche({
      type: "REMOVE_BUTTON_CALCLATE",
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
