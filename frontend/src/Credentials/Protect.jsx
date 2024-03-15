import React from "react";
import { useAuth } from "./Auth";
import { Navigate } from "react-router-dom";

export const Protect = ({ children }) => {
  const auth = useAuth();
  return (
    <>
      {sessionStorage.getItem("name") ? (
        <>{children}</>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
