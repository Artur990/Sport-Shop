import React, { createContext, useContext, useReducer, useState } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducer";
import { productReducer } from "./Reducer";
import { foodReducer } from "./Reducer";
import { dinner } from "../data/food";
import { snacks } from "../data/food";
import { breakFast } from "../data/food";
import { lunch } from "../data/food";
// import { breakfast } from "../data/food";
// import { tr } from "@guru-js/faker/lib/locales";
export const Cart = createContext();

function Context({ children }) {
  const products = [...Array(20)].map(() => ({
    id: Math.random(),
    name1: faker.commerce.productName(),
    image: faker.image.image(),
    price: faker.commerce.price(),
    // inStack: Math.random.arrayElement([0, 3, 5, 6, 7]),
    fast: Boolean(Math.round(Math.random())),
    ratings: [Math.floor(Math.random() * (5 - 1)) + 1],
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    byfastDeliver: false,
  });

  const [change, setChange] = useState(true);

  const [food, foodDispatche] = useReducer(foodReducer, {
    breakFast: breakFast,
    lunch: lunch,
    dinner: dinner,
    snacks: snacks,
    foodAdd: [],
  });

  return (
    <Cart.Provider
      value={{
        state,
        dispatch,
        change,
        setChange,
        productState,
        productDispatch,
        food,
        lunch,
        foodDispatche,
      }}
    >
      {children}
    </Cart.Provider>
  );
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
};

// const obj = [221, 3221, 2121, 121, 2221, 11, 222, 41];
// const obj1 = obj.sort((a, b) => a - b);
// console.log(obj1);
