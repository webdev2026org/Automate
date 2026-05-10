import { useAuth } from "./AuthContext";
import { hasPermission } from "./Permissions";

const PermissionGuard = ({ action, children, fallback = null }) => {
  const { user } = useAuth();
  return hasPermission(user?.role, action) ? children : fallback;
};

export default PermissionGuard;