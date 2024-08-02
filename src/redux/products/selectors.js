import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectProducts = (state) => state.products.items;

export const selectCurrentProduct = (state) => state.products.currentProduct;

export const selectLoading = (state) => state.products.isLoading;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectProducts],
  (filters, products) => {
    return filters.byCount
      ? products.toSorted((a, b) => a.count - b.count)
      : products.toSorted((a, b) => a.name.localeCompare(b.name));
  }
);
