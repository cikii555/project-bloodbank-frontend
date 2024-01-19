import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Protected = (props) => {
  const navigate = useNavigate();
  const { Component } = props;
  useEffect(() => {
    let jwt = localStorage.getItem("jwt");
    if (!jwt) {
      localStorage.setItem("loginStatus", "Please login to view dashboard!");
    }
    navigate("/", { replace: true });
  }, []);
  return <Component />;
};
export default Protected;
