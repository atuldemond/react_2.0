import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="div w-ful h-[20vh] bg-red-200  flex justify-center items-center flex-col">
        <h1 className="w-[5vw] h-[5vh] bg-blue-300 justify-center flex items-center rounded-full px-[2vw] py-[2vh] font-sans font-extrabold ">
          {count}
        </h1>
        <button
          className="w-[20vh] h-[5vh] bg-green-200 mt-[3vh] rounded-md font-extrabold"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {" "}
          Click Here
        </button>
      </div>
    </>
  );
};

export default Counter;
