import React, {Component} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // pageSize = 15,
  <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<News key="general" pageSize={15} country="in"  category="general" />}></Route>
        <Route path="/business" element={<News key="business" pageSize={15} country="in"  category="business" />}></Route>
        <Route path="/entertainment" element={<News key="entertainment" pageSize={15} country="in"  category="entertainment" />}></Route>
        <Route path="/health" element={<News key="health" pageSize={15} country="in"  category="health" />}></Route>
        <Route path="/science" element={<News key="science" pageSize={15} country="in"  category="science" />}></Route>
        <Route path="/sports" element={<News key="sports" pageSize={15} country="in"  category="sports" />}></Route>
        <Route path="/technology" element={<News key="technology" pageSize={15} country="in"  category="technology" />}></Route>
      </Routes>
  </Router>
);
