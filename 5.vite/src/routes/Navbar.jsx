import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Details from "../components/Details";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center items-center w-full h-[10vh] ">
        <Link to="/">Home</Link>
        <Link to="/details">Countries Details</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default Navbar;
