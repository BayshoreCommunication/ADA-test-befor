import React from "react";
import SectionLayout from "../universal/SectionLayout";
import Image from "next/image";
import Reveal from "../motion/Reveal";

const HeroSection = () => {
  return (
    <>
      <SectionLayout bg="bg-[#ECECEC]  xl:py-14">
        <div className="grid grid-cols-1  lg:grid-cols-2 items-start lg:items-center gap-8">
          <div>
            <Reveal>
              <h1 className="text-[54px] font-light uppercase text-[#2B2B2B] hidden lg:block">
                Professional <br /> Corporate Headshots
                <br />
                <span className="font-black text-primary">
                  {" "}
                  & Photoshoots in Tampa
                </span>
              </h1>
            </Reveal>
            <Reveal>
              <h1 className="text-3xl md:text-4xl font-light uppercase text-[#2B2B2B] lg:hidden">
                Professional Corporate Headshots
                <span className="font-black text-primary">
                  {" "}
                  & Photoshoots in Tampa
                </span>
              </h1>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <div className="grid grid-cols-3 items-center gap-6 justify-center">
                <Image
                  src="/assets/corporate-photoshoot/1.png"
                  alt="corporate photoshoot image"
                  width={250}
                  height={300}
                  className=" pt-0 md:pt-10 2xl:pt-20"
                ></Image>
                <Image
                  src="/assets/corporate-photoshoot/2.png"
                  alt="corporate photoshoot image"
                  width={250}
                  height={300}
                  className=" pb-0 md:pb-10 2xl:pb-20"
                ></Image>
                <Image
                  src="/assets/corporate-photoshoot/3.png"
                  alt="corporate photoshoot image"
                  width={250}
                  height={300}
                  className=" pt-0 md:pt-10 2xl:pt-20"
                ></Image>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default HeroSection;
