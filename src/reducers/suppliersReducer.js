//productsReducer.js
import {
  FETCH_SUPPLIERS_SUCCESS,
  FETCH_SUPPLIERS_ERROR,
} from "../actions/types";

const initialState = {
  suppliers: [],
  error: null,
};

export const suppliersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUPPLIERS_SUCCESS:
      return { ...state, suppliers: action.payload, error: null };
    case FETCH_SUPPLIERS_ERROR:
      return { ...state, suppliers: [], error: action.payload };
    default:
      return state;
  }
};
