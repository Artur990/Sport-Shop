import React, { createContext, useContext, useReducer, useState } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducer";
import { productReducer } from "./Reducer";
import { foodReducer } from "./Reducer";
import { foods } from "../data/food";

export const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: Math.random(),
    name1: faker.commerce.productName(),
    image: faker.image.image(),
    price: faker.commerce.price(),
    fast: Boolean(Math.round(Math.random())),
    isOpen: false,
    ratings: [Math.floor(Math.random() * (5 - 1)) + 1],
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
    modal: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    byfastDeliver: false,
    addToCard: false,
    search: [],
  });

  const [food, foodDispatche] = useReducer(foodReducer, {
    foods,
    foodCart: [],
  });

  return (
    <Cart.Provider
      value={{
        state,
        dispatch,
        productState,
        productDispatch,
        food,
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
