"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ConnectHeroSection = () => {
  const handleScrollToCalendly = () => {
    const section = document.getElementById("calendly");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {/* ================= HERO ================= */}
      <div className="relative w-full flex items-center justify-center min-h-[70vh] h-full">
        <Image
          src="/connect/hero-bg.png"
          alt="Hero BG"
          fill
          priority
          className="absolute inset-0 object-cover object-bottom  "
        />

        <div className="max-w-[1640px] mx-auto px-8 w-full pt-10 lg:pt-20 xl:pt-32">
          <div className="relative">
            {/* 🔑 ONLY CHANGE IS HERE */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              {/* TEXT */}
              <div className="flex flex-col items-center justify-between text-center gap-10   w-full mb-14 lg:mb-20 xl:mb-24 max-w-7xl mx-auto">
                <span className="px-10 py-3 rounded-full bg-[#FE641A]/10 border-[#FE641A]/80 border text-[#FE641A] ">
                  10+ Years of Legal Growth Engineering
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-[#010205] text-center leading-normal">
                  You&apos;ve Never Seen{" "}
                  <span className="text-[#FE641A]">Law-Firm Growth</span>{" "}
                  Engineered Like This
                </h1>

                <p className="text-[#636363] font-medium ">
                  Most law firms rely on referrals, outdated SEO, or scattered
                  ads. We build{" "}
                  <span className="text-[#010205] ">
                    predictable growth systems
                  </span>{" "}
                  that make your firm the obvious choice — across Google, AI
                  platforms, and high-intent search moments.
                </p>

                <button
                  onClick={handleScrollToCalendly}
                  className="group relative inline-flex items-center gap-2 px-14 py-6 rounded-full
             overflow-hidden bg-[#FE641A] text-white font-semibold w-fit mt-4 hover:scale-105 transition duration-300"
                >
                  Schedule a Private Strategy Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ConnectHeroSection);
