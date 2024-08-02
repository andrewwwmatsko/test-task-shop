import { configureStore } from "@reduxjs/toolkit";

import conctactsReducer from "./products/slice";

export const store = configureStore({
  reducer: {
    products: conctactsReducer,
  },
});
