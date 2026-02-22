"use client";

import { motion } from "framer-motion";

import Blueprint from "@/components/businessGrowth/Blueprint";
import HeroSection from "@/components/businessGrowth/HeroSection";
import Marketing from "@/components/businessGrowth/Services";
import ResultsSection from "@/components/businessGrowth/ResultsSection";
import Schedule from "@/components/businessGrowth/Schedule";
import WhyUsSection from "@/components/businessGrowth/WhyUsSection";
import Hero from "@/components/businessGrowth/Hero";


// Motion variants for scroll animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <HeroSection></HeroSection>

      {/* <Hero /> */}

      {/* Results Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <ResultsSection />
      </motion.div>

      {/* Why Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <WhyUsSection />
      </motion.div>
      {/* Schedule Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Schedule />
      </motion.div>

      {/* Marketing/Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* <Marketing /> */}
      </motion.div>

      {/* Blueprint Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Blueprint />
      </motion.div>
    </div>
  );
}
