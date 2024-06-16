import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const Services = ({ theme }) => {
  const [count, setCount] = useContext(ThemeContext);
  return (
    <div>
      <h1>Service Page</h1>
      <h2>value getting from {count}</h2>
    </div>
  );
};

export default Services;
