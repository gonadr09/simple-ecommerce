import React from "react";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";


const PublicRoute = ({ children, preventUrl }) => {
  const { state } = useContext(AuthContext);

  if (!state.isAuth) {
    return children;
  }

  return <Navigate to={preventUrl} />;
};

export default PublicRoute;
