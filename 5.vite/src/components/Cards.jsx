import React, { useState } from "react";
import Data from "../database/Data";

const Cards = ({ query }) => {
  console.log(query);
  console.log(Data);
  const [value, setQueary] = useState();

  const FilterProducts = Data.filter((product) =>
    product.category.toLocaleLowerCase().includes(query)
  );
  console.log(FilterProducts);

  return (
    <div className="flex w-full min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {FilterProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-105 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-fit"
              />
              <div className="p-6">
                <h2 className="text-xl h-[10vh] w-[20vw] font-bold mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600">${product.price}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-150 ease-in-out">
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
