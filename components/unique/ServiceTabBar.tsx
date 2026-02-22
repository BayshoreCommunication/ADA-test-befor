"use client";
import { individualHomeTabBarType } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import Service from "./services/Service";

import React from "react";

const ServiceTabBar = (individualHomeTabBar: individualHomeTabBarType) => {
  const [activeTab, setActiveTab] = useState(0);

  //   const check = services.map((elem) => console.log("object", elem.homeTabBar));

  const services = individualHomeTabBar.individualHomeTabBar;

  return (
    <>
      <div className="py-8">
        <div className="flex justify-between items-center rounded-[10px] custom-shadow px-[1rem] sm:px-[2rem] md:px-[2rem] py-[1.6rem] gap-4">
          {services.map((service, index) => (
            <button
              className={`flex flex-col items-center  py-4 px-2 md:px-8 rounded-[10px] cursor-pointer ${
                activeTab === index ? "custom-shadow " : ""
              }`}
              key={index}
              onClick={() => setActiveTab(index)}
            >
              <Image
                // src="/assets/expertise-active.svg"
                src={service.titleIcon}
                alt="svg-logo"
                width={100}
                height={100}
                className={`md:h-[26px] md:w-[26px] h-[14px] w-[14px] ${
                  activeTab != index && "grayscale" ? "" : ""
                }`}
              />
              <p className="py-2 text-[1.2rem] text-[#A2A2A2] text-center font-bold">
                {service.titleTab}
              </p>
            </button>
          ))}
        </div>

        <div className="py-4">
          {services.map(
            (service, index) =>
              activeTab === index && (
                <>
                  <div className="mt-[4rem]" key={index}>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                      <div className="rounded-[10px]  px-4 pb-16 ">
                        {service.contentTab}
                      </div>
                      <div className="row-start-1 md:col-start-2">
                        <Image
                          src={service.titleImage}
                          alt="tab-1"
                          width={400}
                          height={400}
                          className="w-full h-full"
                          // className="w-[543] h-[226]"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceTabBar;
