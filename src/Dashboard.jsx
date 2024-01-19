import "./Styles.css";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  function logoutSubmit() {
    localStorage.removeItem("jwt");
    localStorage.setItem("loginStatus", "Logged out successfully");
    navigate("/");
  }
  return (
    <div className="form">
      <h3>Dashboard page</h3>
      <p className="paragraph" onClick={logoutSubmit}>
        Logout
      </p>
    </div>
  );
}

export default Dashboard;
