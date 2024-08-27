// rc/reducers/authReducer.js
import { LOGOUT } from "../actions/types";

const initialState = {
  user: null,
  isAuthenticated: false,
  // другие свойства состояния
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    // другие случаи
    default:
      return state;
  }
};

export default authReducer;
