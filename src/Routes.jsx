import { Navigate } from "react-router-dom";
import SystemAdmin from "./SystemAdmin";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import AddAdmins from "./AddAdministrator";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const MainRoutesAdmin = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<SystemAdmin />}>
            <Route
              path="/"
              element={<Navigate replace to="/admin/dashboard" />}
            />
            <Route path="/admin/dashboard" element={<Dashboard />}></Route>
            <Route path="/admin/add-admin" element={<AddAdmins />}></Route>
          </Route>
        </Route>
        <Route path="login" element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};
export default MainRoutesAdmin;
