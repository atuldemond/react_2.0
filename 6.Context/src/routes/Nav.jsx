import React, { useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Services from "../components/Services";
import About from "../components/About";
import { ThemeContext, ThemeProvider } from "../contexts/themeContext";

const Nav = () => {
  const [count, setCount] = useState(200);
  const a = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={[count, setCount]}>
      <nav className="bg-rose-400 p-4 flex justify-around items-center h-12vh w-100vw">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/about" className="text-white">
          About
        </Link>
        <Link to="/services" className="text-white">
          Services
        </Link>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default Nav;
