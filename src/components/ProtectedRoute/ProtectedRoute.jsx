import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { LoggedInContext } from "../../contexts/LoggedInContext";
import { PATHS } from "../../utils/consts";

const ProtectedRoute = ({ children, ...props }) => {
  const isLoggedIn = useContext(LoggedInContext);
  if (!isLoggedIn) {
    return <Navigate to={PATHS.signin} replace />;
  }

  return children;
};

export default ProtectedRoute;
