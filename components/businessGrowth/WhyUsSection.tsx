"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const slidesData = [
  {
    title: "We Specialize in Law Firm Growth",
    desc: "Unlike generic marketing agencies, we focus exclusively on helping law firms attract high-value clients through organic marketing and SEO.",
  },
  {
    title: "Proven Track Record",
    desc: "Since 2016, we’ve helped 100+ law firms across the U.S. generate more cases and increase revenue without expensive ads.",
  },
  {
    title: "Transparent Process",
    desc: "We believe in 100% transparency and keeping you in the loop every step of the way.",
  },
];

const slideVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyUsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center bg-[#0b0c1b] py-16 px-6 sm:px-8 lg:px-16  xl:px-24 overflow-hidden">
      <div className="w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <motion.div
          className="text-white max-w-[500px] mx-auto md:mx-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-[20px] lg:text-[36px] xl:text-[38px] font-extrabold text-orange-600 mb-6">
            WHY US?
          </h2>
          <p className="text-gray-300 mb-6 text-[14px] sm:text-[16px] leading-relaxed">
            We’re not here to sell—we’re here to show you exactly how to get
            real results using the same system that has worked for 100+ law
            firms across the U.S.
          </p>
          <p className="text-gray-300 font-semibold text-[14px] sm:text-[18px] leading-relaxed">
            <span className="font-bold">
              If you’re looking for a marketing partner that understands the
              legal industry and delivers real, measurable results—
            </span>{" "}
            you’re in the right place. Let’s grow your firm together.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="relative w-full max-w-[500px] mx-auto md:mx-0 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {isMobile ? (
            // Mobile: Stack slides vertically
            <div className="flex flex-col gap-4">
              {slidesData.map((slide, idx) => (
                <motion.div
                  key={idx}
                  variants={slideVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="bg-[#30323E] rounded-xl p-4 sm:p-6 flex flex-col justify-center items-start h-auto border border-transparent"
                >
                  <span className="text-gray-500 text-[48px] sm:text-[65px] font-bold">{idx + 1}</span>
                  <h3 className="text-3xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">{slide.title}</h3>
                  <p className="text-gray-300 text-xl sm:text-xl leading-relaxed">{slide.desc}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            // Desktop: Normal vertical Swiper
            <Swiper
              direction="vertical"
              slidesPerView={2}
              spaceBetween={20}
              speed={900}
              loop={false}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              mousewheel={{ releaseOnEdges: true }}
              modules={[Navigation, Autoplay, Mousewheel]}
              className="h-[520px] w-full"
            >
              {slidesData.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div
                    variants={slideVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.03,
                      rotateX: 2,
                      rotateY: -2,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                    }}
                    className="bg-[#30323E] rounded-xl p-6 flex flex-col justify-center items-start h-[240px] border border-transparent hover:border-orange-600 transition-all duration-500"
                  >
                    <span className="text-gray-500 text-8xl font-bold">{idx + 1}</span>
                    <h3 className="text-[18px] font-bold text-white mb-3">{slide.title}</h3>
                    <p className="text-gray-300 text-[14px] leading-relaxed">{slide.desc}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Navigation Arrows (Desktop only) */}
          {!isMobile && (
            <div className="absolute top-1/2 -translate-y-1/2 translate-x-[55px] right-[-15px] flex flex-col gap-4 z-10">
              <motion.button
                whileHover={{ scale: 1.2, backgroundColor: "#f97316" }}
                whileTap={{ scale: 0.9 }}
                className="custom-prev bg-gray-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-md transition"
              >
                ↑
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2, backgroundColor: "#f97316" }}
                whileTap={{ scale: 0.9 }}
                className="custom-next bg-gray-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-md transition"
              >
                ↓
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
