import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-teal-50 to-white flex items-center justify-center py-20">
        <div className="w-full max-w-[1440px] mx-auto text-center px-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Premium Printing Solutions for Your Business
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            From business cards to marketing materials, BayPrint delivers
            high-quality printing that helps your brand shine.
          </p>
          <Button className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
            Explore Our Services
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Header;
