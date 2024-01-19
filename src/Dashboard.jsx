import "./Styles.css";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  function logoutSubmit() {
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
