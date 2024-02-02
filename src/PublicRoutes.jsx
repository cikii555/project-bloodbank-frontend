import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    return true;
  } else {
    return false;
  }
};

const PublicRoutes = (props) => {
  const auth = useAuth();
  return auth ? <Navigate to="/admin/dashboard" /> : <Outlet />;
};

export default PublicRoutes;
