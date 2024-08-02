import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    types: ["Aplhabetical", "By Count"],
    state: { alphabetical: true, byCount: false },
  },
  reducers: {
    changeFilter(state, { payload }) {
      if (payload === state.types[0]) {
        state.state.alphabetical = true;
        state.state.byCount = false;
      } else if (payload === state.types[1]) {
        state.state.alphabetical = false;
        state.state.byCount = true;
      }
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
