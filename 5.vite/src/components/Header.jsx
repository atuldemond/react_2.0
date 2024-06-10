
import React from "react";

const Header = ({ toggleTheme }) => {
  return (
    <>
      <div className="header w-full h-[10vh] bg-red-200 dark:bg-gray-800 flex justify-between items-center px-[10vw]">
        <div className="logo font-bold dark:text-white text-3xl">Logo</div>
        <div className="right-stuff flex gap-[2vw] text-2xl">
          <button
            onClick={toggleTheme}
            className="text-white dark:text-gray-300"
          >
            {document.body.className.includes("dark") ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
