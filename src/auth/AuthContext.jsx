import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const loadUser = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const payload = JSON.parse(atob(token.split(".")[1]));
    return { username: payload.username, role: payload.role, token };
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(loadUser);

  const setUser = (newUser) => {
    if (newUser === null) {
      localStorage.removeItem("token");
    } else {
      localStorage.setItem("token", newUser.token);
    }
    setUserState(newUser);
  };

  // Sync logout/login across browser tabs

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key !== "token") return;

      if (!e.newValue) {
        // Token was removed in another tab (logout)
        setUserState(null);
        return;
      }

      try {
        const payload = JSON.parse(atob(e.newValue.split(".")[1]));
        setUserState({
          username: payload.username,
          role: payload.role,
          token: e.newValue,
        });
      } catch {
        setUserState(null);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
