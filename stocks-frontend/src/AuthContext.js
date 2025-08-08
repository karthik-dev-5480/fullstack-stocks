// src/AuthContext.js
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in when app starts
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("https://fullstack-stocks.onrender.com/auth/validate", {
          credentials: "include",
        });
        setIsAuthenticated(res.ok);
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const login = () => setIsAuthenticated(true);

  const logout = async () => {
    try {
      await fetch("https://fullstack-stocks.onrender.com/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("Logout error:", err);
    }
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
