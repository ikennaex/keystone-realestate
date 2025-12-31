import { Navigate } from "react-router";
import Loader from "../Components/Loaders/Loader";
import { useAgentAuth } from "./AgentAuthContext";

const AgentPublicGuard = ({ children }) => {
  const { loading, isAuthenticated } = useAgentAuth();

  // 1️⃣ still resolving auth
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  // 2️⃣ logged-in users are redirected away from login/register
  if (isAuthenticated) {
    return <Navigate to="/agent/dashboard" replace />;
  }

  // 3️⃣ allowed to view login/register
  return children;
};

export default AgentPublicGuard;
