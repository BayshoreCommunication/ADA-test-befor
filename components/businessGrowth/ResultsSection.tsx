"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Replace images with YouTube video URLs
const slides = [
  {
    title: "Trip Law",
    desc: "Since 2016, working with Trip Law, we've grown the practice from $60,000 to $2.3 million without spending a dime on ads. We consistently generate 20+ new client appointments per month, each with a $5,000 case value.",
    videoId: "RVit6poGLRs",
  },
  {
    title: "Apex Advisor",
    desc: "Apex had a strong brand presence, but poor SEO analysis from another agency left them invisible on Google. Our video production team built a powerful social media presence, driving trust through informative video marketing.",
    videoId: "ohyUTzLiLbI",
  },
  {
    title: "Catflix",
    desc: "Despite having a brilliant idea, the Catflix team needed SEO to get found online. Our content team created a high-performance SEO strategy that steadily grew traffic and visibility over time.",
    videoId: "iqHA7By9OAI",
  },
];

// Variants for card animations
const cardVariants = {
  hidden: { opacity: 0, y: 100, rotate: 5 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  }),
};

export default function ResultsSection() {
  return (
    <section className="px-4 sm:px-6 md:px-12 mt-6 lg:mt-0 sm:mt-0  xl:px-24 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="max-w-[1440px] mx-auto text-center md:text-left"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-[20px] lg:text-[36px] xl:text-[38px] font-bold leading-normal">
          <span className="bg-primary text-white px-2">Recent Results</span>{" "}
          <span className="">
            We Have Gotten For Attorneys, Consultants And Business Professionals
            Just Like You
          </span>
        </h2>
        <p className="mt-3 sm:mt-4  text-base ">
          How we took our clients’ businesses to the next level!
        </p>
      </motion.div>

      {/* Results Cards */}
      <section className="max-w-[1040px]  mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="custom-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className=" bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer h-[420px]"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {/* Video */}
                <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${slide.videoId}?rel=0&showinfo=0&controls=1`}
                    title={slide.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <motion.h3
                    className="font-bold text-[18px] sm:text-[20px]"
                    whileHover={{ color: "#f97316" }}
                  >
                    {slide.title}
                  </motion.h3>
                  <p className="text-gray-600 mt-2 text-base leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Styling */}
        <style jsx global>{`
          .custom-swiper .swiper-pagination {
            position: relative;
            margin-top: 2rem;
            text-align: center;
          }
          .custom-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: #d1d5db;
            opacity: 1;
            margin: 0 6px !important;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          .custom-swiper .swiper-pagination-bullet-active {
            background-color: #f97316;
            transform: scale(1.3);
          }

          .custom-swiper .swiper-button-next,
          .custom-swiper .swiper-button-prev {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background: #ffffff;
            color: #000000;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
          }

          .custom-swiper .swiper-button-next:hover,
          .custom-swiper .swiper-button-prev:hover {
            background: #f3f4f6;
            color: #f97316;
            transform: scale(1.05);
          }

          .custom-swiper .swiper-button-next::after,
          .custom-swiper .swiper-button-prev::after {
            font-size: 14px;
            font-weight: bold;
          }
        `}</style>
      </section>
    </section>
  );
}
