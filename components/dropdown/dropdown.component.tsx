import React, { useRef, useState } from "react";
import { IDropdown, IOption } from "./dropdown.types";
import useOutsideAlerter from "../../hooks/click-outside-component";

const DropDown: React.FC<IDropdown> = ({ options, icon, onChange, title }) => {
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
  //   const [selectedValue, setSelectedValue] = useState("");
  const wrapperRef = useRef<any>(null);
  // Run outside click function
  useOutsideAlerter(wrapperRef, () => {
    setIsDropdownActive(false);
  });

  const onItemClick = (id: string) => {
    onChange(id);
  };
  return (
    <div
      className="relative inline-block text-left"
      onClick={() => setIsDropdownActive(!isDropdownActive)}
      ref={wrapperRef}
    >
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50  "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {icon}
        </button>
      </div>

      <div
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ${
          isDropdownActive ? "block" : "hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="p-2 font-semibold border-b-2">{title}</div>
        <div className="py-1" role="none">
          {options?.map(({ id, name }, index) => (
            <div
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50"
              role="menuitem"
              tabIndex={-1}
              key={id}
              onClick={() => onItemClick(id)}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
