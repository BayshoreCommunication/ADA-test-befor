import React from "react";
import Image from "next/image";

const WhiteLabel = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 mt-0 md:mt-[-80px]">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-20 md:mb-[400px]">
        <h1 className="text-[24px] sm:text-[32px] md:text-[36px] font-bold text-center uppercase leading-tight">
          Our 3-Step <span className="text-[#FE641A]">Success Recipe</span>
        </h1>
        <p className="text-[16px] sm:text-[18px] text-center mt-2 ">
          Built for Agencies. Designed to Deliver.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 md:py-16 text-base mt-[-50px] md:mt-[-200px]">
        {/* Grid → 1 column on mobile, 3 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-y-6 md:gap-y-0">
          {/* Card 1 */}
          <div className="flex flex-col items-center px-4 md:gap-12 gap-0">
            <div className="relative flex items-center justify-center rounded-full mb-4">
              <Image
                src="/image/white-label/Frame3.png"
                alt="icon"
                width={445}
                height={390}
                className="w-[170px]  md:w-[280px]  h-auto"
              />
            </div>
            <p className="md:order-first text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 max-w-sm md:max-w-xl leading-relaxed">
              We take time to deeply <span className="text-[#FE641A] font-bold">understand your business, industry, and
                goals.</span> Then, we craft a tailored digital strategy that aligns with
              your vision.
            </p>
          </div>

          {/* Card 2 (highlighted) */}
          <div className="flex flex-col items-center px-4 py-4 rounded-xl md:mt-[-200px] md:gap-12 gap-0">
            <div className="relative flex items-center justify-center rounded-full mb-4">
              <Image
                src="/image/white-label/Frame.png"
                alt="icon"
                width={400}
                height={400}
                className="w-[170px] md:w-[280px]  h-auto"
              />
            </div>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 max-w-sm md:max-w-xl leading-relaxed">
              Create & Execute Our team designs, develops, and launches
              <span className="text-[#FE641A] font-bold"> impactful solutions focused on performance</span> and results.
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
              Optimize & Grow We don&apos;t stop at launch. <span className="text-[#FE641A] font-bold">We continuously monitor,
                analyze, and refine campaigns</span> to maximize ROI and drive
              sustainable growth.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center mt-8 sm:mt-10 md:mt-12 text-gray-600 italic text-[16px] sm:text-lg md:text-xl lg:text-3xl font-bold px-4 mt-10 mt:mb-0">
          Skip the stress. Skip the follow-ups. We handle your marketing with speed,
          <br className="hidden sm:block" /> precision, and results you can count on.
        </p>
      </div>
    </div>
  );
};

export default WhiteLabel;
