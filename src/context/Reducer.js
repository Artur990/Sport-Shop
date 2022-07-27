import { foods } from "../data/food";

// const klucze = {
//   ADD: "ADDTOCARD",
// };

export const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CARD") {
    return {
      ...state,
      cart: [...state.cart, { ...action.payload, qty: 1 }],
    };
  }

  // -----  VVVVVV

  if (action.type === "REMOVE_BUTTON") {
    return {
      ...state,
      products: state.products.filter((e) =>
        e.id === action.payload.id
          ? (e.isOpen = action.payload.isOpen)
          : e.isOpen
      ),
      ...state,
    };
  }
  // -------------------------YYY

  if (action.type === "ADD_TO_MODAL") {
    return {
      ...state,
      modal: [...state.cart, { ...action.payload, qty: 1 }],
    };
  }

  if (action.type === "REMOVE_FROM_MODAL") {
    return {
      ...state,
      modal: [],
    };
  }

  if (action.type === "REMOVE_FROM_CARD") {
    return {
      ...state,
      products: state.products.filter((e) =>
        e.id === action.payload.id
          ? (e.isOpen = action.payload.isOpen)
          : e.isOpen
      ),
      ...state,
      cart: state.cart.filter((c) => c.id !== action.payload1.id),
    };
  }
  if (action.type === "ADD_QTY") {
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
  if (action.type === "sort_by_Pric") {
    return { ...state, sort: action.payload };
  }
  if (action.type === "byfastDelivere") {
    return { ...state, byfastDeliver: !state.byfastDeliver };
  }
  if (action.type === "addToCard") {
    return { ...state, addToCard: !state.addToCard };
  }
  if (action.type === "SEARCH") {
    return {
      ...state,
      search: action.payload,
    };
  }
  if (action.type === "clear") {
    return {
      byfastDeliver: false,
      search: [],
    };
  }

  return state;
};

export const foodReducer = (state, action) => {
  if (action.type === "ADD_TO_CALCULATOR") {
    return {
      ...state,
      foodCart: [...state.foodCart, { ...action.payload, qty: 1 }],
    };
  }
  if (action.type === "REMOVE_BUTTON_CALCLATE") {
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

  if (action.type === "REMOVE_FROM_CALCULATOR") {
    return {
      foods: foods.map((f) =>
        f.foods.filter((e) =>
          e.id === action.payload1.id
            ? (e.isOpen = action.payload1.isOpen)
            : e.isOpen
        )
      ),
      ...state,
      foodCart: state.foodCart.filter((c) => c.id !== action.payload.id),
    };
  }
  if (action.type === "ADD_QTY") {
    return {
      ...state,
      foodCart: state.foodCart.filter((e) =>
        e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
      ),
    };
  }
  return state;
};
