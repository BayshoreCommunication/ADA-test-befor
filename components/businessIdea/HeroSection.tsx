"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPeopleLine } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";

export default function Home() {
  const [count, setCount] = useState(0);
  const target = 60;

  // Counter logic
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const incrementTime = 30;
    const step = Math.ceil((target / duration) * incrementTime);

    const counter = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(counter);
  }, []);

  const floatOnce = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Function to scroll to Calendly section
  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly-section');
    if (calendlySection) {
      calendlySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-[70vh] bg-white  font-sans relative px-4 sm:px-6 xl:px-24 mt-6">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Floating Emojis */}
        <motion.div
          className="hidden xl:block absolute top-28 left-[30%]"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/home/memoji3.png"
            alt="Icon"
            width={90}
            height={90}
          />
        </motion.div>
        {/* <motion.div className="hidden md:block absolute top-32 right-[30%]" variants={floatOnce} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
          <Image src="/images/home/memoji.png" alt="Icon" width={60} height={60} />
        </motion.div> */}
        <motion.div
          className="hidden xl:block absolute top-[130px] right-[20%] z-10"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <Image
            src="/images/home/memoji4.png"
            alt="Icon"
            width={60}
            height={60}
          />
        </motion.div>
        <motion.div
          className="hidden xl:block absolute top-[130px] right-[10%]"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Image
            src="/images/homesection/memoji5.png"
            alt="Icon"
            width={100}
            height={100}
          />
        </motion.div>

        <motion.div
          className="hidden xl:block absolute top-[100px] right-[5%]"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Image
            src="/images/home/memoji2.png"
            alt="Icon"
            width={60}
            height={60}
          />
        </motion.div>
        <motion.div
          className="hidden xl:block absolute top-[180px] right-[0%] z-10"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <Image
            src="/images/home/memoji4.png"
            alt="Icon"
            width={60}
            height={60}
          />
        </motion.div>
        <motion.div
          className="hidden xl:block absolute top-56 left-[55%]"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <Image
            src="/images/home/icon.png"
            alt="Icon"
            width={100}
            height={100}
          />
        </motion.div>
        <motion.div
          className="hidden xl:block absolute top-[60%] right-[45%] w-[160px]"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <Image
            src="/images/home/send.png"
            alt="Floating Icon"
            width={170}
            height={280}
          />
        </motion.div>

        {/* Header */}
        <div className="flex justify-between items-center py-4 gap-4">
          <Image
            src="/images/home/bayshore-logo.svg"
            alt="BayShore Logo"
            width={200}
            height={60}
            className="w-[120px] sm:w-[200px] md:w-[250px]"
          />
          <button
            className="bg-primary hover:bg-orange-500 text-white px-4 py-3 sm:px-6 rounded-full shadow-md text-[14px] sm:text-[16px]"
            onClick={() =>
              document
                .getElementById("schedule")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Schedule Call
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start mt-8 gap-8">
          {/* Left: Text + Buttons + Reviews */}
          <motion.div
            className="w-full lg:w-1/2 xl:text-left text-center "
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[20px] xl:text-[36px] 2xl:text-[48px] font-semibold leading-snug mt-32  xl:mt-0 uppercase">
              Stop Relying on Referrals — Start Getting <span className="text-[#FE641A]">Consistent</span> Clients Online
            </h1>
            <p className="mt-4 text-gray-600 text-[14px] sm:text-[16px]">
              You’re One Step Away From Discovering How You Can Consistently
              Attract High-Value Clients Through Organic Marketing & SEO—Without
              Relying on Ads.{" "} <span className="text-[#FE641A]">GUARANTEED.</span>
            </p>

            <div className="flex flex-col  xl:flex-row items-center gap-4 mt-6">
              <p className="text-gray-700 text-[14px] sm:text-[16px] max-w-sm text-center sm:text-left">
                You don’t pay for effort—you pay for{" "}
                <span className="font-semibold text-primary">
                  real, measurable growth.
                </span>
              </p>
            </div>
            {/* CTA Button */}
            <div className="w-full h-[100px] sm:h-[180px]"><motion.div
              className="mx-auto justify-center mt-4  border-[1px] border-[#FE641A] p-3 inline-block rounded-full transition-all duration-[5000ms] ease-out hover:border-[8px] hover:border-transparent hover:p-0"
              variants={item}
            >
              <button
                onClick={scrollToCalendly}
                className="bg-[#FE641A] text-white rounded-full text-xl font-semibold shadow-xl transition-all duration-[5000ms] px-8 py-4 sm:px-12 sm:py-6 flex flex-col items-center text-center"
              >
                <span className="text-2xl font-semibold">Schedule a Call Now</span>

              </button>
            </motion.div></div>

            {/* Google Review */}
            <motion.div
              className="md:mt-[-90px] mt-[-30px] md:block flex flex-col justify-center items-center"
              variants={item}
            >
              <div className="flex -space-x-3">
                <Image
                  src="image/hero/group.png"
                  alt="alt"
                  width={275}
                  height={70}
                  className="w-[200px] h-[50px] sm:w-[275px] sm:h-[70px] object-contain"
                />
              </div>
              <p className="text-xl sm:text-2xl text-gray-600">⭐⭐⭐⭐⭐ Google Review</p>
            </motion.div>

            


          </motion.div>

          {/* Right: Images + Counter */}
          <motion.div
            className="order-first sm:order-none w-full mt-[-100px] mb-[-100px] xl:mb-0 xl:mt-0 lg:w-1/2 flex flex-col  items-center justify-center "
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex xl:flex-row items-center justify-center xl:pl-[80px]  mb-[60px] xl:mb-6 2xl:mb-0 mt-20">
              <div className="relative ">
                <div className="w-[200px] sm:w-[300px] xl:w-[400px] lg:h-[340px] rounded-lg mb-[-80px] mt-[-50px]">
                  <Image
                    src="/images/homesection/left-1.png"
                    alt="Illustration"
                    width={400}
                    height={220}
                    className="w-[800px] h-[350px] object-contain"
                  />
                </div>
                {/* vector image  */}
                <motion.div
                  className="absolute top-[-80%] left-[30%] md:top-[-20%] md:left-[35%] w-[90px] xl:w-[140px] animated-circle-one"
                  variants={floatOnce}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                >
                  <Image
                    className=""
                    src="/images/home/send1.png"
                    alt="Floating Icon"
                    width={170}
                    height={280}
                  />
                </motion.div>
              </div>

              <div className="2xl:ml-[-70px]  ml-[-60px] mt-[50px]   xl:mt-0  p-8 flex flex-col text-center w-[220px] xl:ml-[-100px] 2xl:w-[270px] xl:w-[250px] mb-[70px]">
                <h2 className="text-[60px] xl:text-[100px] 2xl:text-[130px] font-bold sm:text-[40px] md:text-[50px] lg:text-[70px] xl:mb-[0px] ">
                  {count}+
                </h2>
                <p className="mt-2 text-[14px] xl:text-xl sm:text-base">
                  <span className="font-semibold">Clients</span> that we work
                  with, and trust us very much
                </p>
                <div className="h-4 rounded-full mt-4 xl:w-full w-[170px] bg-gray-200">
                  <div
                    className="h-4 bg-primary rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="ml-0 xl:ml-[80px] 2xl:ml-[5px] mt-[-150px] mr-[-100px] sm:mr-[-260px] sm:mb-[120px] xl:mt-[-50px] w-full sm:w-[640px] md:mb-[120px] md:mr-[-150px] lg:ml-[200px] lg:mt-[-120px] md:mt-[-100px] md:ml-[90px]  px-4 text-center mb-16 ">
              <Image
                src="/images/homesection/left-2.png"
                alt="Illustration"
                width={380}
                height={220}
                className="xl:w-[500px] lg:w-[400px] 2xl:w-full xl:h-auto object-contain h-[180px] w-[350px]"
              />
            </div>
          </motion.div>
          
        </div>
            {/* Stats Section */}
            <motion.div
              className="w-full sm:w-[75%] px-8  mx-auto mt-12 bg-gradient-to-r from-cyan-200/20 via-white to-orange-50 p-[1px] rounded-2xl shadow-lg text-black my-[-40px]"
              variants={item}
            >
              <div className="bg-white/10 backdrop-blur-md  rounded-xl flex w-full flex-row justify-around items-center py-16 px-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <IoStarOutline className="text-[#FE641A]" />
                    <h3 className="text-[#FE641A] text-[20px] font-bold">60+</h3>
                  </div>
                  <p className="text-black/80 text-[10px] sm:text-[14px]">Current Clients</p>
                </div>

                <div className="text-center sm:border-l sm:border-r sm:border-white/10 sm:px-6">
                  <div className="flex items-center justify-center space-x-2">
                    <TfiMenuAlt className="text-[#FE641A]" />
                    <h3 className="text-[#FE641A] text-[20px] font-bold">
                      3,000+
                    </h3>
                  </div>
                  <p className="text-black/80 text-[10px] sm:text-[14px]">Completed Projects</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <FaPeopleLine className="text-[#FE641A]" />
                    <h3 className="text-[#FE641A] text-[20px] font-bold">90+</h3>
                  </div>
                  <p className="text-black/80 text-[10px] sm:text-[14px]">Bayshore Team-mates</p>
                </div>
              </div>
            </motion.div>
        <style jsx>{`
          @keyframes star-shine {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.3);
              opacity: 0.7;   
            }
          }
        `}</style>
      </div>
    </div>
  );
}
