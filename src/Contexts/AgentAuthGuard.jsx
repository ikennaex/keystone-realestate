import { Navigate } from "react-router";
import Loader from "../Components/Loaders/Loader";
import { useAgentAuth } from "./AgentAuthContext";
import { Outlet } from "react-router";

const AgentAuthGuard = () => {
  const { loading, isAuthenticated } = useAgentAuth();

  // 1. Still resolving auth
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  // 2. Auth resolved but not logged in
  if (!isAuthenticated) {
    return <Navigate to="/agent/login" replace />;
  }

  // Auth resolved and valid
  return <Outlet />;
};

export default AgentAuthGuard;
