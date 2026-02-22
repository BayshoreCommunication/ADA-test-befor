"use client";

import { memo } from "react";
import Image from "next/image";
import CountUp from "react-countup";

const ConnectHeroSection = () => {
  return (
    // 🔒 FIX: overflow-hidden added
    <div className="relative w-full min-h-[270px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/connect/count-up-bg.png"
        alt="Hero BG"
        fill
        priority
        sizes="100vw"
        // 🔒 FIX: left-0 right-0 prevents image bleed
        className="absolute inset-0 left-0 right-0 object-cover object-bottom"
      />

      <div className="relative max-w-[1640px] mx-auto px-4 sm:px-6 md:px-8 w-full py-10 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-white text-center">
          {/* Item 1 */}
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-[32px] lg:text-[60px] font-bold">
              <CountUp end={10} duration={2} />+
            </h3>
            <p className="text-[18px] lg:text-[20px] opacity-90">
              Years Experience
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-[32px] lg:text-[60px] font-bold">
              <CountUp end={250} duration={2.5} />+
            </h3>
            <p className="text-[18px] lg:text-[20px] opacity-90">
              Happy Clients
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-[32px] lg:text-[60px] font-bold">
              <CountUp end={500} duration={3} />+
            </h3>
            <p className="text-[18px] lg:text-[20px] opacity-90">
              Successful Cases
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ConnectHeroSection);
