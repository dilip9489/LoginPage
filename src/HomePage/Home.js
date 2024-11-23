import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../HomePage/Home.css";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let message = "";
     
       
      if (username === "user" && password === "password") {
      message = "Welcome, user!";
    } else {
      message = "Invalid username or password";
    }

    navigate("/login", { state: { message } });
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
