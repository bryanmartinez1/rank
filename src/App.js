import React from "react";
import Navbar from "./Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import GPA from "./Pages/GPA";
import QPA from "./Pages/QPA";
import ClassGrade from "./Pages/ClassGrade";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gpa" element={<GPA />} />
          <Route path="/qpa" element={<QPA />} />
          <Route path="/classgrade" element={<ClassGrade />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
