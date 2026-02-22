"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const ResultsSection = () => {
  return (
    <div>
      {/* ================= HERO ================= */}
      <div className="relative w-full flex items-center justify-center min-h-[70vh] h-full">
        <Image
          src="/connect/Results-Section-bg.png"
          alt="Hero BG"
          fill
          priority
          className="absolute inset-0 object-cover object-bottom  "
        />

        <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-8xl">
          {/* ================= Header ================= */}
          <div className="text-center max-w-8xl mx-auto mb-16 ">
            <h2 className="text-[32px] lg:text-[48px] font-bold text-black">
              Results That <span className="text-primary">Speak</span> for
              Themselves
            </h2>

            <p className="mt-4 text-[16px] lg:text-[18px] text-gray-600">
              Real outcomes from real law firms. Your results will vary by
              market and firm dynamics.
            </p>
          </div>

          {/* ================= Cards ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="bg-white rounded-[30px] border border-gray-200 p-8 lg:p-14 shadow-sm">
              {/* Badge */}

              <span className="px-10 py-4 rounded-full bg-[#FE641A]/10 border-[#FE641A]/80 border text-[#FE641A] inline-block ">
                Immigration Law Firm
              </span>

              {/* Title */}
              <h3 className="text-[30px] font-bold text-black mb-6 mt-5">
                Mid-Size Immigration Law Firm
              </h3>

              {/* Stats */}
              <ul className="space-y-6">
                <li className="flex items-center gap-3 text-[16px] text-gray-700">
                  <AiOutlineSafetyCertificate size={24} color="#FE641A" />

                  <span>
                    <strong>47,000+</strong> YouTube views
                  </span>
                </li>

                <li className="flex items-center gap-3 text-[16px] text-gray-700">
                  <AiOutlineSafetyCertificate size={24} color="#FE641A" />

                  <span>
                    <strong>55,000+</strong> organic impressions in 90 days
                  </span>
                </li>

                <li className="flex items-center gap-3 text-[16px] text-gray-700">
                  <AiOutlineSafetyCertificate size={24} color="#FE641A" />

                  <span>
                    Ranked <strong>#1</strong> for competitive immigration terms
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[30px] border border-gray-200 p-8 lg:p-14 shadow-sm">
              {/* Badge */}

              <span className="px-10 py-4 rounded-full bg-[#FE641A]/10 border-[#FE641A]/80 border text-[#FE641A] inline-block ">
                Immigration Law Firm
              </span>

              {/* Title */}
              <h3 className="text-[30px] font-bold text-black mb-6 mt-5">
                Mid-Size Immigration Law Firm
              </h3>

              {/* Stats */}
              <ul className="space-y-6">
                <li className="flex items-center gap-3 text-[16px] text-gray-700">
                  <AiOutlineSafetyCertificate size={24} color="#FE641A" />

                  <span>
                    <strong>220+</strong>  qualified leads generated
                  </span>
                </li>

                <li className="flex items-center gap-3 text-[16px] text-gray-700">
                  <AiOutlineSafetyCertificate size={24} color="#FE641A" />

                  <span>
                    <strong>$350,000+</strong>   projected case value
                  </span>
                </li>

                <li className="flex items-center gap-3 text-[16px] text-gray-700">
                  <AiOutlineSafetyCertificate size={24} color="#FE641A" />

                  <span>
                    <strong>Page-one rankings</strong>  for high-value keywords
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className="pt-4 text-[16px] lg:text-[18px] text-gray-600 text-center lg:pt-8 max-w-5xl mx-auto">
              *Results vary by market. Strategy is tailored per firm. Your
              competitive landscape shapes your growth trajectory.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ResultsSection);
