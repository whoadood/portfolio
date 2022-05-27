import { Outlet, Navigate } from "react-router-dom";
import React from "react";

export default function TokenCheck() {
  const userId = localStorage.getItem("token");

  return <>{userId !== null ? <Navigate to="/" /> : <Outlet />}</>;
}
