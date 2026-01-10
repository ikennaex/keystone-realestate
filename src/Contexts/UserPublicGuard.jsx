import { Navigate, Outlet } from "react-router";
import Loader from "../Components/Loaders/Loader";
import { useAuth } from "./AuthContext";

const UserPublicGuard = ({ children }) => {
  const { loading, isAuthenticated, user } = useAuth();

  // 1️⃣ still resolving auth
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  // 2️⃣ logged-in users are redirected away from login/register
  if (isAuthenticated && user?.role === "user") {
    return <Navigate to="/user/dashboard" replace />;
  }

  return <Outlet />;
};

export default UserPublicGuard;
