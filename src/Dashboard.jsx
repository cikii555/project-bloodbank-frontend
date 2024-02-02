import { useNavigate } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Registration from "./Registration";
function Dashboard() {
  const navigate = useNavigate();
  function logoutSubmit() {
    localStorage.removeItem("jwt");
    localStorage.setItem("loginStatus", "Logged out successfully");
    navigate("/");
  }
  return (
    <>
      <div>
        <h3>Dashboard page</h3>
        <p onClick={logoutSubmit}>Logout</p>
      </div>
    </>
  );
}

export default Dashboard;
