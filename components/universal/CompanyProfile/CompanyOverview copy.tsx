import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";

const CompanyOverview = () => {
  return (
    <SectionLayout bg="">
      <div className=" p-10 md:p-14 lg:py-20 lg:px-40 bg-[#222222] rounded-[30px] lg:rounded-[60px] overflow-hidden flex flex-col-reverse items-center">
        <div className="flex-1 ps-16 border-l-4 border-[#FF7422]">
          <h3 className="text-[28px] md:text-40px lg:text-[50px] px-14 text-white font-medium mb-4 lg:mb-8">
            Company Overview
          </h3>
          <p className="text-white font-medium text-[20px]">
            Bayshore Communication is a company that offers a wide range of
            services aimed at helping businesses grow. Their offerings include
            Growth Marketing, Software Solutions, Offshore Office Support, and
            Content Development. They focus on providing high-quality results
            that meet clients marketing needs, goals, and budgets, combining
            expertise, creativity, and passion to make businesses shine.
          </p>
        </div>
        <div className="flex-1 ">
          <Image
            src="/assets/company-profile/company-overview.png"
            alt="company overview"
            width={380}
            height={400}
            className="mx-auto"
          ></Image>
        </div>
      </div>
    </SectionLayout>
  );
};

export default CompanyOverview;
