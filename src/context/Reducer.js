const klucze = {
  ADD: "ADDTOCARD",
};

export const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CARD") {
    return {
      ...state,
      cart: [...state.cart, { ...action.payload, qty: 1 }],
    };
  }

  if (action.type === "ADD_TO_MODAL") {
    return {
      ...state,
      modal: [...state.cart, { ...action.payload, qty: 1 }],
    };
  }
  if (action.type === "REMOVE_FROM_MODAL") {
    return {
      ...state,
      modal: state.cart.filter((c) => c.id !== action.payload.id),
    };
  }

  if (action.type === "REMOVE_FROM_CARD") {
    return {
      ...state,
      cart: state.cart.filter((c) => c.id !== action.payload.id),
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
  if (action.type === "ADD_TO_CARD") {
    return {
      ...state,
      foodCart: [...state.foodCart, { ...action.payload, qty: 1 }],
    };
  }

  if (action.type === "REMOVE_FROM_CARD") {
    return {
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
