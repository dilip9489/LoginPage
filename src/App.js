 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Login from "./LoginPage/Login";
import Home from "./HomePage/Home";
 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={< Login/>} />
      </Routes>
    </Router>
  );
};

export default App;

