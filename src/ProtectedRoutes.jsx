import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    return true;
  } else {
    return false;
  }
};
const ProtectedRoutes = (props) => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
