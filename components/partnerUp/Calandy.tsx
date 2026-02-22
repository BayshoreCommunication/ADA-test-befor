"use client";

import React from "react";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";

const Calandy = () => {
  return (
    <div id="calendly-section" className="flex justify-center items-center md:px-12 px-8 py-10 md:py-16">
      <div className="max-w-[1440px] w-full mx-auto overflow-hidden">
        
        {/* Header */}
        <motion.h1
          className="text-[30px] md:text-[36px] uppercase text-center my-6 md:my-0 font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#FE641A] border-2 border-[#FE641A] p-2">
            BOOK A CALL
          </span>
          <span className="px-2">With us today</span>
        </motion.h1>
        <div className="text-center text-gray-800 text-[16px] mt-12 font-semibold">
          <p>Get a Free <span className="text-[#FE641A]">Video Shoot + 1-Year Growth Plan</span> at Your Office — Schedule Today</p>
        </div>
        {/* Calendly Widget */}
        <div
          className="m-10 mb-16 w-full max-w-[800px] mx-auto rounded-xl h-[800px] overflow-hidden"
        >
          <InlineWidget
            url="https://calendly.com/bayshorec/45min"
            styles={{
              width: "100%",
              height: "100%",
              minHeight: "600px",
              border: "0",
              display: "block",
            }}
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "#0b7788",
              textColor: "4d5055",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calandy;
