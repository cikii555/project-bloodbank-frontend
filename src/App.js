import Registration from "./Registration";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Protected from "./Protected";
import MainRoutesAdmin from "./Routes";

function App() {
  return (
    <>
      Main app
      <MainRoutesAdmin />
    </>
  );
}

export default App;
