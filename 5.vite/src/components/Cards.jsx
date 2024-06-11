import React, { useState } from "react";
import Data from "../database/Data";

const Cards = ({ query }) => {
  const [value, setQueary] = useState();

  const FilterProducts = Data.filter((product) =>
    product.category.toLocaleLowerCase().includes(query)
  );

  return (
    <div className="flex w-full min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {FilterProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-105 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[20vw] h-48 object-fit dark:object-fit"
              />
              <div className="p-6">
                <h2 className="text-xl h-[22vh] w-[15vw] font-bold mb-2 text-black dark:text-gray-300">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-3xl font-bold dark:text-white">
                  ${product.price}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-150 ease-in-out dark:bg-blue-700 dark:hover:bg-blue-900">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
