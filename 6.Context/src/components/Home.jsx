import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const Home = () => {
  const [count, setCount] = useContext(ThemeContext);
  return (
    <div>
      <h1>Home Page</h1>
      <h2>value getting from {count}</h2>
    </div>
  );
};

export default Home;
