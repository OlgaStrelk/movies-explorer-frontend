import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { PATHS } from "../../utils/consts";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to={PATHS.signin} replace />;
};

export default ProtectedRoute;
