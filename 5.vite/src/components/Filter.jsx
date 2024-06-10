import React from "react";

const Filter = () => {
  return (
    <div className="mt-5 flex border border-black rounded-lg ml-[2wh]">
      <select
        id="filterOptions"
        name="filterOptions"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-nonefocus:border-green-400 sm:text-sm rounded-md"
      >
        <option>Filter by Categories</option>
        <option>Men's</option>
        <option>Jewelry</option>
        <option>Electronics</option>
      </select>
    </div>
  );
};

export default Filter;
