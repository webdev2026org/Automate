import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedLayout = () => {
  const { user } = useAuth();

  console.log('user',user);
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // renders child routes
};

export default ProtectedLayout;