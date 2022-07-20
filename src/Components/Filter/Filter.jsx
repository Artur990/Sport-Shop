import React from "react";
import "./Filter.scss";
import { CartState } from "../../context/Context";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Filter = () => {
  const {
    productState: { sort, byfastDeliver },
    productDispatch,
  } = CartState();

  const [search, setSearch] = useState("");
  const handlerSearch = (e) => {
    setSearch(e.target.value);
    productDispatch({ type: "SEARCH", payload: e.target.value });
  };

  return (
    <div className="filter">
      <div className="filter__input_search ">
        <input
          className="filter__input_search__filter"
          type="text"
          placeholder="search..."
          value={search}
          onChange={handlerSearch}
        />
        <button className="filter__btn-search">
          <BiSearchAlt2 />{" "}
        </button>
      </div>
      <div className="filter__sort">
        <span className="filter__sort-up">
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
        <span className="filter__sort-up">
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
            className="filter__button-clear"
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
};

export default Filter;
