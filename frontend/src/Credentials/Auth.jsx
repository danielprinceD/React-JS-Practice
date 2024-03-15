import { useContext, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = React.createContext();
export const Auth = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const login = (name) => {
    setUser(name);
    sessionStorage.setItem("name", name);
    navigate("/");
    alert("Welcome " + name);
  };
  const logout = () => {
    setUser("");
    sessionStorage.setItem("name", "");
    navigate("/");
  };
  return (
    <div>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
