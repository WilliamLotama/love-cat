import React from "react";
import Cat from "./pages/Cat";
import Home from "./pages/Home";
import Testing from "./component/Testing";

import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/cat" element={<Cat />} />
      <Route exact path="/testing" element={<Testing />} />
    </Routes>
  );
}

export default App;
