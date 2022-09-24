import React, { useState } from "react";

import { CartState } from "../../context/Context";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  SEARCH,
  LOW_TO_HIGHT,
  HIGHT_TO_LOW,
  BY_FAST_DELIVERE,
  CLEAR,
  SORT_BY_PRICE,
} from "../../context/const";

import "./Filter.scss";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    productState: { sort, byfastDeliver },
    productDispatch,
  } = CartState();

  const [search, setSearch] = useState("");
  const handlerSearch = (e) => {
    setSearch(e.target.value);
    productDispatch({ type: SEARCH, payload: search.toLowerCase() });
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
            className="filter__input_check"
            type="checkbox"
            name="group1"
            onChange={() =>
              productDispatch({
                type: SORT_BY_PRICE,
                payload: LOW_TO_HIGHT,
              })
            }
            checked={sort === LOW_TO_HIGHT ? true : false}
          />
          <label>Cena malejąco</label>
        </span>
        <span className="filter__sort-up">
          <input
            className="filter__input_check"
            type="checkbox"
            id={"inline-2"}
            onChange={() =>
              productDispatch({
                type: SORT_BY_PRICE,
                payload: HIGHT_TO_LOW,
              })
            }
            checked={sort === HIGHT_TO_LOW ? true : false}
          />
          <label>Cena rosnąco</label>
        </span>

        <span>
          <input
            className="filter__input_check"
            type="checkbox"
            onChange={() =>
              productDispatch({
                type: BY_FAST_DELIVERE,
                payload: byfastDeliver,
              })
            }
            checked={byfastDeliver}
          />
          <label>Szybka dostawa</label>
        </span>

        <span>
          <button
            className="filter__btn-clear"
            onClick={() => productDispatch({ type: CLEAR })}
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
          <div
            className="filter__mobile-isOpen"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="filter__mobile-float">
              <span className="filter__mobile_content">
                <input
                  className="filter__input_check"
                  type="checkbox"
                  name="group1"
                  onChange={() =>
                    productDispatch({
                      type: SORT_BY_PRICE,
                      payload: LOW_TO_HIGHT,
                    })
                  }
                  checked={sort === LOW_TO_HIGHT ? true : false}
                />
                <label>Cena rosnąco</label>
              </span>
              <span className="filter__mobile_content">
                <input
                  className="filter__input_check"
                  type="checkbox"
                  id={"inline-2"}
                  onChange={() =>
                    productDispatch({
                      type: SORT_BY_PRICE,
                      payload: HIGHT_TO_LOW,
                    })
                  }
                  checked={sort === HIGHT_TO_LOW ? true : false}
                />
                <label>Cena malejąco</label>
              </span>
              <span className="filter__mobile_content">
                <input
                  className="filter__input_check"
                  type="checkbox"
                  onChange={() =>
                    productDispatch({
                      type: BY_FAST_DELIVERE,
                      payload: byfastDeliver,
                    })
                  }
                  checked={byfastDeliver}
                />
                <label>Szybka dostawa</label>
              </span>
              <span className="filter__mobile_content">
                <button
                  className="filter__btn-clear"
                  onClick={() => productDispatch({ type: CLEAR })}
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
