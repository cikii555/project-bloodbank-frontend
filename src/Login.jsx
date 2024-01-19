import { useState, useEffect } from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { json } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    setTimeout(function () {
      setMessage("");
    }, 5000);
  }, [message]);
  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        setError("");
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("Username has been left blank");
        }
        break;
      case "password":
        setError("");
        setPassword(e.target.value);
        if (e.target.value === "") {
          setError("Password has been left blank");
        }
        break;
      default:
    }
  };
  const LoginSubmit = () => {
    if (user !== "" && password !== "") {
      var url = "http://localhost/travel-agency/login.php";
      var headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      var Data = {
        user: user,
        password: password,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response.message);
          console.log(response.jwt);
          if (
            response.message === "Invalid username!" ||
            response.message === "Invalid password!"
          ) {
            setError(response.message);
          } else {
            setMessage(response.message);

            setTimeout(function () {
              localStorage.setItem("jwt", response.jwt);
              navigate("/dashboard");
            }, 5000);
          }
        })
        .catch((error) => {
          setError(error);
          console.log(error);
        });
    } else {
      setError("All fields are required");
    }
  };
  return (
    <div className="form">
      <p>
        {error !== "" ? (
          <span className="error">{error}</span>
        ) : (
          <span className="success">{message}</span>
        )}
      </p>
      <label>Username</label>
      <input type="text" onChange={(e) => handleInputChange(e, "user")}></input>
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => handleInputChange(e, "password")}
      ></input>
      <input
        type="submit"
        defaultValue="Login"
        className="button"
        onClick={LoginSubmit}
      ></input>
    </div>
  );
}

export default Login;
