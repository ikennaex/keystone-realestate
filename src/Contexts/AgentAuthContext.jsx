import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { baseUrl } from "../baseUrl";

const AgentAuthContext = createContext(null);

export const AgentAuthProvider = ({ children }) => {
  // 1. HYDRATE STATE SYNCHRONOUSLY
  const [accessToken, setAccessTokenState] = useState(() =>
    localStorage.getItem("agent_access_token")
  );

  const [agent, setAgent] = useState(() => {
    const storedAgent = localStorage.getItem("agent");
    return storedAgent ? JSON.parse(storedAgent) : null;
  });

  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!accessToken;

  // 2. PERSIST ACCESS TOKEN
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("agent_access_token", accessToken);
    } else {
      localStorage.removeItem("agent_access_token");
    }
  }, [accessToken]);

  // 3. PERSIST AGENT
  useEffect(() => {
    if (agent) {
      localStorage.setItem("agent", JSON.stringify(agent));
    } else {
      localStorage.removeItem("agent");
    }
  }, [agent]);

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

  // 5. REVALIDATE AGENT ON APP LOAD
  useEffect(() => {
    if (!accessToken) {
      setAgent(null);
      setLoading(false);
      return;
    }

    const fetchAgent = async () => {
      try {
        const res = await api.get("/api/agent-profile");
        setAgent(res.data.data);
      } catch (err) {
        console.error("Agent validation failed", err);
        // // Hard logout only if token is invalid
        // setAccessToken(null);
        // setAgent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAgent();
  }, [accessToken, api]);

  // 6. SAFE TOKEN SETTER
  const setAccessToken = (token) => {
    setAccessTokenState(token);
    if (!token) {
      setAgent(null);
    }
  };

  return (
    <AgentAuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        agent,
        setAgent,
        isAuthenticated,
        api,
        loading,
      }}
    >
      {children}
    </AgentAuthContext.Provider>
  );
};

export const useAgentAuth = () => {
  const context = useContext(AgentAuthContext);
  if (!context) {
    throw new Error("useAgentAuth must be used within an AgentAuthProvider");
  }
  return context;
};
