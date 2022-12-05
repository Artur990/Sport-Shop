import React, { createContext, useContext, useReducer } from "react";

import { products } from "../data/products";
import { cartReducer, productReducer, foodReducer, Type } from "./Reducer";
import { ACTIONTYPE, ACTIONTYPEFOOD, ProductPayload } from "./Reducer";
import { foods } from "../data/food";
import { test } from "./Reducer";
type Props = {
  children: JSX.Element;
};
const initialState: test = {
  byfastDeliver: false,
  // addToCard: false,
  search: "",
  sort: "",
};
export type ProductsType = typeof products;
export type FoodsType = typeof foods;
export interface InterContex {
  state: {
    products: ProductsType[];
    cart: Array<ProductsType[]>;
    modal: Array<ProductsType[]>;
  };
  productState: test;
  food: {
    foods: {
      type: string;
      foods: {
        id: number;
        isOpen: boolean;
        name: string;
        kcal: number;
      }[];
    };
    foodCart: any[];
  };
  dispatch: React.Dispatch<ACTIONTYPE>;
  productDispatch: React.Dispatch<any>;
  foodDispatche: React.Dispatch<ACTIONTYPEFOOD>;
}

export const Contextt = createContext<InterContex>({} as InterContex);
// const mainReducer = (
//   { byfastDeliver, search, sort }: test,
//   action: ProductActions
// ) => ({
//   products: productReducer({ byfastDeliver, search, sort }, action),
// });

const Context = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products,
    cart: [],
    modal: [],
  });
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );
  const [food, foodDispatche] = useReducer(foodReducer, {
    foods,
    foodCart: [],
  });
  const valuee = {
    state,
    dispatch,
    productState,
    productDispatch,
    food,
    foodDispatche,
  };
  return <Contextt.Provider value={valuee}>{children}</Contextt.Provider>;
};
export default Context;
export const CartState = () => {
  return useContext(Contextt);
};
