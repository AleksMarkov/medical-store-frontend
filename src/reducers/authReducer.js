// rc/reducers/authReducer.js
import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  user: null,
  refreshToken: null,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        refreshToken: action.payload.refreshToken,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        refreshToken: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
