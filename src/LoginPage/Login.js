import React from "react";
import { useLocation } from "react-router-dom";
import "../LoginPage/Login.css";

const Login = () => {
  const location = useLocation();
   

   
  const { state } = location;
  const message = state?.message || "No message provided";

  return (
    <div className="login-message-container">
      <h1>Login Page</h1>
      <h3>{message}</h3>
       
    </div>
  );
};

export default Login;
