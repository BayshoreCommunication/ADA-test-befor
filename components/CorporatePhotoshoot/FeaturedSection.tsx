import React from "react";
import SectionLayout from "../universal/SectionLayout";
import Reveal from "../motion/Reveal";
import { RiTeamFill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { BsSpeedometer } from "react-icons/bs";

const FeaturedSection = () => {
  return (
    <>
      <SectionLayout bg="bg-white lg:pt-14">
        <Reveal>
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
            <div className="py-8 px-10 max-w-[360px] bg-[#F6F6F6] rounded-xl mx-auto text-center flex flex-col justify-center items-center">
              <RiTeamFill className=" text-5xl text-primary " />
              <h4 className="text-2xl lg:text-3xl font-semibold mt-4 mb-2">
                Expert Team
              </h4>
              <p>
                Experienced Professionals Crafting Photos That Tell Your Story
              </p>
            </div>
            <div className="py-8 px-10 max-w-[360px] bg-[#F6F6F6] rounded-xl mx-auto text-center flex flex-col justify-center items-center">
              <MdEditSquare className=" text-5xl text-primary " />

              <h4 className="text-2xl lg:text-3xl font-semibold mt-4 mb-2">
                Professional Editing
              </h4>
              <p>
                Enhancing Every Detail to Create Stunning, Ready-to-Use Photos
              </p>
            </div>
            <div className="py-8 px-10 max-w-[360px] bg-[#F6F6F6] rounded-xl mx-auto text-center flex flex-col justify-center items-center">
              <BsSpeedometer className=" text-5xl text-primary " />
              <h4 className="text-2xl lg:text-3xl font-semibold mt-4 mb-2">
                Quality Services
              </h4>
              <p>
                Delivering Exceptional Results That Exceed Your Expectations
              </p>
            </div>
          </div>
        </Reveal>
      </SectionLayout>
    </>
  );
};

export default FeaturedSection;
