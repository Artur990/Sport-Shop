import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

// const export ADD_TO_CARD = 'ADD_TO_CARD'
const products = [...Array(20)].map(() => ({
  id: Math.random(),
  name1: faker.commerce.productName(),
  image: faker.image.image(),
  price: faker.commerce.price(),
  fast: Boolean(Math.round(Math.random())),

  ratings: [Math.floor(Math.random() * (5 - 1)) + 1],
}));

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: products,
    cart: [],
  },
  reducers: {
    ADD_TO_CARD: (state, action) => {
      state.cart = [...state.cart, { ...action.payload, qty: 1 }];
    },
    REMOVE_FROM_CARD: (state, action) => {
      state.cart = state.cart.filter((c) => c.id !== action.payload.id);
    },
    ADD_QTY: (state, action) => {
      state.cart = state.cart.filter((e) =>
        e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
      );
    },
    REMOVE_BUTTON: (state, action) => {
      const oo = action.payload.isOpen;
      state.products = state.products.filter((e) =>
        e.id === action.payload.id ? (e.isOpen = oo) : e.isOpen
      );
    },
  },
});

export const { ADD_TO_CARD, REMOVE_FROM_CARD, ADD_QTY, REMOVE_BUTTON } =
  shopSlice.actions;

export default shopSlice.reducer;
