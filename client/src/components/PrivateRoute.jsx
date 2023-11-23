import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute({requiredRole, ...props}) {
    const {currentUser} = useSelector(state => state.user)
    
    const hasRequiredRole =
    requiredRole ? currentUser && currentUser.role === requiredRole : true;

  return currentUser && hasRequiredRole ? (
    <Outlet {...props} />
  ) : (
    <Navigate to="/sign-in" />
  );
};
