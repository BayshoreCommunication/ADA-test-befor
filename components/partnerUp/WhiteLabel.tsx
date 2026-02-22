"use client"
import React from "react";
import Image from "next/image";

const WhiteLabel = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 mt-0 md:mt-[-80px]">
      <div>
        <Image
          src="/image/hero/graphic.png"
          alt="Description"
          width={1000}
          height={800}
          className="max-w-6xl w-full h-auto mb-10 md:mb-12 mx-auto "
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 md:py-16 text-base mt-[-50px] md:mt-[-200px]">
        {/* CTA Button */}
        <div className="flex justify-center items-center max-w-6xl w-full mx-auto py-10 mb-32">
          <button
            onClick={() => {
              document
                .getElementById("calendly-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary hover:bg-primary/90 text-white font-bold md:text-5xl text-3xl uppercase rounded-full px-8 py-4 shadow-md transition duration-300 mt-[-40px] md:mt-0"
          >
            Claim Your Free Shoots + Year Plan
          </button>
        </div>
        {/* Header */}
        <div className="flex flex-col justify-center items-center mb-20 md:mb-[200px]">
          <h1 className="text-[24px] sm:text-[32px] md:text-[36px] font-bold text-center uppercase leading-tight">
            Our 3-Step <span className="text-[#FE641A]">Success Recipe</span>
          </h1>
          <p className="text-[16px] sm:text-[18px] text-center mt-2 ">
            Built for Agencies. Designed to Deliver.
          </p>
        </div>

        {/* Grid → 1 column on mobile, 3 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-y-6 md:gap-y-0">
          {/* Card 1 */}
          <div className="flex flex-col items-center px-4 md:gap-12 gap-0">
            <div className="relative flex items-center justify-center rounded-full mb-4">
              <Image
                src="/image/white-label/Frame1.png"
                alt="icon"
                width={445}
                height={390}
                className="w-[170px]  md:w-[280px]  h-auto"
              />
            </div>
            <p className="md:order-first text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 max-w-sm md:max-w-xl leading-relaxed">
              We immerse ourselves in your business, industry, and goals to gain
              a deep understanding. From there, we design a customized digital
              strategy that aligns with your vision.
            </p>
          </div>

          {/* Card 2 (highlighted) */}
          <div className="flex flex-col items-center px-4 py-4 rounded-xl md:mt-[-200px] md:gap-12 gap-0">
            <div className="relative flex items-center justify-center rounded-full mb-4">
              <Image
                src="/image/white-label/Frame2.png"
                alt="icon"
                width={400}
                height={400}
                className="w-[170px] md:w-[280px]  h-auto"
              />
            </div>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 max-w-sm md:max-w-xl leading-relaxed">
              Create & Execute - Our team strategizes, builds, and delivers
              powerful solutions engineered for performance and measurable
              results.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center px-4 md:gap-12 gap-0">
            <div className="relative flex items-center justify-center rounded-full mb-4">
              <Image
                src="/image/white-label/Frame3.png"
                alt="icon"
                width={745}
                height={600}
                className="w-[170px]  md:w-[280px]  h-auto  mt-0"
              />
            </div>
            <p className="md:order-first text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 max-w-sm md:max-w-xl leading-relaxed">
              Optimize & Grow - We don&apos;t stop at launch. We continuously
              monitor, analyze, and refine campaigns to maximize ROI and drive
              sustainable growth.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center mt-8 sm:mt-10 md:mt-12 text-gray-600 italic text-[16px] sm:text-lg md:text-xl lg:text-3xl font-bold px-4 md:mb-0">
          Skip the stress. Skip the follow-ups. We handle your marketing with
          speed,
          <br className="hidden sm:block" /> precision, and results you can
          count on.
        </p>

        <Image
          src="/image/white-label/seoGraph.jpeg"
          alt="icon"
          width={1000}
          height={800}
          className="w-full  h-auto my-16 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default WhiteLabel;
