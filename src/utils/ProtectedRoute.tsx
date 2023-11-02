import { Navigate } from "react-router-dom";

import { isLoggedIn } from "./auth";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  if (isLoggedIn()) {
    return <>{element}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
