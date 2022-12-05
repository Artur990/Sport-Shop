// import { foods } from "../data/food";

import {
  ADD_TO_CARD,
  REMOVE_BUTTON,
  ADD_TO_MODAL,
  REMOVE_FROM_MODAL,
  REMOVE_FROM_CARD,
  ADD_QTY,
  SORT_BY_PRICE,
  BY_FAST_DELIVERE,
  SEARCH,
  CLEAR,
  ADD_TO_CALCULATOR,
  REMOVE_BUTTON_CALCLATE,
  REMOVE_FROM_CALCULATOR,
  ADD_QTY_CALCULATOR,
  LOW_TO_HIGHT,
  HIGHT_TO_LOW,
} from "./const";
import { ProductsType, FoodsType } from "./Context";

export type ACTIONTYPE =
  | { type: "ADD_TO_CARD"; payload: ProductsType }
  | {
      type: "REMOVE_BUTTON";
      payload: {
        id: number;
        isOpen: boolean;
      };
    }
  | { type: "ADD_TO_MODAL"; payload: ProductsType }
  | { type: "REMOVE_FROM_MODAL" }
  | {
      type: "REMOVE_FROM_CARD";
      payload1: {
        id: number;
      };
      payload: {
        id: number;
        isOpen: boolean;
      };
    }
  | {
      type: "ADD_QTY";
      payload: {
        id: number;
        qty: number;
      };
    };
export const cartReducer = (state: any, action: ACTIONTYPE) => {
  if (action.type === ADD_TO_CARD) {
    return {
      ...state,
      cart: [...state.cart, { ...action.payload, qty: 1 }],
    };
  }

  if (action.type === REMOVE_BUTTON) {
    return {
      ...state,
      products: state.products.map((e: any) =>
        e.id === action.payload.id
          ? (e.isOpen = action.payload.isOpen)
          : e.isOpen
      ),
      modal: state.modal.map((e: any) =>
        e.id === action.payload.id
          ? (e.isOpen = action.payload.isOpen)
          : e.isOpen
      ),
      ...state,
    };
  }

  if (action.type === ADD_TO_MODAL) {
    return {
      ...state,
      modal: [...state.cart, { ...action.payload, qty: 1 }],
    };
  }

  if (action.type === REMOVE_FROM_MODAL) {
    return {
      ...state,
      modal: [],
    };
  }

  if (action.type === REMOVE_FROM_CARD) {
    console.log(action.payload1.id);
    return {
      products: state.products.map((e: any) => {
        if (e.id === action.payload.id) {
          return (e.isOpen = action.payload.isOpen);
        }
        return e;
      }),
      // e.id === action.payload.id
      //   ? (e.isOpen = action.payload.isOpen)
      //   : e.isOpen
      // ),
      ...state,
      cart: state.cart.filter((c: any) => c.id !== action.payload1.id),
    };
  }
  if (action.type === ADD_QTY) {
    return {
      ...state,
      cart: state.cart.filter((e: any) =>
        e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
      ),
    };
  }
  return state;
};

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
export enum Type {
  sortByprice = "sortByprice",
  lowToHight = "lowToHight",
  hightToLow = "hightToLow",
  byFastDeliver = "byFastDeliver",
  search = "search",
  clear = "clear",
}
export type ProductPayload = {
  [Type.sortByprice]: {
    sort: "lowToHight" | "hightToLow" | string;
  };
  [Type.byFastDeliver]: undefined;
  [Type.search]: {
    search: string;
  };
  [Type.clear]: undefined;
};

export interface test {
  byfastDeliver: boolean;
  search: string;
  sort: string;
}

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (state: any, action: ProductActions) => {
  switch (action.type) {
    case Type.sortByprice:
      return { ...state, sort: action.payload.sort as string };
    case Type.search:
      return {
        ...state,
        search: action.payload.search as string,
      };
    case Type.clear:
      return {
        byfastDeliver: false,
        search: "",
      };
    case Type.byFastDeliver:
      return { ...state, byfastDeliver: !state.byfastDeliver as boolean };
    default:
      return state;
  }
};

export type ACTIONTYPEFOOD =
  | { type: "ADD_TO_CALCULATOR"; payload: any }
  | {
      type: "REMOVE_BUTTON_CALCLATE";
      payload: {
        id: number;
        isOpen: boolean;
      };
    }
  | {
      type: "REMOVE_FROM_CALCULATOR";
      payload: {
        id: number;
        isOpen: boolean;
      };
    }
  | {
      type: "ADD_QTY_CALCULATOR";
      payload: {
        id: number;
        qty: boolean;
      };
    };

export const foodReducer = (state: any, action: ACTIONTYPEFOOD) => {
  if (action.type === ADD_TO_CALCULATOR) {
    return {
      ...state,
      foodCart: [...state.foodCart, { ...action.payload, qty: 1 }],
    };
  }
  if (action.type === REMOVE_BUTTON_CALCLATE) {
    return {
      foods: state.foods.map((f: any) =>
        f.foods.filter((e: any) =>
          e.id === action.payload.id
            ? (e.isOpen = action.payload.isOpen)
            : e.isOpen
        )
      ),
      ...state,
    };
  }

  if (action.type === REMOVE_FROM_CALCULATOR) {
    return {
      foods: state.foods.map((f: any) =>
        f.foods.filter((e: any) =>
          e.id === action.payload.id
            ? (e.isOpen = action.payload.isOpen)
            : e.isOpen
        )
      ),
      ...state,
      foodCart: state.foodCart.filter((c: any) => c.id !== action.payload.id),
    };
  }
  if (action.type === ADD_QTY_CALCULATOR) {
    return {
      ...state,
      foodCart: state.foodCart.filter((e: any) =>
        e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
      ),
    };
  }
  return state;
};
