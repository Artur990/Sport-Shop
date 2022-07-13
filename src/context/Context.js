import React, { createContext, useContext, useReducer, useState } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducer";
import { productReducer } from "./Reducer";
import { foodReducer } from "./Reducer";
import { foods } from "../data/food";
import { AiOutlineConsoleSql } from "react-icons/ai";

export const Cart = createContext();

const Context = ({ children }) => {
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
    modal: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byfastDeliver: false,
    search: [],
  });

  const [change, setChange] = useState(true);
  const [useSearch1, setuseSearch1] = useState("");

  const [food, foodDispatche] = useReducer(foodReducer, {
    foods,
    foodCart: [],
  });
  console.log(state);
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
        useSearch1,
        setuseSearch1,

        foodDispatche,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
