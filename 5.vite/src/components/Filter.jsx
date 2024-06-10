// components/Filter.jsx
import React from "react";

const Filter = ({ setQueary }) => {
  return (
    <div className="mt-5 flex  rounded-lg ml-[2wh] dark:border-gray-600">
      <select
        id="filterOptions"
        name="filterOptions"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:border-green-400 sm:text-sm rounded-md px-[2vw] border border-red-100 hover:border-red-300 dark:bg-gray-700 dark:text-white"
        onClick={(e) =>
          e.target.value === "Filter by Categories"
            ? setQueary
            : setQueary(e.target.value)
        }
      >
        <option>Filter by Categories</option>
        <option>women's clothing</option>
        <option>jewelery</option>
        <option>electronics</option>
        <option>men's clothing</option>
      </select>
    </div>
  );
};

export default Filter;
