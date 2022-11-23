import React from "react";
import Navbar from "./Jsx/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Jsx/LandingPage/LandingPage";
import LandingPageMid from "./Jsx/LandingPage/LandingPageMid";
import About from "./Jsx/LandingPage/About";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/" element={<LandingPageMid />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
