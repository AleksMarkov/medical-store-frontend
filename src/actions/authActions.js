//src/actions/authActions.js
import { LOGOUT } from "./types";

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};
