import { useAuth } from "./AuthContext";
import { hasPermission } from "./Permissions";

export const usePermission = (action) => {
  const { user } = useAuth();
  return hasPermission(user?.role, action);
};