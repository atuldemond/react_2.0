import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const About = () => {
  const [count, setCount] = useContext(ThemeContext);
  return (
    <div>
      <h1>About Page</h1>
      <h2>value getting from {count}</h2>
    </div>
  );
};

export default About;
