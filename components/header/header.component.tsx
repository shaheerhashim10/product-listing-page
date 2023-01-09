import React from "react";
import { IHeader } from "./header.types";
import DropDown from "../dropdown/dropdown.component";

const Header: React.FC<IHeader> = ({}) => {
  const filterOptions = [
    {
      id: "apple",
      name: "Apple",
    },
    {
      id: "nike",
      name: "Nike",
    },
    {
      id: "adidas",
      name: "Adidas",
    },
    {
      id: "parker",
      name: "Parker",
    },
    {
      id: "fossil",
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
    <div className="flex justify-between mt-10 p-3 border-4">
      <span className="text-2xl lg:text-4xl mt-2">Product Listing Page</span>
      <div className="flex space-x-3 align-middle">
        {/* <DropDown
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
          onChange={(id) => console.log(id)}
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
          onChange={(id) => console.log(id)}
        /> */}
      </div>
    </div>
  );
};

export default Header;
