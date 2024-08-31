// src/context/AuthContext.js
import React, { createContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction, logoutAction } from "../actions/authActions";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, refreshToken } = useSelector((state) => state.auth);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");
    const storedUser = localStorage.getItem("user");
    if (accessToken && storedRefreshToken && storedUser) {
      dispatch(loginAction(JSON.parse(storedUser), storedRefreshToken));
    }
  }, [dispatch]);

  const login = (accessToken, refreshToken, userDetails) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user", JSON.stringify(userDetails));
    dispatch(loginAction(userDetails, refreshToken));
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    dispatch(logoutAction());
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refreshToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
