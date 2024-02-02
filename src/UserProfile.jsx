import { useEffect } from "react";

function UserProfile() {
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
  useEffect(() => {});
  return (
    <div>
      <label>Name</label>
      <input type="text" value></input>
      <label>Surname</label>
      <input type="text"></input>
      <label>Address</label>
      <input type="text"></input>
      <label>City</label>
      <input type="text"></input>
      <label>Country</label>
      <input type="text"></input>
      <label>Phone number</label>
      <input type="text"></input>
      <label>Id number</label>
      <input type="text"></input>
      <label>Email</label>
      <input type="text"></input>
      <label>Username</label>
      <input type="text"></input>
    </div>
  );
}
export default UserProfile;
