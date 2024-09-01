//customersActions.js
import api from "../../services/api";
import { FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_ERROR } from "./types";

export const fetchCustomers = () => async (dispatch) => {
  try {
    const response = await api.get("/customers");
    dispatch({ type: FETCH_CUSTOMERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_CUSTOMERS_ERROR, payload: error.message });
  }
};
