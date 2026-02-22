"use client";
import React from "react";
import Image from "next/image";
import { InlineWidget } from "react-calendly";

const Schedule = () => {
  const steps = [
    {
      icon: "/images/schedule/image1.svg",
      description: (
        <p>
          We’ll walk you through the exact <br /> system we use to{" "}
          <span className="font-bold text-black">generate consistent legal leads,</span> so
          you can apply it yourself whether you work with us or not.
        </p>
      ),
    },
    {
      icon: "/images/schedule/image2.svg",
      description: (
        <p>
          You’ll see real numbers, case studies, and{" "}
          <span className="font-bold text-black">data driven results</span>with flowcharts
          & success metrics that show how our strategy works.
        </p>
      ),
    },
    {
      icon: "/images/schedule/image3.svg",
      description: (
        <p>
          <span className="font-bold text-black">Learn the step-by-step</span> <br /> process that’s been tested and refined to ensure sustainable growth for law firms like yours.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-[90vh] px-8  xl:px-24" id="schedule">
      <div className="w-full mx-auto">
        {/* Heading */}
        <div className="max-w-[1440px] mx-auto mt-10 text-center flex flex-col items-center">
          <h1 className="text-[20px] lg:text-[36px] xl:text-[38px] font-bold leading-normal">
            <span className="bg-primary text-white px-2">Schedule</span> Your
            Discovery Call
          </h1>
          <p className="text-base mt-4 text-center">
            Your responses are strictly confidential and will be used to tailor
            a customized strategy for you before our call.
          </p>
        </div>

        {/* Calendly Widget */}
        <div className="m-10 mb-16 w-full max-w-[800px] mx-auto rounded-xl h-[800px] overflow-hidden ">
          <InlineWidget
            url="https://calendly.com/bayshorepartners/45min"
            styles={{
              width: "100%",
              height: "100%", // fill parent
              minHeight: "600px", // match parent height
              border: "0",
              display: "block",
            }}
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "#0b7788",
              textColor: "4d5055",
            }}
          />
        </div>

        {/* Learn Section */}
        <div className=" max-w-auto mx-auto text-center flex flex-col items-center">
          <h1 className="text-[20px] sm:text-[38px] font-bold mb-4">
            What You’ll Learn on Your Discovery Call:
          </h1>
          <p className="text-base text-gray-500 mb-4">
            Not a sales pitch. No fluff, no gimmicks—
          </p>
          <p className="text-gray-500 mb-10">
            just real, proven strategies that helped{" "}
            <span className="font-bold text-gray-800">100+ law firms</span>{" "}
            across the U.S. attract high-value <br /> clients through{" "}
            <span className="font-bold text-gray-800">
              organic marketing & SEO
            </span>
            .
          </p>
        </div>

        {/* Steps Section */}
        <div className="w-full max-w-[1440px] mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="w-20 h-20 mb-16">
                  <Image
                    src={step.icon}
                    alt={`Step ${idx + 1}`}
                    width={48}
                    height={48}
                    className="mx-auto"
                  />
                </div>

                <p className="text-gray-600 text-[18px]   bg-white p-6">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
