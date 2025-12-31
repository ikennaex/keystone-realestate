import { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    () => localStorage.getItem("accessToken")
  );
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user"))
  );

  const isAuthenticated = !!accessToken;

  // Persist accessToken
  useEffect(() => {
    if (accessToken) localStorage.setItem("accessToken", accessToken);
    else localStorage.removeItem("accessToken");
  }, [accessToken]);

  // Persist user
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  // Create Axios instance with memoization
  const api = useMemo(() => {
    const instance = axios.create({
      baseURL: baseUrl, 
    });

    // Attach access token automatically
    instance.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return instance;
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        user,
        setUser,
        isAuthenticated,
        api, 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use context
export const useAuth = () => useContext(AuthContext);
