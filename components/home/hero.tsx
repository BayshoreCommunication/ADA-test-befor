// app/(wherever)/Hero.tsx
"use client";

import Reveal from "@/components/motion/Reveal"; // <- global component
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
// import Stagger from "@/components/Stagger"; // optional

export default function Hero() {
  const loopText = ["Lose Weight", "Gain Energy", "Confidence"];

  return (
    <section className="relative py-12 text-center -mt-[170px] md:-mt-[205px]">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero/bg.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[1640px] mx-auto px-8 pt-[200px] sm:pt-[300px] md:pt-[200px] lg:pt-[200px] xl:pt-[200px] py-8 md:py-16">
        {/* H1 scroll reveal */}
        <Reveal tag="h1" className="text-3xl md:text-5xl font-bold mt-2">
          {/* rotating slot (unchanged) */}
          <span className="inline-grid align-baseline mr-3 ">
            {loopText.map((text, index) => {
              const per = 5;
              const totalCycle = per * loopText.length;
              return (
                <motion.span
                  key={index}
                  className="text-primary col-start-1 row-start-1 justify-self-end"
                  animate={{ opacity: [0, 1, 1, 0], x: [-150, 0, 0, 150] }}
                  transition={{
                    duration: per,
                    delay: index * per,
                    repeat: Infinity,
                    repeatDelay: totalCycle - per,
                    ease: "linear",
                    times: [0, 0.1, 0.9, 1],
                  }}
                >
                  {text}
                </motion.span>
              );
            })}
          </span>
          <span>Guided by Tampa Bay Professionals</span>
        </Reveal>

        {/* H4 scroll reveal (slightly delayed) */}
        <Reveal
          tag="p"
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-xl"
          delay={0.15}
        >
          Personalized medically-assisted weight loss solutions designed to help
          you achieve your goals safely and effectively.
        </Reveal>

        {/* Button scroll reveal (delayed a bit more) */}
        <Reveal tag="div" className="mt-6" delay={0.3}>
          <Link
            href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
            target="_blank"
            className="px-6 py-3 rounded-full bg-[#4E741E] text-white font-medium hover:bg-[#4E741E]/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center gap-2 w-[350px] mx-auto text-base"
          >
            <span>Not a patient yet? Book Now!</span>
            <div className="bg-white rounded-full p-1">
              <IoIosArrowForward className="text-[#4E741E] size-4" />
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
