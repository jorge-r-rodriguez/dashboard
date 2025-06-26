// components/PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCasUserContext } from "../context/CasUserContext";

const PrivateRoute = () => {
  const { user } = useCasUserContext();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
