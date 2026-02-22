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

export default function Blueprint() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-8 2xl:px-0 py-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-[36px] font-bold text-gray-900 uppercase leading-snug">
            The Blueprint for Law Firm <br />
            <span className="text-[#FE641A] px-2">Growth & Success</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="text-green-600 text-4xl"
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
              boxShadow: "0px 8px 30px rgba(0,0,0,0.2)",
            }}
            className="rounded-2xl p-8 transition-all duration-500
                      bg-gradient-to-r from-gray-600/30 via-white/20 to-orange-600/20
                       backdrop-blur-xl border border-white/30
                       shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
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
                  <span className="text-orange-600">✓</span>{" "}
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
              boxShadow: "0px 8px 30px rgba(0,0,0,0.2)",
            }}
            className="rounded-2xl p-8 transition-all duration-500
                       bg-gradient-to-r from-gray-600/30 via-white/20 to-orange-600/20
                       backdrop-blur-xl border border-white/30
                       shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
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
                  <span className="text-[#FE641A]">✓</span>{" "}
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
          className="rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 mt-8
                     bg-gradient-to-r from-gray-600/30 via-white/20 to-orange-600/20    
                     backdrop-blur-xl border border-white/30
                     shadow-[0_4px_30px_rgba(0,0,0,0.15)] transition-all duration-500"
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
            <h3 className="font-bold text-lg mb-2 text-gray-700">The Endgame?</h3>
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
    </div>
  );
}
