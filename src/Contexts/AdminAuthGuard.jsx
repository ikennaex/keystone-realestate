import { Navigate } from "react-router";
import Loader from "../Components/Loaders/Loader";
import { Outlet } from "react-router";
import { useAuth } from "./AuthContext";

const AdminAuthGuard = () => {
  const { loading, isAuthenticated, user } = useAuth();

  // 1. Still resolving auth
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  // 2. Auth resolved but not logged in
  if (!isAuthenticated || user?.role !== "admin") {
    return <Navigate to="/admin-login" replace />;
  }

  // Auth resolved and valid
  return <Outlet />;
};

export default AdminAuthGuard;
