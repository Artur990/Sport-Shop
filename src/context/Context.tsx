import { createContext, useContext, useReducer } from "react";

import { products } from "../data/products";
import { cartReducer, productReducer, foodReducer } from "./Reducer";
import { foods } from "../data/food";
import { TInterContex, TPropsContext } from "../types/types";

export const Contextt = createContext<TInterContex>({} as TInterContex);

const Context = ({ children }: TPropsContext) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products,
    cart: [],
    modal: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    byfastDeliver: false,
    search: "",
    sort: "",
  });
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
