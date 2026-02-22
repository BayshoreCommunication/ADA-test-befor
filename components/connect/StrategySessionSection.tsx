"use client";

import { InlineWidget } from "react-calendly";

export default function StrategySessionSection() {
  return (
    <section id="calendly" className="w-full bg-white px-8 py-8 md:py-16">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[32px] lg:text-[48px] font-bold text-black">
          Schedule a Private{" "}
          <span className="text-[#FE641A]">Strategy Session</span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-[16px] lg:text-[18px] text-gray-600 max-w-7xl mx-auto">
          This is not a sales call. It’s a focused strategy discussion to
          identify visibility gaps, evaluate growth potential, and determine if
          our system fits your firm.
        </p>

        {/* Info Cards */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 bg-gradient-to-br from-[#F5F5F5] to-[#FFF7F3] max-w-5xl mx-auto rounded-2xl">
          <div className="flex-1 max-w-[220px] mx-auto px-6 py-4">
            <p className="text-[24px] font-semibold text-[#FE641A]">30–45</p>
            <p className="text-[18px] text-gray-600 mt-1">Minutes</p>
          </div>

          <div className="flex-1 max-w-[220px] mx-auto px-6 py-4">
            <p className="text-[24px] font-semibold text-[#FE641A]">VIRTUAL</p>
            <p className="text-[18px] text-gray-600 mt-1">or In-Office</p>
          </div>

          <div className="flex-1 max-w-[220px] mx-auto px-6 py-4">
            <p className="text-[24px] font-semibold text-[#FE641A]">LIMITED</p>
            <p className="text-[18px] text-gray-600 mt-1">Slots / Month</p>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-[18px] text-gray-700">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#FE641A]" />
            <p>Limited strategy slots per month</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#FE641A]" />
            <p>One firm per market (where applicable)</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#FE641A]" />
            <p>No obligation to proceed</p>
          </div>
        </div>

        {/* Calendly */}
        <div className="mt-12 mb-16 w-full max-w-[800px] mx-auto rounded-xl overflow-hidden h-[800px]">
          <InlineWidget
            url="https://calendly.com/bayshorec/complimentary-growth-session-on-site"
            styles={{
              width: "100%",
              height: "100%",
              border: "0",
            }}
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "FE641A",
              textColor: "4d5055",
            }}
          />
        </div>
      </div>
    </section>
  );
}
