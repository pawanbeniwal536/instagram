import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offer from "./Component/Offer";
import Login from "./Component/Login"; // Assuming you have a Login component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Offer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
