import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AgentAuthProvider } from "./Contexts/AgentAuthContext.jsx";
import { AuthProvider } from "./Contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <AgentAuthProvider>
        <App />
      </AgentAuthProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
