import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import productsActions from "./productsActions";

const productsReducer = createReducer([], {
  [productsActions.fetchProductsSuccess]: (state, { payload }) => payload,
  [productsActions.addProductSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [productsActions.updateProductSuccess]: (state, { payload }) =>
    state.map((elem) => {
      if (elem.id === payload.id) {
        return payload;
      }
      return elem;
    }),
  [productsActions.deleteProductSuccess]: (state, { payload }) =>
    state.filter((elem) => elem.id !== payload),
});

export default combineReducers({ productsReducer });
