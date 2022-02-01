import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
