import React, { useContext } from "react";
import { AuthContext } from "../contex/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { currentUer, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (currentUer) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivetRoute;
