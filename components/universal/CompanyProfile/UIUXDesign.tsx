import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";

const uiuxData = [
  {
    img: "/assets/company-profile/design/design1.png",
  },
  {
    img: "/assets/company-profile/design/design2.png",
  },
  {
    img: "/assets/company-profile/design/design3.png",
  },
  {
    img: "/assets/company-profile/design/design4.png",
  },
  {
    img: "/assets/company-profile/design/design5.png",
  },
  {
    img: "/assets/company-profile/design/design6.png",
  },
];

const UIUXDesign = () => {
  return (
    <div>
      <div className="relative h-[30vh]  lg:h-[50vh] w-full">
        {/* Background Image */}
        <Image
          src="/assets/company-profile/webdev-heading.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Content */}
        <div className=" absolute inset-0 flex  items-center justify-around z-10 py-20">
          {/* Title Text */}
          <SectionLayout bg="">
            <div className=" w-full   lg:py-20 lg:px-10 text-center bg-[rgba(0,0,0,0.6)] p-4 rounded-lg">
              <h1 className="text-white text-[28px] md:text-40px lg:text-[50px] px-14 font-bold uppercase w-full">
                design DEVELOPMENT
              </h1>
            </div>
          </SectionLayout>
        </div>
      </div>
      <SectionLayout bg="">
        <div className="flex flex-col gap-10">
          {uiuxData.map((item, index) => (
            <div
              key={index}
              className="timeline-item w-full lg:max-w-[60%] mx-auto"
            >
              <Image
                src={item.img}
                alt={item.img}
                width={1920}
                height={1080}
                className="w-full mx-auto"
              />
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default UIUXDesign;
