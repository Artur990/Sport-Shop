import { foods } from "../data/food";

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
} from "./const";
export const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CARD) {
    return {
      ...state,
      cart: [...state.cart, { ...action.payload, qty: 1 }],
    };
  }

  if (action.type === REMOVE_BUTTON) {
    return {
      ...state,
      products: state.products.map((e) =>
        e.id === action.payload.id
          ? (e.isOpen = action.payload.isOpen)
          : e.isOpen
      ),
      modal: state.modal.map((e) =>
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
    return {
      products: state.products.filter((e) =>
        e.id === action.payload.id
          ? (e.isOpen = action.payload.isOpen)
          : e.isOpen
      ),
      ...state,
      cart: state.cart.filter((c) => c.id !== action.payload1.id),
    };
  }
  if (action.type === ADD_QTY) {
    return {
      ...state,
      cart: state.cart.filter((e) =>
        e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
      ),
    };
  }
  return state;
};

export const productReducer = (state, action) => {
  if (action.type === SORT_BY_PRICE) {
    return { ...state, sort: action.payload };
  }
  if (action.type === BY_FAST_DELIVERE) {
    return { ...state, byfastDeliver: !state.byfastDeliver };
  }
  // if (action.type === "addToCard") {
  //   return { ...state, addToCard: !state.addToCard };
  // }
  if (action.type === SEARCH) {
    return {
      ...state,
      search: action.payload,
    };
  }
  if (action.type === CLEAR) {
    return {
      byfastDeliver: false,
      search: [],
    };
  }

  return state;
};

export const foodReducer = (state, action) => {
  if (action.type === ADD_TO_CALCULATOR) {
    return {
      ...state,
      foodCart: [...state.foodCart, { ...action.payload, qty: 1 }],
    };
  }
  if (action.type === REMOVE_BUTTON_CALCLATE) {
    return {
      foods: foods.map((f) =>
        f.foods.filter((e) =>
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
      foods: foods.map((f) =>
        f.foods.filter((e) =>
          e.id === action.payload.id
            ? (e.isOpen = action.payload.isOpen)
            : e.isOpen
        )
      ),
      ...state,
      foodCart: state.foodCart.filter((c) => c.id !== action.payload.id),
    };
  }
  if (action.type === ADD_QTY_CALCULATOR) {
    console.log(action.payload);
    return {
      ...state,
      foodCart: state.foodCart.filter((e) =>
        e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
      ),
    };
  }
  return state;
};
