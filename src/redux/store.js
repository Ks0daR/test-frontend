import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import productsReducer from "./products/productsReducer";
import { reducer as formReducer } from "redux-form";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
