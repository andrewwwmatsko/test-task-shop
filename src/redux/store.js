import { configureStore } from "@reduxjs/toolkit";

import conctactsReducer from "./products/slice";
import filtersSlice from "./filters/slice";

export const store = configureStore({
  reducer: {
    products: conctactsReducer,
    filters: filtersSlice,
  },
});
