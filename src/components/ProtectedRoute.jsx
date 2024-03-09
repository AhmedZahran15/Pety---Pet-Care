import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";

function ProtectedRoute() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      toast.error("You need to be logged in to access this page", {
        id: "login-error-toast",
      });
    }
  }, [user]);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
}

export default ProtectedRoute;
