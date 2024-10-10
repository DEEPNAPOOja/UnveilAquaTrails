// export default Navbar

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white">
      <div className="container mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <h2 className="text-primary font-bold text-lg ">
                <MdTravelExplore className="icon" /> UnveilAquaTrails{" "}
              </h2>
            </div>
          </div>
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a
              href="/"
              className="leading-normal no-underline text-black text-lg hover:text-black"
            >
              Home
            </a>
            <a
              href="/safety"
              className="leading-normal no-underline text-black text-lg hover:text-black"
            >
              Safety & Environmental
            </a>
            <a
              href="/amenities"
              className="leading-normal no-underline text-black text-lg hover:text-black"
            >
              Amenities
            </a>
            <a
              href="/educational"
              className="leading-normal no-underline text-black text-lg hover:text-black"
            >
              Educational
            </a>
            <a
              href="/diveshop"
              className="leading-normal no-underline text-black text-lg hover:text-black"
            >
              DiveShop
            </a>
          </ul>

          <div className="flex gap-4 max-lg:hidden">
            <button className="bg-blue-400 text-white rounded shadow h-12 px-6 outline-none text-light hover:bg-white hover:text-primary cursor-pointer text-base transition-bg  hover:border hover:border-primary">
              {" "}
              LogIn{" "}
            </button>
            <button className="bg-blue-400 text-white rounded shadow h-12 px-6 outline-none text-light hover:bg-primary hover:text-white cursor-pointer text-base transition-bg  hover:border hover:border-primary">
              SignUp{" "}
            </button>
          </div>
        </div>
      </div>

      {dropdown ? (
        <div
          onClick={showDropdown}
          className="lg:hidden text-[22px] cursor-pointer text-black"
        >
          <MdClose />
        </div>
      ) : (
        <div
          onClick={showDropdown}
          className="lg:hidden text-[22px] cursor-pointer text-black"
        >
          <HiMenuAlt3 />
        </div>
      )}

      {dropdown && (
        <div className="lg:hidden w-full fixed top-24 bg-primary transition-all">
          <div className="w-full flex flex-col items-baseline gap-4">
            <ul className="flex flex-col justify-center w-full">
              <a
                href="/"
                className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
              >
                Home
              </a>
              <a
                href="/safety"
                className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
              >
                Safety & Environmental
              </a>
              <a
                href="/amenities"
                className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
              >
                Amenities
              </a>
              <a
                href="/educational"
                className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
              >
                Educational
              </a>
              <a
                href="/diveshop"
                className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
              >
                DiveShop
              </a>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
