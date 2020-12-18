import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsReducer from "./products/productsReducer";
import { reducer as formReducer } from "redux-form";

const defaultMiddleware = getDefaultMiddleware();

export const store = configureStore({
  reducer: {
    products: productsReducer,
    form: formReducer,
  },
  // middleware: { ...defaultMiddleware, logger },
});
