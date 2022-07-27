import { configureStore } from "@reduxjs/toolkit";
import quizReduce from "../features/shopSlice";
import filterSlicerReducer from "../features/shopSlice";
export default configureStore({
  reducer: {
    filter: filterSlicerReducer,
    shop: quizReduce,
  },
});
