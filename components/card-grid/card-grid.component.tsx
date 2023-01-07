import Image from "next/image";
import React, { useState } from "react";
import DropDown from "../dropdown/dropdown.component";
import { ICard } from "./card-grid.types";

const CardGrid: React.FC<ICard> = ({ cards }) => {
  const [columns, setColumns] = useState<string>("4");

  const columnOptions = [
    {
      id: "4",
      name: "Default",
    },
    {
      id: "1",
      name: "1 Column",
    },
    {
      id: "2",
      name: "2 Columns",
    },
    {
      id: "3",
      name: "3 Columns",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Products
          </h2>
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
            />
          </div>
        </div>
        <div
          className={`mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-${columns} xl:gap-x-8`}
        >
          {cards.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <Image
                  // src="/images/image1.jpg"
                  src={product.imageSrc}
                  height={400}
                  width={400}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  priority
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardGrid;
