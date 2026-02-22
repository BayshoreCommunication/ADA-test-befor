"use client";

import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TransformationSection() {
  const slides = [
    // slide 1
    {
      before: "/images/transformation/MarkWood-before.png",
      after: "/images/transformation/MarkWood-after.png",
      profile: "/images/transformation/Mask.png",
      name: "Mark Wood",
      role: "IT Engineer",
      stats: {
        weight: { before: "210 lbs", after: "165 lbs" },
        waist: { before: '50"', after: '42"' },
        bmi: { before: "31.2 (Obese)", after: "24.5 (Normal)" },
        duration: { before: "12 Jun, 2025", after: "4 Months" },
      },
    },
    // slide 2
    {
      before: "/images/transformation/Emily-before.png",
      after: "/images/transformation/Emily-after.png",
      profile: "/images/transformation/Mask group (1).png",
      name: "Emily",
      role: "Entrepreneur",
      stats: {
        weight: { before: "210 lbs", after: "165 lbs" },
        waist: { before: '50"', after: '42"' },
        bmi: { before: "31.2 (Obese)", after: "24.5 (Normal)" },
        duration: { before: "12 Jun, 2025", after: "4 Months" },
      },
    },
    // slide 3
    {
      before: "/images/transformation/ashley-before.png",
      after: "/images/transformation/ashley-after.png",
      profile: "/images/transformation/ashley.png",
      name: "Ashley",
      role: "Entrepreneur",
      stats: {
        weight: { before: "273 lbs", after: "205 lbs" },
        waist: { before: '50"', after: '42"' },
        bmi: { before: "36.9", after: "32.4" },
        duration: { before: "January 2025", after: "Current" },
      },
    },
    // slide 4
    {
      before: "/images/transformation/margarita-before.png",
      after: "/images/transformation/margarita-after.png",
      profile: "/images/transformation/margarita-before.png",
      name: "Margarita",
      role: "Entrepreneur",
      stats: {
        weight: { before: "166 lbs", after: "118 lbs" },
        waist: { before: '50"', after: '42"' },
        bmi: { before: "29.3", after: "22.0" },
        duration: { before: "April 2025", after: "Current" },
      },
    },
    // slide 5
    {
      before: "/images/transformation/yunet-before.png",
      after: "/images/transformation/yunet-after.png",
      profile: "/images/transformation/yunet-before.png",
      name: "Yunet",
      role: "Entrepreneur",
      stats: {
        weight: { before: "203 lbs", after: "150 lbs" },
        waist: { before: '50"', after: '42"' },
        bmi: { before: "35.0", after: "27.7" },
        duration: { before: "April 2025", after: "Current" },
      },
    },
    // slide 6
    {
      before: "/images/transformation/candace-before.png",
      after: "/images/transformation/candace-after.png",
      profile: "/images/transformation/candace-before.png",
      name: "Candace",
      role: "Entrepreneur",
      stats: {
        weight: { before: "214 lbs", after: "163 lbs" },
        waist: { before: '50"', after: '42"' },
        bmi: { before: "35.7", after: "26.8" },
        duration: { before: "June 2024", after: "August 2025" },
      },
    },
    // slide 7
    {
      before: "/images/transformation/chris-before.png",
      after: "/images/transformation/chris-after.png",
      profile: "/images/transformation/chris-after.png",
      name: "Chris R",
      role: "Entrepreneur",
      stats: {
        weight: { before: "257 lbs", after: "192 lbs" },
        waist: { before: '50"', after: '42"' },
        bmi: { before: "36.2", after: "29.2" },
        duration: { before: "July 2024", after: "Current" },
      },
    },
    // slide 8
    {
      before: "/images/transformation/victor-before1.png",
      after: "/images/transformation/victor-after.png",
      profile: "/images/transformation/victor-after.png",
      name: "Victor A.",
      role: "Entrepreneur",
      stats: {
        weight: { before: "232 lbs", after: "185 lbs" },
        waist: { before: '50"', after: '42"' },
        bmi: { before: "31.5", after: "25.2" },
        duration: { before: "November 2024", after: "July 2025" },
      },
    },
  ];

  return (
    <div className="w-full flex justify-center bg-gray-50">
      <div className="w-full max-w-[1640px] md:my-16 my-8 px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Swiper Card (70%) */}
          <div className="w-full lg:w-[70%]">
            {/* Card Wrapper */}
            <Reveal className="bg-white rounded-2xl shadow-xl p-6 relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: ".prev-btn",
                  nextEl: ".next-btn",
                }}
                pagination={{
                  clickable: true,
                  el: ".custom-pagination",
                }}
                loop={true}
                className="relative"
              >
                {slides.map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Before/After */}
                      <div className="flex gap-4 flex-1">
                        {/* Before */}
                        <div className="flex flex-col items-center w-full">
                          <span className="text-primary font-semibold mb-2">
                            Before
                          </span>
                          <div className="rounded-lg overflow-hidden w-full h-[400px] relative">
                            <Image
                              src={slide.before}
                              alt="Before"
                              fill
                              className="object-cover object-center w-full h-full"
                            />
                          </div>
                        </div>

                        {/* After */}
                        <div className="flex flex-col items-center w-full">
                          <span className="text-primary font-semibold mb-2">
                            After
                          </span>
                          <div className="rounded-lg overflow-hidden w-full h-[400px] relative">
                            <Image
                              src={slide.after}
                              alt="After"
                              fill
                              className="object-cover object-center w-full h-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* User Info & Stats */}
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 relative rounded-full overflow-hidden">
                            <Image
                              src={slide.profile}
                              alt={slide.name}
                              fill
                              className="object-cover object-top w-full h-auto"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {slide.name}
                            </h3>
                            {/* <p className="text-sm text-gray-500">
                              {slide.role}
                            </p> */}
                          </div>
                        </div>

                        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden table-fixed">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="text-left px-3 py-2 w-1/3">
                                Title
                              </th>
                              <th className="text-left px-3 py-2 w-1/3">
                                Before
                              </th>
                              <th className="text-left px-3 py-2 w-1/3">
                                After
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-3 py-2">Weight</td>
                              <td className="px-3 py-2 text-gray-700">
                                {slide.stats.weight.before}
                              </td>
                              <td className="px-3 py-2 text-primary font-medium">
                                {slide.stats.weight.after}
                              </td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="px-3 py-2">Waist</td>
                              <td className="px-3 py-2">
                                {slide.stats.waist.before}
                              </td>
                              <td className="px-3 py-2 text-primary font-medium">
                                {slide.stats.waist.after}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2">BMI</td>
                              <td className="px-3 py-2">
                                {slide.stats.bmi.before}
                              </td>
                              <td className="px-3 py-2 text-primary font-medium">
                                {slide.stats.bmi.after}
                              </td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="px-3 py-2">Duration</td>
                              <td className="px-3 py-2">
                                {slide.stats.duration.before}
                              </td>
                              <td className="px-3 py-2 text-primary font-medium">
                                {slide.stats.duration.after}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Navigation */}
                <div className="prev-btn absolute top-1/2 left-0 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black text-white rounded-full cursor-pointer z-20">
                  ‹
                </div>
                <div className="next-btn absolute top-1/2 right-0 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black text-white rounded-full cursor-pointer z-20">
                  ›
                </div>

                {/* Pagination */}
                <div className="custom-pagination flex justify-center gap-2 mt-6 relative z-20"></div>
              </Swiper>
            </Reveal>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-[30%]">
            <Reveal
              tag="h2"
              className="text-3xl font-bold text-gray-900 leading-snug"
            >
              See The Real <span className="text-primary">Transformations</span>{" "}
              <br /> and Lasting Results
            </Reveal>
            <Reveal tag="p" className="text-gray-600 mt-4" delay={0.1}>
              Our expert doctor will tailor a treatment program to address your
              unique needs, ensuring you achieve peak wellness.
            </Reveal>
            <Reveal tag="div" delay={0.2}>
              <a
                href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-2 items-center px-6 py-3 mt-4 bg-black text-white text-sm font-medium rounded-full hover:bg-primary transition"
              >
                Schedule Today!
                <div className="bg-white shrink-0  rounded-full w-5 h-5 flex items-center justify-center text-black">
                  <svg
                    className="w-4 h-4 "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Pagination Styling */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #000 !important;
          opacity: 0.5;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #16a34a !important; /* Tailwind primary */
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
