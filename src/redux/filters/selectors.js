export const selectFilter = (state) => state.filters.state;

export const selectFilterTypes = (state) => state.filters.types;

export const selectCurrentFilter = (state) => {
  return state.filters.state.byCount
    ? state.filters.types[1]
    : state.filters.types[0];
};
