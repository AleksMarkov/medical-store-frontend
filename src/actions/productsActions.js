// src/actions/productsActions.js
import api from "../services/api";
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from "./types";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await api.get("/products");
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
  }
};
