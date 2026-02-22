"use client";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
      duration: 0.5, // Adjust transition duration
      ease: "easeInOut", // Adjust transition timing function
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ContactInfo = [
  {
    title: "C",
    style: `bg-[#2C213C] flex items-center justify-center w-[30px] h-[80px] md:h-[150px] md:w-[50px] rounded-full`,
  },
  {
    title: "O",
    style: `bg-[#2C213C] flex items-center justify-center w-[30px] h-[180px] md:h-[250px] md:w-[50px] rounded-full`,
  },
  {
    title: "N",
    style: `bg-[#fe631a] flex items-center justify-center w-[30px] rounded-full h-[130px] mt-16 md:h-[180px] md:w-[50px]`,
  },
  {
    title: "T",
    style: `bg-[#fe631a] flex items-center justify-center w-[30px] rounded-full h-[100px] mb-16 md:h-[180px] md:w-[50px]`,
  },
  {
    title: "A",
    style: `bg-[#fe631a] flex items-center justify-center w-[30px] rounded-full h-[120px] mt-16 md:h-[130px] md:w-[50px]`,
  },
  {
    title: "C",
    style: `bg-[#fe631a] flex items-center justify-center w-[30px] rounded-full h-[90px] md:h-[150px] md:w-[50px]`,
  },
  {
    title: "T",
    style: `bg-[#fe631a] flex items-center justify-center w-[30px] rounded-full h-[180px] mb-16 md:h-[260px] md:w-[50px]`,
  },
  {
    title: "U",
    style: `bg-[#2C213C] flex items-center justify-center w-[30px] rounded-full h-[180px] md:h-[230px] md:w-[50px]`,
  },
  {
    title: "S",
    style: `bg-[#2C213C] flex items-center justify-center w-[30px] h-[110px] rounded-full md:h-[150px] md:w-[50px] mt-16`,
  },
];

export const AnimateContactHero = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="flex flex-row gap-4 md:gap-24 bg-[#F4F4F4] w-full items-center justify-center py-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {ContactInfo.map((el, index) => (
          <motion.div key={index} className={`${el.style}`}>
            <motion.p
              className="text-xl md:text-6xl font-blod text-white"
              variants={item}
            >
              {el.title}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimateContactHero;
