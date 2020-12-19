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

const addProduct = (product) => (dispatch) => {
  dispatch(productsActions.addProductRequest());

  aixos
    .post(baseUrl, product)
    .then(({ data }) => dispatch(productsActions.addProductSuccess(data)))
    .catch(({ message }) => dispatch(productsActions.addProductError(message)));
};
const updateProduct = (updatedData) => (dispatch) => {
  dispatch(productsActions.updateProductRequest());

  aixos
    .put(baseUrl, updatedData)
    .then(({ data }) => dispatch(productsActions.updateProductSuccess(data)))
    .catch(({ message }) =>
      dispatch(productsActions.updateProductError(message))
    );
};
const deleteProduct = (id) => (dispatch) => {
  dispatch(productsActions.deleteProductRequest());

  aixos
    .delete(baseUrl + id)
    .then(() => dispatch(productsActions.deleteProductSuccess(id)))
    .catch(({ message }) =>
      dispatch(productsActions.deleteProductError(message))
    );
};

export default { fetchProducts, addProduct, updateProduct, deleteProduct };
