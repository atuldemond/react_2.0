// src/components/Dark_light.js
import React from "react";
import { useTheme } from "../contexts/ThemeContext"; // Import the useTheme hook

const Dark_light = () => {
  const { theme, toggleTheme } = useTheme(); // Use the theme context

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Dark_light;
