import React from "react";
import { CartState } from "../../context/Context";
import "./Filter.css";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

function Filter() {
  const {
    productState: { sort, Asceding, byfastDeliver },
    productDispatch,
  } = CartState();

  const [search, setSearch] = useState("");
  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    productDispatch({ type: "SEARCH", payload: search });
    setSearch("");
  };
  return (
    <div className="filter-main">
      <form onSubmit={handlerSubmit} className="form">
        <input
          className="input-search"
          type="text"
          placeholder="search..."
          value={search}
          onChange={handlerSearch}
        />
        {/* <button className="btn-search">
          <BiSearchAlt2 />{" "}
        </button> */}
      </form>
      <div className="main-down">
        <span className="sort-up">
          <input
            type="checkbox"
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
        </span>
        <span className="sort-up">
          <input
            type="checkbox"
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
        </span>

        <span>
          <input
            type="checkbox"
            onChange={() =>
              productDispatch({
                type: "byfastDelivere",
              })
            }
            checked={byfastDeliver}
          ></input>
          <label>Fast Deliver</label>
        </span>

        <span>
          <button
            className="button-clear"
            onClick={() =>
              productDispatch({
                type: "clear",
              })
            }
          >
            Clear Filters
          </button>
        </span>
      </div>
    </div>
  );
}

export default Filter;
