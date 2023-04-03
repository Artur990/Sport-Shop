import { TProductsType } from "../types/types";

type TActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum TypeCart {
  addToCart = "addToCart",
  removeButton = "removeButton",
  addToModal = "addToModal",
  removeFromModal = "removeFromModal",
  RemoveFromCard = "RemoveFromCard",
  addQty = "addQty",
}

export type TCartPayload = {
  [TypeCart.addToCart]: {
    product: any;
  };

  [TypeCart.removeButton]: {
    id: number;
    isOpen: boolean;
  };
  [TypeCart.addToModal]: { modal: TProductsType };
  [TypeCart.removeFromModal]: undefined;
  [TypeCart.RemoveFromCard]: {
    id: string;
    isOpen: boolean;
  };
  [TypeCart.addQty]: {
    id: number;
    qty: number;
  };
};

export type TCartActions =
  TActionMap<TCartPayload>[keyof TActionMap<TCartPayload>];

export const cartReducer = (state: any, action: TCartActions) => {
  switch (action.type) {
    case TypeCart.addToCart:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case TypeCart.removeButton:
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

    case TypeCart.addToModal:
      return {
        ...state,
        modal: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case TypeCart.removeFromModal:
      return {
        ...state,
        modal: [],
      };

    case TypeCart.RemoveFromCard:
      return {
        ...state,
        products: state.products.map((e: any) =>
          e.id === action.payload.id
            ? (e.isOpen = action.payload.isOpen)
            : e.isOpen
        ),
        ...state,
        cart: state.cart.filter((c: any) => c.id !== action.payload.id),
      };

    case TypeCart.addQty:
      return {
        ...state,
        cart: state.cart.filter((e: any) =>
          e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
        ),
      };
    default:
      return state;
  }
};

export enum Type {
  sortByprice = "sortByprice",
  lowToHight = "lowToHight",
  hightToLow = "hightToLow",
  byFastDeliver = "byFastDeliver",
  search = "search",
  clear = "clear",
}
export type TProductPayload = {
  [Type.sortByprice]: {
    sort: "lowToHight" | "hightToLow" | string;
  };
  [Type.byFastDeliver]: { byFastDeliver: boolean };
  [Type.search]: {
    search: string;
  };
  [Type.clear]: undefined;
};

export type TProductActions =
  TActionMap<TProductPayload>[keyof TActionMap<TProductPayload>];

export const productReducer = (state: any, action: TProductActions) => {
  switch (action.type) {
    case Type.sortByprice:
      return { ...state, sort: action.payload.sort };

    case Type.search:
      return {
        ...state,
        search: action.payload.search,
      };

    case Type.clear:
      return {
        byfastDeliver: !state.byfastDeliver,
        search: "",
      };

    case Type.byFastDeliver:
      return { ...state, byfastDeliver: true };
    default:
      return state;
  }
};

export enum TypeFood {
  addToCalculator = "addToCalculator",
  removeButtonCalculator = "removeButtonCalculator",
  removeFromCalculator = "removeFromCalculator",
  addQtyCalculator = "addQtyCalculator",
}

export type TFoodPayload = {
  [TypeFood.addToCalculator]: {
    foodCart: any[];
  };
  [TypeFood.removeButtonCalculator]: {
    id: number;
    isOpen: boolean;
  };
  [TypeFood.removeFromCalculator]: { id: number; isOpen: boolean };
  [TypeFood.addQtyCalculator]: { id: number; qty: number };
};

export type TFootActions =
  TActionMap<TFoodPayload>[keyof TActionMap<TFoodPayload>];

export const foodReducer = (state: any, action: TFootActions) => {
  switch (action.type) {
    case TypeFood.addToCalculator:
      return {
        ...state,
        foodCart: [...state.foodCart, { ...action.payload, qty: 1 }],
      };

    case TypeFood.removeButtonCalculator:
      return {
        ...state,
        foods: state.foods.map((f: any) =>
          f.foods.filter((e: any) =>
            e.id === action.payload.id
              ? (e.isOpen = action.payload.isOpen)
              : e.isOpen
          )
        ),
        ...state,
      };

    case TypeFood.removeFromCalculator:
      return {
        ...state,
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

    case TypeFood.addQtyCalculator:
      return {
        ...state,
        foodCart: state.foodCart.filter((e: any) =>
          e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
        ),
        ...state,
      };
  }
  return state;
};
