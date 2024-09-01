//customersReducer.js;
import {
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_ERROR,
} from "../actions/types";

const initialState = {
  customers: [],
  error: null,
};

export const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_SUCCESS:
      return { ...state, customers: action.payload, error: null };
    case FETCH_CUSTOMERS_ERROR:
      return { ...state, customers: [], error: action.payload };
    default:
      return state;
  }
};
