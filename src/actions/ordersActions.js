//src/actions/ordersActions.js
import api from "../services/api";
import { FETCH_ORDERS_SUCCESS, FETCH_ORDERS_ERROR } from "./types";

export const fetchOrders = () => async (dispatch) => {
  try {
    const response = await api.get("/orders");
    dispatch({ type: FETCH_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ORDERS_ERROR, payload: error.message });
  }
};
