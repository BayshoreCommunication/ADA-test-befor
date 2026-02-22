import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";

const OurPartners = () => {
  return (
    <div>
      <SectionLayout bg="">
        <h2 className="text-[28px] md:text-40px lg:text-[50px] font-medium text-white text-center mb-10 uppercase">
          Our Partners
        </h2>
        <div className="flex flex-col gap-10">
          <div className="timeline-item w-full lg:max-w-[60%] mx-auto">
            <Image
              src="/assets/company-profile/our-partners.png"
              alt=""
              width={1920}
              height={1080}
              className="w-full mx-auto"
            />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default OurPartners;
