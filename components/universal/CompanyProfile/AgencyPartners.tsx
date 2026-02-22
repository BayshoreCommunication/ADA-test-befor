import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";

const AgencyPartners = () => {
  return (
    <SectionLayout bg="">
      <div>
        <h2 className="text-[28px] md:text-40px lg:text-[50px] px-14 text-white font-medium uppercase text-center mb-6 lg:mb-10">
          Official Agency Partners for
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-20 justify-evenly">
          <Image
            src="/assets/company-profile/cloudflare.png"
            alt=""
            width={400}
            height={200}
            className="rounded-3xl"
          ></Image>
          <Image
            src="/assets/company-profile/meta.png"
            alt=""
            width={400}
            height={200}
            className="rounded-3xl"
          ></Image>
          <Image
            src="/assets/company-profile/google-ads.png"
            alt=""
            width={400}
            height={200}
            className="rounded-3xl"
          ></Image>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AgencyPartners;
