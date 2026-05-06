import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const loadUser = () => {
  try {
    const raw = localStorage.getItem("userData");
    return raw ? JSON.parse(raw) : null;
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
      localStorage.setItem("userData", JSON.stringify(newUser));
    }
    setUserState(newUser);
  };

  useEffect(() => {
    const handleStorageChange = (e) => {
       if (e.key === "userData") {
      setUserState(e.newValue ? JSON.parse(e.newValue) : null);
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