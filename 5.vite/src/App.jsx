import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Headers from "./components/Header";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <>
      <Headers />
      <div className="serach-filter flex flex-wrap px-[5vw] justify-between">
        <SearchBar /> <Filter />
      </div>
      <div className="body w-full h-auto flex ">
        <Cards />
      </div>
    </>
  );
}

export default App;
