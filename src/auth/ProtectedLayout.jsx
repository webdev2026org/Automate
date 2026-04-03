import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  
  const isLoggedIn = localStorage.getItem("userData");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // renders child routes
};

export default ProtectedLayout;