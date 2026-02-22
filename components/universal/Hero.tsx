import React from "react";
import SectionLayout from "./SectionLayout";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import Image from "next/image";
// import { usePathname } from "next/navigation";

export const HeroWithImage = ({ heading, description, imgLink }: any) => {
  return (
    <SectionLayout bg="bg-[#F4F4F4]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12  items-center">
        <HeroLeft heading={heading} description={description} text={""} />
        <div className="px-[2rem] sm:px-[6rem] md:px-0">
          <Image
            src={imgLink}
            alt="marketing"
            width={800}
            height={800}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

const Hero = ({ heading, description }: any) => {
  return (
    <SectionLayout bg="bg-[#F4F4F4]">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-16">
        <HeroLeft heading={heading} description={description} text={""} />
        <HeroRight />
      </div>
    </SectionLayout>
  );
};

export const HeroIndividual: any = ({ heading, description, imgLink }: any) => {
  return (
    <SectionLayout bg="bg-[#F4F4F4]">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-16">
        <HeroLeft heading={heading} description={description} text={""} />
        <Image
          src={imgLink}
          alt="marketing"
          width={800}
          height={800}
          className="w-full h-auto"
        />
      </div>
    </SectionLayout>
  );
};

export default Hero;
