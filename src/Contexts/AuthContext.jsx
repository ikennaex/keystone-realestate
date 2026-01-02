import { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // 1. HYDRATE STATE
  const [accessToken, setAccessTokenState] = useState(() =>
    localStorage.getItem("accessToken")
  );

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!accessToken;

  // 2. PERSIST ACCESS TOKEN
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [accessToken]);

  // 3. PERSIST USER
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // 4. MEMOIZED AXIOS INSTANCE
  const api = useMemo(() => {
    const instance = axios.create({
      baseURL: baseUrl,
    });

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

  // 5. REVALIDATE USER ON APP LOAD
  useEffect(() => {
    if (!accessToken) {
      setUser(null);
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await api.get("/api/user-profile");
        console.log(res)
        setUser(res.data.data);
      } catch (err) {
        console.error("User validation failed", err);
        // optional hard logout:
        // setAccessTokenState(null);
        // setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [accessToken, api]);

  // 6. SAFE TOKEN SETTER
  const setAccessToken = (token) => {
    setAccessTokenState(token);
    if (!token) {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        user,
        setUser,
        isAuthenticated,
        api,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
