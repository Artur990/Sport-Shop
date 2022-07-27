import React from "react";
import "./Filter.scss";
import { CartState } from "../../context/Context";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Button from "../button/button";
import {
  SORT_BY_PRICE,
  SORT_BY_FAST_DELIVER,
  SEARCH,
  CLEAR,
} from "../../features/filterSlice";
import { useSelector, useDispatch } from "react-redux";
const Filter = () => {
  const dispatch = useDispatch();
  const {
    productState: { sort, byfastDeliver },
    productDispatch,
  } = CartState();

  const [search, setSearch] = useState("");
  const handlerSearch = (e) => {
    setSearch(e.target.value);
    dispatch(SEARCH({ payload: search }));
    // productDispatch({ type: "SEARCH", payload: search.toLowerCase() });
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
          <Button class="third-button" onClick={() => dispatch(CLEAR())}>
            Clear Filters
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Filter;
