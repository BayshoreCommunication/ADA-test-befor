"use client";
import Service, { services } from "@/components/unique/services/Service";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import SectionLayout from "./SectionLayout";
import { motion } from "framer-motion";
import ProposalBtn from "./ProposalBtn";

interface heroInfo {
  text: string;
  heading: string;
  description: string;
}

export const HeroForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };
  // useEffect(() => {
  //   // Perform localStorage action
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   if (inputValue) {
  //     localStorage.setItem("email", inputValue);
  //   }
  // }, [inputValue]);
  // localStorage.setItem("email", inputValue);

  return (
    <form className="cus-form flex items-center justify-center md:justify-start gap-4 sm:gap-8 mt-[1.5rem] lg:mt-[2.5rem] flex-col sm:flex-row">
      {/* <input
        className="placeholder-center rounded-[10px] outline-none text-small py-4 px-4 md:py-6 md:px-8"
        type="text"
        placeholder="Enter your email"
        onChange={handleInputChange}
        value={inputValue}
      /> */}
      <ProposalBtn />
    </form>
  );
};

const HeroLeft: FC<heroInfo> = ({ text, heading, description }) => {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className=""
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
        className="text-[2rem] text-center md:text-start text-[#3E7BE2] mb-[1.5rem] lg:mb-[2.5rem]"
      >
        {text}
      </motion.p>
      <h1 className="heading-primary">
        {heading?.split("").map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.55,
              delay: i / 30,
            }}
            key={i}
          >
            {el}
          </motion.span>
        ))}
      </h1>

      {/* <h1
        className={`text-[50px] md:text-[100px] font-[800] text-white md:text-left `}
      >
        {text.split(" ").map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}
          </motion.span>
        ))}
      </h1> */}
      <motion.p variants={itemVariants} className="text-base">
        {description}
      </motion.p>

      <motion.div variants={itemVariants}>
        <HeroForm />
      </motion.div>
    </motion.div>
  );
};

export default HeroLeft;
function setItem(inputValue: string) {
  throw new Error("Function not implemented.");
}
