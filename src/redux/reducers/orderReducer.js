//src/reducers/ordersReducer.js
import { FETCH_ORDERS_SUCCESS, FETCH_ORDERS_ERROR } from "../actions/types";

const initialState = {
  orders: [],
  error: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return { ...state, orders: action.payload, error: null };
    case FETCH_ORDERS_ERROR:
      return { ...state, orders: [], error: action.payload };
    default:
      return state;
  }
};
