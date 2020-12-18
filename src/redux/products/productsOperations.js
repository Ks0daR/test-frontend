import aixos from "axios";
import productsActions from "./productsActions";

const baseUrl = "https://test-postgresql-back.herokuapp.com/products/";

const fetchProducts = () => (dispatch) => {
  dispatch(productsActions.fetchProductsRequest());

  aixos
    .get(baseUrl)
    .then(({ data }) => dispatch(productsActions.fetchProductsSuccess(data)))
    .catch(({ message }) =>
      dispatch(productsActions.fetchProductsError(message))
    );
};

const addProduct = () => (dispatch) => {
  dispatch(productsActions.addProductRequest());

  aixos
    .get(baseUrl)
    .then(({ data }) => dispatch(productsActions.addProductSuccess(data)))
    .catch(({ message }) => dispatch(productsActions.addProductError(message)));
};
const updateProduct = () => (dispatch) => {
  dispatch(productsActions.updateProductRequest());

  aixos
    .get(baseUrl)
    .then(({ data }) => dispatch(productsActions.updateProductSuccess(data)))
    .catch(({ message }) =>
      dispatch(productsActions.updateProductError(message))
    );
};
const deleteProduct = () => (dispatch) => {
  dispatch(productsActions.deleteProductRequest());

  aixos
    .get(baseUrl)
    .then(({ data }) => dispatch(productsActions.deleteProductSuccess(data)))
    .catch(({ message }) =>
      dispatch(productsActions.deleteProductError(message))
    );
};

export default { fetchProducts, addProduct, updateProduct, deleteProduct };
