"use client";

import Reveal from "@/components/motion/Reveal";
import Link from "next/link";
export default function PainRelief() {
  return (
    <div className="w-full flex justify-center px-8">
      <div className="relative w-full max-w-[1640px] md:my-16 my-8   bg-[url('/images/pain/bg.png')] bg-cover bg-center rounded-3xl">
        {/* Content */}
        <div className="bg-black/50 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full md:w-[50%]">
          {/* Text Section */}
          <div className="flex-1 text-white">
            <Reveal tag="h1" className="text-3xl font-bold leading-snug">
              Get <span className="text-primary">Pain Relief</span> Today With
              Tampa Bays Chiropractor
            </Reveal>
            <Reveal
              tag="p"
              className="mt-4 text-sm md:text-base text-gray-200"
              delay={0.1}
            >
              Take the first step toward a healthier, happier you with our
              personalized, medically guided weight loss programs.
            </Reveal>
            <Reveal tag="div" delay={0.2}>
              <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-green-600 transition">
                <Link href="https://www.jachimekchiro.com" target="_blank">
                  Click Here To Learn More
                  <span>→</span>
                </Link>{" "}
              </button>
            </Reveal>
          </div>

          {/* Optional Image / Illustration on right */}
          {/* Uncomment if you have a separate image to display on right */}
          {/* <div className="w-1/2 relative h-48 md:h-64">
            <Image src={bgImage} alt="Illustration" fill className="object-contain" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
