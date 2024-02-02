import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const SystemAdmin = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};
export default SystemAdmin;
