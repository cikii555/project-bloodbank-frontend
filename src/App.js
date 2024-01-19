import Registration from "./Registration";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Protected from "./Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route key="login" path="/" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route
            path="/dashboard"
            element={<Protected Component={Dashboard} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
