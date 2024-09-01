//src/reducers/dashboardReducer.js
import {
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_ERROR,
} from "../actions/types";

const initialState = {
  data: null,
  error: null,
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      return { ...state, data: action.payload, error: null };
    case FETCH_DASHBOARD_ERROR:
      return { ...state, data: null, error: action.payload };
    default:
      return state;
  }
};
