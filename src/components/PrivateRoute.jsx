import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, roles = [] }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  console.log("🔐 PrivateRoute > user:", user);
  console.log("✅ Required roles:", roles);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles.length > 0 && !roles.includes(user.role)) {
    console.warn("❌ User lacks required role:", user.role);
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
