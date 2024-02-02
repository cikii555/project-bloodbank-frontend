import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { SideBarData } from "./SidebarData";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const logout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li>
              <Link to={"/admin/dashboard"}>
                <span>Loyalty</span>
              </Link>
            </li>
            <li>
              <Link to={"/admin/complaints"}>
                <span> Complaints </span>
              </Link>
            </li>
            <li>
              <Link to={"/admin/add-admin"}>
                <span>Add admin</span>
              </Link>
            </li>
            <li>
              <button onClick={logout}>logout</button>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
