import { createSlice } from "@reduxjs/toolkit";

export const filterSlicer = createSlice({
  name: "filter",
  initialState: {
    byFastDeliver: false,
    addToCard: false,
    search: [],
    costam: [1, 3, 4],
  },
  reducers: {
    SORT_BY_PRICE: (state, action) => {
      action.sort = action.payload;
    },
    SORT_BY_FAST_DELIVER: (state, action) => {
      action.byFastDeliver = !state.byFastDeliver;
    },
    SEARCH: (state, action) => {
      state.search = action.payload;
    },
    CLEAR: (state) => {
      state.byFastDeliver = false;
      //   state.search = [];
    },
  },
});

export const { SORT_BY_PRICE, SORT_BY_FAST_DELIVER, SEARCH, CLEAR } =
  filterSlicer.actions;

export default filterSlicer.reducer;
