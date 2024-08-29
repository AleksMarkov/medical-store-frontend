//productsActions.js
import api from "../services/api";
import { FETCH_SUPPLIERS_SUCCESS, FETCH_SUPPLIERS_ERROR } from "./types";

export const fetchSuppliers = () => async (dispatch) => {
  try {
    const response = await api.get("/suppliers");
    dispatch({ type: FETCH_SUPPLIERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_SUPPLIERS_ERROR, payload: error.message });
  }
};

export const addSupplier = (supplier) => async (dispatch) => {
  try {
    await api.post("/suppliers", supplier);
    dispatch(fetchSuppliers());
  } catch (error) {
    console.error("Failed to add supplier:", error.message);
  }
};

export const updateSupplier =
  (supplierId, updatedSupplier) => async (dispatch) => {
    try {
      await api.put(`/suppliers/${supplierId}`, updatedSupplier);
      dispatch(fetchSuppliers());
    } catch (error) {
      console.error("Failed to update supplier:", error.message);
    }
  };

export const deleteSupplier = (supplierId) => async (dispatch) => {
  try {
    await api.delete(`/suppliers/${supplierId}`);
    dispatch(fetchSuppliers());
  } catch (error) {
    console.error("Failed to delete supplier:", error.message);
  }
};
