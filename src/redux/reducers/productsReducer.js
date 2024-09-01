//src/reducers/productsReducer.js
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from "../actions/types";

const initialState = {
  products: [],
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, error: null };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, products: [], error: action.payload };
    default:
      return state;
  }
};
