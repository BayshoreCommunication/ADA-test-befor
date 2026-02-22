"use client";

import React from "react";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  const handleScrollToCalendly = () => {
    const section = document.getElementById("calendly");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full border-b border-gray-100 shadow-sm px-8">
      <div className="max-w-[1640px] mx-auto flex justify-between items-center py-4 px-2 sm:px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/image/hero/logo.png"
            alt="BayShore Logo"
            width={1000}
            height={800}
            className="sm:w-[250px] sm:h-[70px] w-[160px] h-[45px] object-contain"
            priority
          />
        </div>

        {/* Call Button */}
        <button
          onClick={handleScrollToCalendly}
          className="bg-[#FE641A] text-white font-semibold rounded-full shadow-md hover:scale-105 transition duration-300 flex items-center justify-center sm:px-6 sm:py-3 w-12 h-12 sm:w-auto sm:h-auto"
        >
          <FiPhone className="sm:hidden text-2xl" />
          <span className="hidden sm:inline">Schedule Call →</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
