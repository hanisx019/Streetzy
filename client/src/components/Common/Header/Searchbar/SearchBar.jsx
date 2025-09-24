import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showBar, setShowBar] = useState(false);

  const handleOpen = () => {
    setShowBar(true);
    setTimeout(() => setIsOpen(true), 10); // allow mount before transition
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setShowBar(false), 400); // match transition duration
  };

  const inputData = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    handleClose();
    setSearchTerm("");
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        style={{ visibility: "visible" }}
      >
        <HiMagnifyingGlass className="size-5 mt-[6px] cursor-pointer hover:text-gray-500 transition-all" />
      </button>
      {showBar && (
        <form
          onSubmit={inputData}
          className={`searchbar-width-animate ${isOpen ? "open" : ""}`}
        >
          <div className="absolute top-0 left-0 w-full h-[100px] bg-white p-4 flex justify-center items-center ">
            <div className="relative w-[50%] ">
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder="Search"
                className="bg-gray-200 p-2 px-4 w-full focus:outline-none rounded-[5px]"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 pl-2  bg-gray-200"
              >
                <HiMagnifyingGlass className="size-5 hover:text-gray-500 transition-all cursor-pointer" />
              </button>
            </div>
            <div className="absolute right-10">
              <IoMdClose
                onClick={handleClose}
                className="size-5 hover:text-gray-500 transition-all"
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default SearchBar;
