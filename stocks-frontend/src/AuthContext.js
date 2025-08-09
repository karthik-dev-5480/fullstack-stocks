import { createContext, useState, useEffect, useCallback } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(() => {
    setLoading(true);
    const token = localStorage.getItem("jwtToken"); // adjust key as needed
  
    fetch("http://localhost:8080/auth/validate", {
      credentials: "include", // send cookies if any
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    })
      .then((res) => setIsAuthenticated(res.ok))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setLoading(false));
  }, []);
  
  useEffect(() => {
    checkAuth(); // run once on mount
  }, [checkAuth]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        refreshAuth: checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
