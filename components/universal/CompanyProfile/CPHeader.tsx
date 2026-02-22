import Image from "next/image";
import React from "react";
import SectionLayout from "../SectionLayout";

const CPHeader = () => {
  return (
    <div className="relative h-[80vh]  xl:-[100vh]  w-full">
      {/* Background Image */}
      <Image
        src="/assets/company-profile/header-bg.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Content */}
      <SectionLayout bg="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/assets/company-profile/cp-white-logo.png"
            alt="Logo"
            width={300}
            height={100}
            quality={100}
            className="w-[30%] mx-auto"
          />
        </div>

        {/* Title Text */}

        <div className=" text-center bg-[rgba(0,0,0,0.6)] p-4 rounded-lg ">
          <h1 className="text-white text-[24px] md:text-[40px] lg:!text-[70px] font-bold uppercase ">
            Build Your Digital Media Presence with a Dedicated Workforce
          </h1>
        </div>

        <div className="text-center mt-10 lg:mt-20">
          <h3 className="text-white text-[28px] md:text-40px lg:text-[50px] px-14 font-medium pb-4">
            Achieve Growth, Online Success
          </h3>
          <p className="text-white  text-[16px] !font-light  lg:text-[18px]">
            As a leading provider of digital marketing and software solutions,
            we harness our creative resources to specialize in comprehensive
            branding, innovative marketing strategies, meticulous planning and
            implementation, cutting-edge digital marketing, and dynamic social
            media management. We alsoexcel in bespoke software design, seamless
            application development, and efficient event creationand management.
            Our holistic approach ensures that your brand stands out and thrives
            in the digital landscape
          </p>
        </div>
      </SectionLayout>
    </div>
  );
};

export default CPHeader;
