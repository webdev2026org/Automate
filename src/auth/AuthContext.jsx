import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const loadUser = () => {
  try {
    const raw = localStorage.getItem("userData");
    if (!raw) return null;
    const [username, type] = atob(raw).split(":"); // ✅ decode base64
    return { username, type };
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(loadUser);

  // Keep localStorage in sync whenever user changes
  const setUser = (newUser) => {
    if (newUser === null) {
      localStorage.removeItem("userData");
    } else {
      localStorage.setItem(
        "userData",
        btoa(`${newUser.username}:${newUser.type}`),
      ); // ✅ encode base64
    }
    setUserState(newUser);
  };

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "userData") {
        try {
          const [username, type] = atob(e.newValue).split(":"); // ✅ decode base64
          setUserState(e.newValue ? { username, type } : null);
        } catch {
          setUserState(null);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
