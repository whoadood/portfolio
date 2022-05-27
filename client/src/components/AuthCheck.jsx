import { Outlet, Navigate } from "react-router-dom";

export default function AuthCheck() {
  const userId = localStorage.getItem("token");

  return <>{userId ? <Outlet /> : <Navigate to="/login" />}</>;
}
