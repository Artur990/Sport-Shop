import React, { useState } from "react";
import "./Filter.scss";
import { CartState } from "../../context/Context";
import { BiSearchAlt2 } from "react-icons/bi";
import Button from "../button/button";
const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    productState: { sort, byfastDeliver },
    productDispatch,
  } = CartState();

  const [search, setSearch] = useState("");
  const handlerSearch = (e) => {
    setSearch(e.target.value);
    productDispatch({ type: "SEARCH", payload: search.toLowerCase() });
  };

  return (
    <div className="filter">
      <div className="filter__input_search">
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
            className="input"
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
          <label>Cena malejąco</label>
        </span>
        <span className="filter__sort-up">
          <input
            className="input"
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
          <label>Cena rosnąco</label>
        </span>

        <span>
          <input
            className="input"
            type="checkbox"
            onChange={() =>
              productDispatch({
                type: "byfastDelivere",
                payload: "HightToLow",
              })
            }
            checked={byfastDeliver}
          ></input>

          <label>Szczybka dostawa</label>
        </span>

        <span>
          <button
            className="filter__btn-clear"
            onClick={() => productDispatch({ type: "clear" })}
          >
            Czyść filtry
          </button>
        </span>
      </div>
      <div className="filter__mobile" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter__mobile-open" onClick={() => setIsOpen(!isOpen)}>
          Otwórz filter
        </div>
        {isOpen && (
          <div className="pierwszy" onClick={() => setIsOpen(!isOpen)}>
            <div className="filter__mobile-float">
              <span className="filter__mobile_content">
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
                />
                <label>Cena rosnąco</label>
              </span>
              <span className="filter__mobile_content">
                <input
                  className="input"
                  type="checkbox"
                  id={"inline-2"}
                  onChange={() =>
                    productDispatch({
                      type: "sort_by_Pric",
                      payload: "HightToLow",
                    })
                  }
                  checked={sort === "HightToLow" ? true : false}
                />
                <label>Cena malejąco</label>
              </span>
              <span className="filter__mobile_content">
                <input
                  className="input"
                  type="checkbox"
                  onChange={() =>
                    productDispatch({
                      type: "byfastDelivere",
                      payload: "HightToLow",
                    })
                  }
                  checked={byfastDeliver}
                />
                <label>Szybka dostawa</label>
              </span>
              <span className="filter__mobile_content">
                <button
                  className="filter__btn-clear"
                  onClick={() => productDispatch({ type: "clear" })}
                >
                  Clear Filters
                </button>
              </span>
              <span
                className="filter__mobile_content2 "
                onClick={() => setIsOpen(!isOpen)}
              >
                <div>Zamknij filter</div>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
