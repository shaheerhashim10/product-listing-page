import Image from "next/image";
import React, { useState } from "react";
import DropDown from "../dropdown/dropdown.component";
import { ICard } from "./card-grid.types";

const CardGrid: React.FC<ICard> = ({ cards, sendQuery }) => {
  const [columns, setColumns] = useState<string>("4");
  const setQuery = (id: any) => {
    sendQuery(id);
  };

  const columnOptions = [
    {
      id: "4",
      name: "Default",
    },
    {
      id: "2",
      name: "2 Columns",
    },
  ];
  const filterOptions = [
    {
      id: "Apple",
      name: "Apple",
    },
    {
      id: "Nike",
      name: "Nike",
    },
    {
      id: "Adidas",
      name: "Adidas",
    },
    {
      id: "Parker",
      name: "Parker",
    },
    {
      id: "Fossil",
      name: "Fossil",
    },
  ];
  const sortOptions = [
    {
      id: "low_to_high",
      name: "Price: Low to High",
    },
    {
      id: "high_to_low",
      name: "Price: High to Low",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto mt-8 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Products
          </h2>
          <div className="flex">
            <div className={`hidden lg:block`}>
              <DropDown
                options={columnOptions}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                }
                onChange={(id) => setColumns(id)}
                // onChange={(id) => console.log(typeof id)}
              />
            </div>
            <DropDown
              options={filterOptions}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              }
              onChange={(id) => setQuery(id)}
              title="Filter by brand name"
            />
            <DropDown
              options={sortOptions}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>
              }
              onChange={(id) => setQuery(id)}
              title="Sort by price"
            />
          </div>
        </div>
        {cards && (
          <div
            // className={`mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8`}
            className={`mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-${columns} xl:gap-x-8`}
          >
            {cards.map((product) => (
              <div key={product.id} className="group relative">
                {/* <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"> */}
                <Image
                  // src="/images/image1.jpg"
                  src={product.imageSrc}
                  height={400}
                  width={400}
                  alt={product.imageAlt}
                  // className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  className="w-full h-64 lg:h-96 object-center object-cover"
                  priority
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.brand}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default CardGrid;
