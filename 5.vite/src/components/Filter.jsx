import React from "react";

const Filter = ({ setQueary }) => {
  return (
    <div className="mt-5 flex border  rounded-lg ml-[2wh]">
      <select
        id="filterOptions"
        name="filterOptions"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-nonefocus:border-green-400 sm:text-sm rounded-md"
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
