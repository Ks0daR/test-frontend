import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import productsActions from "./productsActions";

const productsReducer = createReducer([], {
  [productsActions.fetchProductsSuccess]: (state, { payload }) => payload,
  [productsActions.addProductSuccess]: (state, { payload }) => payload,
  [productsActions.updateProductSuccess]: (state, { payload }) => payload,
  [productsActions.deleteProductSuccess]: (state, { payload }) => payload,
});

export default combineReducers({ productsReducer});
