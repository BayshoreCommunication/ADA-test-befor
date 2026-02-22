"use client";

import { motion } from "framer-motion";

export default function Home() {
  // Variants for staggered animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex justify-center px-8 py-10 md:py-10">
      <motion.div
        className="max-w-[1440px] w-full 
        bg-gradient-to-r from-gray-600/20 via-white to-orange-600/10
        backdrop-blur-md bg-white/10 border border-white/20
        shadow-lg rounded-3xl overflow-hidden p-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

          {/* Left - Image */}
          <motion.div className="col-span-6 flex justify-center p-6" variants={item}>
            <img
              src="/image/smart-solution/smart.png"
              alt="Smart Website Solutions"
              className="rounded-xl shadow-md w-full max-w-3xl"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div className="col-span-6 space-y-6" variants={item}>
            <motion.h2
              className="text-[36px] font-bold leading-tight text-center sm:text-left uppercase"
              variants={item}
            >
              <span className="text-[#FE641A] uppercase">Data-Driven Strategies</span>{" "}
              <span className="text-black"> That Bring More Clients <br /> to Your Firm</span>
            </motion.h2>

            <motion.p className="text-gray-600 mt-6 text-center sm:text-left font-bold" variants={item}>
              Win more cases by reaching the right clients.
            </motion.p>

            <motion.p className="text-gray-600 mt-6 text-center sm:text-left" variants={item}>
              Our data-driven marketing strategies put your firm in front of people who matter. <span className="font-bold">From SEO to ads, we focus on results.</span>
            </motion.p>

            <motion.p className="text-gray-600 mt-4 text-center sm:text-left" variants={item}>
              No fluff—just strategies built to bring qualified leads straight to your law practice. <span className="font-bold">Grow with confidence.</span>
            </motion.p>

            <motion.p className="text-gray-600 mt-4 text-center sm:text-left" variants={item}>
              We track, optimize, and refine campaigns so your firm gets clients consistently.
            </motion.p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
