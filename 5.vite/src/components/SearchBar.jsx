import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full max-w-md mx-auto mt-5">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-red-400"
        />
      </div>
    </>
  );
};

export default SearchBar;
