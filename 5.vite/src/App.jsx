import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Headers from "./components/Header";
import SearchBar from "./components/SearchBar";
function App() {
  const [query, setQueary] = useState("");
  console.log(query);
  return (
    <>
      <Headers />
      <div className="serach-filter flex flex-wrap px-[5vw] justify-between">
        <SearchBar setQueary={setQueary} /> <Filter />
      </div>
      <div className="body w-full h-auto flex ">
        <Cards query={query} />
      </div>
    </>
  );
}

export default App;
