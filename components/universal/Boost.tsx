"use client";
import React, { useEffect, useState } from "react";
import SectionLayout from "./SectionLayout";
import { AiOutlineRight } from "react-icons/ai";
import HomeHeroCard from "../unique/Home/HomeHeroCard";
import Image from "next/image";
import ProposalBtn from "./ProposalBtn";
import Reveal from "../motion/Reveal";

interface boostInfo {
  heading: string;
  btnText: string;
}
const Boost: React.FC<boostInfo> = ({ heading, btnText }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    // Perform localStorage action
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const inputValue: string | null = localStorage.getItem("email");
    // if (inputValue) {
    //   setItem(inputValue);
    // }
  }, []);

  return (
    <SectionLayout bg="bg-[#F4F4F4]">
      <Reveal>
        <h2 className="heading-secondary !text-center">{heading}</h2>
      </Reveal>

      {/* <form
        className="flex md:items-center gap-8 md:gap-12 mt-[4rem] max-w-[100rem] mx-auto flex-col md:flex-row "
        // onSubmit={sendEmail}
      >
        <input
          className="rounded-[10px] outline-none text-small py-4 px-4 md:py-6 md:px-8 flex-1"
          type="text"
          placeholder="Enter your email"
          onChange={handleInputChange}
          value={inputValue}
        />
        <ProposalBtn />
      </form> */}
      <Reveal>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-12 px-[4rem] sm:px-[15rem]  md:px-[10rem] lg:px-0">
          <HomeHeroCard
            bgImg="bg-heroimg-1"
            heading="Business Growth Increased"
            stat={87}
            link="Immigration Lawyer Digital Marketing Case Study"
          />

          <HomeHeroCard
            bgImg="bg-heroimg-2"
            heading="Website Engagement Increased"
            stat={71}
            link="Catflix Digital Marketing Case-Study"
          />
          <HomeHeroCard
            bgImg="bg-heroimg-3"
            heading="Social Media Engagement Increased"
            stat={60}
            link="Bayshore Communication Case Study of Apex Advisors"
          />

          <div className="flex-1 flex flex-col items-center custom-shadow p-[3rem] !rounded-[45px]">
            <div>
              <p className="text-base !text-center">
                “Fueling Success, Fueled by Client Satisfations”
              </p>
              <div className="flex mt-8 gap-6 items-center justify-center">
                <Image
                  src="/assets/salman-n.png"
                  alt="salman"
                  width={150}
                  height={150}
                  className="w-[57px] h-[57px] rounded-full border-[2px] border-[#207DE9]"
                />
                <div>
                  <div>
                    <h4 className="heading-four !text-[1.4rem]">
                      Salman H Saikote
                    </h4>
                    <p className="text-small !text-[1rem]">CTO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionLayout>
  );
};

export const BoostService: React.FC<boostInfo> = ({ heading, btnText }) => {
  return (
    <>
      <h2 className="heading-secondary !text-center">{heading}</h2>
      {/* <form className="flex md:items-center gap-8 md:gap-12 mt-[4rem] max-w-[100rem] mx-auto flex-col md:flex-row ">
        <input
          className="rounded-[10px] outline-none text-small py-4 px-4 md:py-6 md:px-8 flex-1 bg-[#F4F4F4]"
          type="text"
          placeholder="Enter your email"
        />
        <ProposalBtn />
      </form> */}
    </>
  );
};

export default Boost;
function setItem(inputValue: string) {
  throw new Error("Function not implemented.");
}
