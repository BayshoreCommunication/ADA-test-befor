import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";

const timelineData = [
  {
    img: "/assets/company-profile/timeline/2016.png",
    year: "2017",
    title: "02+ Members",
    description: "The journey begins with a clear vision.",
  },
  {
    img: "/assets/company-profile/timeline/2017.png",
    year: "2017",
    title: "04+ Members",
    description: "Appreciation from clients coming all the way.",
  },
  {
    img: "/assets/company-profile/timeline/2018.png",
    year: "2018",
    title: "08+ Members",
    description: "Inception of  SWOP Technologies.",
  },
  {
    img: "/assets/company-profile/timeline/2019.png",
    year: "2019",
    title: "15+ Members",
    description: "Transitioning from Co-working space to our own office.",
  },
  {
    img: "/assets/company-profile/timeline/2020.png",
    year: "2020",
    title: "25+ Members",
    description: "Transitioning from Co-working space to our own office.",
  },
  {
    img: "/assets/company-profile/timeline/2021.png",
    year: "2021",
    title: "35+ Members",
    description: "Remarkable Growth and Expansion.",
  },
  {
    img: "/assets/company-profile/timeline/2022.png",
    year: "2022",
    title: "60+ Members",
    description: "Innovative Technological Advancements.",
  },
  {
    img: "/assets/company-profile/timeline/2023.png",
    year: "2023",
    title: "75+ Members",
    description: "Global Reach and Industry Leadership.",
  },
];

const CompanyTimeline = () => {
  return (
    <div className="relative h-[45vh] md:h-[60vh] lg:h-[80vh] xl:h-[110vh] w-full">
      {/* Background Image */}
      <Image
        src="/assets/company-profile/company-timeline-bg.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      <SectionLayout bg="">
        <div className="absolute inset-0 flex flex-col  items-center justify-center gap-3 z-10">
          <h3 className="text-[28px] md:text-40px lg:text-[50px] px-14 text-white font-semibold  text-center w-full">
            Company Timeline
          </h3>
          {/* <div className="hidden lg:block"> */}
          <div>
            <Image
              src="/assets/company-profile/CT-summary.png"
              alt=""
              width={1920}
              height={1000}
            ></Image>
          </div>
          {/* <div className="  grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={120}
                  height={100}
                />
                <h3 className="text-white text-[22px] font-bold">
                  {item.year}
                </h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      </SectionLayout>
    </div>
  );
};

export default CompanyTimeline;
