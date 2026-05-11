const PERMISSIONS = {
  guest:  ["product:read"],
  user:   ["product:read", "product:create"],
  admin:  ["product:read", "product:create", "product:update", "product:delete", "user:read", "user:update", "user:delete"],
};

export const hasPermission = (role, action) => {
  const allowed = PERMISSIONS[role ?? "guest"] ?? [];
  return allowed.includes(action);
};