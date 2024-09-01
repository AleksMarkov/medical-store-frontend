// src/actions/productsActions.js
import api from "../../services/api";
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from "./types";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await api.get("/products");
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    await api.post("/products", product);
    dispatch(fetchProducts());
  } catch (error) {
    console.error("Failed to add product:", error.message);
  }
};

export const updateProduct =
  (productId, updatedProduct) => async (dispatch) => {
    try {
      await api.put(`/products/${productId}`, updatedProduct);
      dispatch(fetchProducts());
    } catch (error) {
      console.error("Failed to update product:", error.message);
    }
  };

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await api.delete(`/products/${productId}`);
    dispatch(fetchProducts());
  } catch (error) {
    console.error("Failed to delete product:", error.message);
  }
};
