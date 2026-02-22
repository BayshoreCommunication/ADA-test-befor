"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    { img: "image/whychooseus/img1.png", title: "Custom Marketing Solutions" },
    { img: "image/whychooseus/img2.png", title: "Results-Driven Campaigns" },
    { img: "image/whychooseus/img3.png", title: "Quality You Can Count On" },
    { img: "image/whychooseus/img4.png", title: "Dedicated Team Support" },
    { img: "image/whychooseus/img5.png", title: "Quick & Priority Delivery" },
  ];

  // Variants for staggered animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    }),
  };

  return (
    <div className="w-full bg-gradient-to-r from-gray-200 via-white to-orange-500/10 py-10 md:py-20">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] font-bold uppercase">
            Why <span className="text-[#FE641A]">Partner </span>With Us
          </h2>
          <p className="text-black mt-4 font-bold">
            Your success is our mission — results you can trust.
          </p>
          <p className="text-gray-500 mt-2 max-w-4xl mx-auto">
            We combine strategy, creativity, and data to help your business grow consistently.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 gap-y-20 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-xl border border-gray-200 p-6 shadow-sm relative cursor-pointer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 35px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="absolute top-[-25%] w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="font-semibold text-gray-800 mt-20 text-[16px]">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
