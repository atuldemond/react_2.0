// components/SearchBar.jsx
import React from "react";

const SearchBar = ({ setQueary }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full max-w-md mx-auto mt-5">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-red-300 dark:bg-gray-700 dark:text-white"
          onChange={(e) => setQueary(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
