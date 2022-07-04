export const cartReducer = (state, action) => {
  console.log(state);
  if (action.type === "ADD_TO_CARD") {
    return {
      ...state,
      cart: [...state.cart, { ...action.payload, qty: 1 }],
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
  if (action.type === "clear") {
    return {
      byfastDeliver: false,
    };
  }

  return state;
};

export const foodReducer = (state, action) => {
  if (action.type === "ADD_TO_CARD") {
    return {
      ...state,
      foodAdd: [...state.foodAdd, { ...action.payload, qty: 1 }],
    };
  }
  if (action.type === "REMOVE_FROM_CARD") {
    return {
      ...state,
      foodAdd: state.foodAdd.filter((c) => c.id !== action.payload.id),
    };
  }
  if (action.type === "ADD_QTY") {
    return {
      ...state,

      foodAdd: state.foodAdd.filter((e) =>
        e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
      ),
    };
  }
  return state;
};
