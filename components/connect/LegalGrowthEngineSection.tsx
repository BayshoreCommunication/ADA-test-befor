"use client";

import { memo } from "react";

const steps = [
  {
    step: "01",
    title: "STRATEGIZE",
    subtitle: "AI-Powered Precision",
    items: [
      "AI-driven keyword & competitor mapping",
      "Search intent analysis",
      "Zero guesswork. No wasted spend.",
    ],
  },
  {
    step: "02",
    title: "EXECUTE",
    subtitle: "Become the Authority",
    items: [
      "High-trust legal content & video",
      "Google, Maps, AI search dominance",
      "On-screen authority across platforms",
    ],
  },
  {
    step: "03",
    title: "OPTIMIZE",
    subtitle: "Data That Drives Growth",
    items: [
      "Continuous ROI optimization",
      "Monthly performance audits",
      "Scalable growth insights",
    ],
  },
];

const LegalGrowthEngineSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-8">
        {/* ================= Header ================= */}
        <div className="text-center max-w-7xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-black">
            The Legal <span className="text-primary">Growth Engine™</span>
          </h2>

          <p className="mt-4 text-[16px] lg:text-[18px] text-gray-600">
            A proven framework refined over 10+ years, built exclusively for law
            firms — not generic businesses.
          </p>
        </div>

        {/* ================= Cards ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative bg-white rounded-[30px] border border-gray-200 p-8 lg:p-12 shadow-sm"
            >
              {/* Step Number */}
              <div className="absolute -top-10 right-14 py-2 px-7 rounded-[16px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] flex items-center justify-center">
                <span className="text-[48px] font-bold text-primary">
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-6 text-[30px] font-bold text-black">
                {step.title}
              </h3>

              <p className="text-[18px] font-medium text-primary mt-1">
                {step.subtitle}
              </p>

              <ul className="mt-6 space-y-3 text-[16px] text-gray-700">
                {step.items.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(LegalGrowthEngineSection);
