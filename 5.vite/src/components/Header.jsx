import React from "react";

const Header = () => {
  return (
    <>
      <div className="header w-full h-[10vh] bg-red-200 flex justify-between items-center px-[10vw]">
        <div className="logo font-bold text-3xl">Logo</div>
        <div className="right-stuff flex gap-[2vw] text-2xl">
          <div className="day-night-image">Day</div>
          <div className="text">Dark Mode</div>
        </div>
      </div>
    </>
  );
};

export default Header;
