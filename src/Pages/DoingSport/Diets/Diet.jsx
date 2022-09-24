import React, { useEffect, useState } from "react";

import { CartState } from "../../../context/Context";
import DietSingle from "./DietSingle";
import DietAdd from "./DietAdd";

import "./Diet.scss";

const Diet = () => {
  const { food } = CartState();

  const [fitresCategories, setFiltersCategories] = useState(
    food.foods[0].foods
  );

  const [total, setTotal] = useState();
  console.log(food.foodCart);
  useEffect(() => {
    const totalCount = food.foodCart.reduce(
      (acc, cur) => acc + Number(cur.kcal) * Number(cur.qty),
      0
    );
    setTotal(totalCount);
  }, [food.foodCart]);

  const handleFoodType = (type) => {
    setFiltersCategories(type);
  };

  return (
    <>
      <h1 className="diet-main__title">
        Sprawdź ile kalorii zjadasz podczas dnia , dodają produkty w
        kalkulatorze
      </h1>
      <div className="diet-main">
        <div className="diet-main__first-column">
          <div className="diet-main__btn-sort">
            {food.foods.map((f) => (
              <button
                className="diet-main__btn-of-products"
                key={f.id}
                onClick={() => handleFoodType(f.foods.map((f) => f))}
              >
                {f.type}
              </button>
            ))}
          </div>
          <div>
            {fitresCategories.map((prod) => (
              <DietSingle
                key={prod.id}
                id={prod.id}
                prod={prod.name}
                kcal={prod.kcal}
                isOpen={prod.isOpen}
              >
                {prod.name}
              </DietSingle>
            ))}
          </div>
        </div>
        <div className="diet-main__total-column-mobile">
          <h2>SUMA KALORI {total}</h2>
          <h2>ILOŚĆ PRODUKTÓW {food.foodCart.length}</h2>
        </div>
        <div className="diet-main__calculate-column">
          {food.foodCart.map((prod) => (
            <DietAdd prod={prod.prod} key={prod.id} id={prod.id} />
          ))}
        </div>

        <div className="diet-main__total-column">
          <h2>SUMA KALORI {total}</h2>
          <h2>ILOŚĆ PRODUKTÓW {food.foodCart.length}</h2>
        </div>
      </div>
    </>
  );
};

export default Diet;
