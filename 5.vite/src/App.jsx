// App.jsx
import React, { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext"; // Assuming you have a ThemeContext.js file
import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Headers from "./components/Header";
import SearchBar from "./components/SearchBar";
import Dark_light from "./components/Dark_light";

function App() {
  const [query, setQueary] = useState("");
  const [theme, setTheme] = useState("light"); // Initial theme state

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.classList.toggle("dark");
  };

  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      <Headers toggleTheme={toggleTheme} />
      <div
        className={`serach-filter flex flex-wrap px-[5vw] justify-between ${
          theme === "light" ? "" : "dark"
        }`}
      >
        <SearchBar setQueary={setQueary} />
        <Filter setQueary={setQueary} />
      </div>
      <div
        className={`body w-full h-auto flex ${theme === "light" ? "" : "dark"}`}
      >
        <Cards query={query} />
      </div>
      <Dark_light setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
