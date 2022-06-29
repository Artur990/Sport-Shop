import React from "react";
import { CartState } from "../../context/Context";
import AiFillCar from "react-icons/ai";
import TbSortAscendingNumbers from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
// import BsSortNumericUpAl from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import "./Filter.css";

function Filter() {
  const {
    productState: { sort, Asceding, byfastDeliver },
    productDispatch,
  } = CartState();

  console.log(sort, Asceding, byfastDeliver);
  return (
    <div className="filter-main">
      <spam className="sort-up">
        <input
          type="radio"
          name="group1"
          onChange={() =>
            productDispatch({
              type: "sort_by_Pric",
              payload: "lowToHight",
            })
          }
          checked={sort === "lowToHight" ? true : false}
        ></input>
        <label> Ascending</label>
      </spam>
      <spam className="sort-up">
        <input
          name="group2"
          type="radio"
          id={"inline-2"}
          onChange={() =>
            productDispatch({
              type: "sort_by_Pric",
              payload: "HightToLow",
            })
          }
          checked={sort === "HightToLow" ? true : false}
        ></input>
        <label>Descending</label>
      </spam>

      <spam>
        <input
          type="checkbox"
          name="group3"
          onChange={() =>
            productDispatch({
              type: "byfastDelivere",
            })
          }
          checked={byfastDeliver}
        ></input>
        <label>Fast Deliver</label>
      </spam>

      <span>
        <button
          className="button-clear"
          onChange={() =>
            productDispatch({
              type: "clear",
            })
          }
        >
          Clear Filters
        </button>
      </span>
    </div>
  );
}

export default Filter;
// onChange={setChange(false)}
