// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in by checking the localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Here you would usually verify the token by sending a request to the backend
      setUser({ token }); // For simplicity, we're just setting the user with the token
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    setUser({ token });
    localStorage.setItem("token", token);
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
