import React from "react";
import SectionLayout from "../universal/SectionLayout";
import Image from "next/image";
import Reveal from "../motion/Reveal";

const someWorkData = [
  {
    imageSRC: "/assets/corporate-photoshoot/works-01.png",
    imageALT: "Corporate Work Image",
  },
  {
    imageSRC: "/assets/corporate-photoshoot/works-02.png",
    imageALT: "Corporate Work Image",
  },
  {
    imageSRC: "/assets/corporate-photoshoot/works-03.png",
    imageALT: "Corporate Work Image",
  },
  {
    imageSRC: "/assets/corporate-photoshoot/works-04.png",
    imageALT: "Corporate Work Image",
  },
  {
    imageSRC: "/assets/corporate-photoshoot/works-05.png",
    imageALT: "Corporate Work Image",
  },
  {
    imageSRC: "/assets/corporate-photoshoot/works-06.png",
    imageALT: "Corporate Work Image",
  },
  {
    imageSRC: "/assets/corporate-photoshoot/works-07.png",
    imageALT: "Corporate Work Image",
  },
  {
    imageSRC: "/assets/corporate-photoshoot/works-08.png",
    imageALT: "Corporate Work Image",
  },
];
const SomeCorporateWork = () => {
  return (
    <>
      <SectionLayout bg="bg-white lg:pb-14">
        <Reveal>
          <div className="mb-10">
            <h2 className="text-[30px] md:text-[36px] lg:text-[40px] font-semibold uppercase text-center mb-4 ">
              Some Corporate Work
            </h2>
            <p className="text-center max-w-5xl mx-auto">
              Discover our latest corporate photography projects, including team
              portraits, headshots, and office shots that enhance your business
              image.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8 justify-stretch">
            {someWorkData.map((works, index) => (
              <div key={index}>
                <Image
                  src={works?.imageSRC}
                  alt={works?.imageALT}
                  width={330}
                  height={490}
                  className="w-full"
                ></Image>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionLayout>
    </>
  );
};

export default SomeCorporateWork;
