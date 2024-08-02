import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    types: ["Aplhabetical", "By Count"],
    alphabetical: true,
    byCount: false,
  },
  reducers: {
    changeFilter(state) {
      state.alphabetical = false;
      state.byCount = true;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
