"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function BlueprintSection() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-8  2xl:px-0 py-16  xl:px-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl lg:text-[36px] xl:text-[38px] font-bold text-gray-900">
            The Blueprint for{" "}
            <span className="text-black">Law Firm Growth & Success</span>
          </h2>
          <div className="flex justify-center mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="text-primary text-4xl"
                >
                  ★
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Left Card */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
            }}
            className="bg-[#F9F7F7] rounded-2xl p-8 shadow-sm transition-all duration-500"
          >
            <ul className="space-y-3 text-gray-700">
              {[
                "Attract High-Value Clients – A proven system for steady case flow.",
                "Dominate Your Niche – Be the top choice in your practice area.",
                "Master Organic Growth – Get leads on autopilot, no ad spend.",
                "Fill Your Calendar – 30-100+ client calls per month.",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <span className="text-primary">✓</span>{" "}
                  <span className="font-bold">{text.split("–")[0].trim()}</span>{" "}
                  – {text.split("–")[1]}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Card */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
            }}
            className="bg-[#FDF3F2] rounded-2xl p-8 shadow-sm transition-all duration-500"
          >
            <ul className="space-y-3 text-gray-700">
              {[
                "Convert More Leads – Turn prospects into paying clients.",
                "Scale Efficiently – Grow beyond referrals & guesswork.",
                "Maximize Profits – More clients, lower costs.",
                "Think Like a Leader – Strategies top firms use to win.",
                "Streamline & Scale – A repeatable system for lasting success.",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <span className="text-primary">✓</span>{" "}
                  <span className="font-bold">{text.split("–")[0].trim()}</span>{" "}
                  – {text.split("–")[1]}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#FDF3F2] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 mt-8 shadow-sm"
        >
          {/* Left Graphic */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center md:w-1/4"
          >
            <Image
              className="w-full max-w-[300px] md:max-w-[353px] h-auto"
              src="images/blueprint/image3.png"
              alt="alt"
              width={353}
              height={263}
            />
          </motion.div>

          {/* Text Section */}
          <div className="md:w-3/4">
            <h3 className="font-bold text-[20px]mb-2">The Endgame?</h3>
            <p className="text-gray-700 mb-3">
              A thriving, effortlessly growing law firm with more{" "}
              <span className="font-bold">cases, revenue,</span> and{" "}
              <span className="font-bold">freedom.</span>
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-bold">Risk-Free Guarantee</span> – Proven
              strategies, step-by-step training, and a winning community.
            </p>
            <p className="text-gray-700">
              Ready to go from unpredictable to unstoppable?{" "}
              <span className="font-bold">Schedule a call now!</span>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="w-full flex justify-center py-8 px-8 mt-[-40px]">
        <div
          className=" relative w-full max-w-[1440px] mx-auto rounded-xl overflow-hidden px-8 py-12 text-center text-white"
          style={{
            backgroundImage: "url('/images/home/image24.png')", // replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50 "></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto ">
            <h2 className="text-[20px] sm:text-[38px] font-bold mb-4">
              <span className="bg-primary text-white px-2 py-1 rounded">
                Consultations
              </span>{" "}
              for Our Service
            </h2>
            <p className="text-[14px] sm:text-[18px] text-white/70 mb-6">
              Consultations for our service are free and easy. Simply click
              below to fix a suitable date and time that works for you.
              We&apos;ll contact you shortly. Don&apos;t miss this opportunity.
            </p>

            <button
              className="text-[10px] sm:text-xl bg-primary hover:bg-orange-700 transition-colors text-white font-semibold px-6 py-3 rounded-md shadow-md"
              onClick={() => {
                const section = document.getElementById("schedule");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              BOOK NOW 30 MIN FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Images */}
      <div className="flex items-center justify-center flex-col px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            className="mb-20 w-full max-w-[200px] sm:max-w-[400px] h-auto"
            src="images/blueprint/logo.png"
            alt="alt"
            width={400}
            height={90}
          />
        </motion.div>
      </div>
    </div>
  );
}
