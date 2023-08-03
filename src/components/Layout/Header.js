import React, { useState } from "react";
import { HeaderLinks } from "../UI/HederLink";

const navData = [
  "Home",
  "GitHub",
  "Install",
  "DragGAN Download",
  "AI Tools",
  "ChatGPT",
  "Submit Guest Post",
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-center bg-cyan-500 sm:flex flex-col">
        {/* Centering container */}
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex h-28 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-inset"
              >
                {/* Icon for open menu */}
                <svg
                  className={`block h-6 w-6 ${
                    isMobileMenuOpen ? "hidden" : "ml-[-52px]"
                  } text-white`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                {/* Icon for close menu */}
                <svg
                  className={`block h-6 w-6 ${
                    isMobileMenuOpen ? "ml-[-52px]" : "hidden"
                  } text-white`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start  text-white w-auto">
              <div className="flex">
                <div className="w-auto font-bold text-[25px] flex items-center ">
                  DragGAN AI Tool{" "}
                </div>
              </div>
              <div className="items-center hidden sm:ml-6 sm:block ">
                <div className="flex">
                  {/* {navData.map((item, index) => (
                    <div
                      key={index}
                      className="text-white hover:bg-gray-900 hover:text-white h-[100%] flex items-center text-sm md:text-sm lg:text-xl font-medium"
                    >
                      {item}
                    </div>
                  ))} */}
                  <HeaderLinks/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <div className="gap-5 text-lg font-medium space-y-5 h-[100%] pb-5">
                {/* {navData.map((item, index) => (
                  <div
                    key={index}
                    className="text-white hover:bg-gray-900 hover:text-white w-auto h-[100%] px-6 flex items-center text-sm md:text-base lg:text-xl"
                  >
                    {item}
                  </div>
                ))} */}
                <HeaderLinks/>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
