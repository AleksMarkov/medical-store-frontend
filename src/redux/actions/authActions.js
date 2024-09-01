//src/actions/authActions.js
import { LOGIN, LOGOUT } from "./types";

export const loginAction = (userDetails, refreshToken) => ({
  type: LOGIN,
  payload: { user: userDetails, refreshToken },
});

export const logoutAction = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  return { type: LOGOUT };
};
