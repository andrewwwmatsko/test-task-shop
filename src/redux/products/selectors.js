export const selectProducts = (state) => state.products.items;

export const selectCurrentProduct = (state) => state.products.currentProduct;

export const selectLoading = (state) => state.products.isLoading;
