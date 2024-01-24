import "./Styles.css";
import { useEffect, useState } from "react";
function Registration() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [occupation, setOccupation] = useState("");

  const [msg, setMsg] = useState("");
  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 15000);
  }, [msg]);
  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        setError("");
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("Username has been left blank");
        }
        break;
      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Email has been left blank");
        }
        break;
      case "pass1":
        setError("");
        setPass1(e.target.value);
        if (e.target.value === "") {
          setError("Password has been left blank");
        }
        break;
      case "pass2":
        setError("");
        setPass2(e.target.value);
        if (e.target.value === "") {
          setError("Confirm password has been left blank");
        } else if (e.target.value !== pass1) {
          setError("Confirm password doesnt match");
        }
        break;
      case "name":
        setError("");
        setName(e.target.value);
        if (e.target.value === "") {
          setError("Name has been left blank");
        }
        break;
      case "surname":
        setError("");
        setSurname(e.target.value);
        if (e.target.value === "") {
          setError("Surname  has been left blank");
        }
        break;
      case "address":
        setError("");
        setAddress(e.target.value);
        if (e.target.value === "") {
          setError("Address has been left blank");
        }
        break;
      case "city":
        setError("");
        setCity(e.target.value);
        if (e.target.value === "") {
          setError("City has been left blank");
        }
        break;
      case "country":
        setError("");
        setCountry(e.target.value);
        if (e.target.value === "") {
          setError("Country has been left blank");
        }
        break;
      case "phoneNumber":
        setError("");
        setPhoneNumber(e.target.value);
        if (e.target.value === "") {
          setError("Phone number has been left blank");
        }
        break;
      case "idNumber":
        setError("");
        setIdNumber(e.target.value);
        if (e.target.value === "") {
          setError("Id number has been left blank");
        }
        break;
      case "occupation":
        setError("");
        setOccupation(e.target.value);
        if (e.target.value === "") {
          setError("Occupation has been left blank");
        }

        break;
      default:
    }
  };
  function checkUser() {
    var url = "http://localhost/react/checkuser.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var Data = {
      user: user,
    };
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        setMsg(response[0].result);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }
  function checkEmail() {
    var url = "http://localhost/react/checkemail.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var Data = {
      email: email,
    };
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        setMsg(response[0].result);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }
  function handleSubmit() {
    if (user !== "" && email !== "" && pass1 !== "" && pass2 !== "") {
      var url = "http://localhost/travel-agency/registration.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        user: user,
        email: email,
        pass: pass2,
        name: name,
        surname: surname,
        address: address,
        city: city,
        country: country,
        occupation: occupation,
        idNumber: idNumber,
        phoneNumber: phoneNumber,
      };
      console.log(Data);
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setMsg(response[0].result);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
      setUser("");
      setEmail("");
      setPass1("");
      setPass2("");
    } else {
      setError("All fields are required");
    }
  }
  function checkPassword() {
    if (pass1.length < 8) {
      setError("Password is less than 8 characters");
    }
  }
  return (
    <>
      <div className="form">
        <p>
          {msg !== "" ? (
            <span className="success">{msg}</span>
          ) : (
            <span className="error">{error}</span>
          )}
        </p>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleInputChange(e, "name")}
        ></input>
        <label>Surname</label>
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={(e) => handleInputChange(e, "surname")}
        ></input>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => handleInputChange(e, "address")}
        ></input>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => handleInputChange(e, "city")}
        ></input>
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => handleInputChange(e, "country")}
        ></input>
        <label>Phone number</label>
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => handleInputChange(e, "phoneNumber")}
        ></input>
        <label>Id number </label>
        <input
          type="text"
          name="idNumber"
          value={idNumber}
          onChange={(e) => handleInputChange(e, "idNumber")}
        ></input>
        <label>Occupation</label>
        <input
          type="text"
          name="occupation"
          value={occupation}
          onChange={(e) => handleInputChange(e, "occupation")}
        ></input>
        <label>Username</label>
        <input
          type="text"
          name="user"
          value={user}
          onChange={(e) => handleInputChange(e, "user")}
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => handleInputChange(e, "email")}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="pass1"
          value={pass1}
          onChange={(e) => handleInputChange(e, "pass1")}
          onBlur={checkPassword}
        ></input>
        <label>Confirm password</label>
        <input
          type="password"
          name="pass2"
          value={pass2}
          onChange={(e) => handleInputChange(e, "pass2")}
        ></input>
        <input
          type="submit"
          defaultValue="Submit"
          className="button"
          onClick={handleSubmit}
        ></input>
      </div>
    </>
  );
}
export default Registration;
