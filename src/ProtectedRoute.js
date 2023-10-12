import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { EmployeeContext } from "./context";

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(EmployeeContext);

  return <>{isLoggedIn ? children : <Navigate to='/login' />}</>;
};
