import { createAction } from "@reduxjs/toolkit";

const fetchProductsRequest = createAction("products/fetchProductsRequest");
const fetchProductsSuccess = createAction("products/fetchProductsSuccess");
const fetchProductsError = createAction("products/fetchProductsError");

const addProductRequest = createAction("products/addProductRequest");
const addProductSuccess = createAction("products/addProductSuccess");
const addProductError = createAction("products/addProductError");

const updateProductRequest = createAction("products/updateProductRequest");
const updateProductSuccess = createAction("products/updateProductSuccess");
const updateProductError = createAction("products/updateProductError");

const deleteProductRequest = createAction("products/deleteProductRequest");
const deleteProductSuccess = createAction("products/deleteProductSuccess");
const deleteProductError = createAction("products/deleteProductError");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
  addProductRequest,
  addProductSuccess,
  addProductError,
  updateProductRequest,
  updateProductSuccess,
  updateProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
};
