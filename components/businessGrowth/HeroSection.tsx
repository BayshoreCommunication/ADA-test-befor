"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <div className="min-h-[70vh] bg-white overflow-hidden font-sans relative px-4 sm:px-6 xl:px-24 mt-6">
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
            <h1 className="text-[20px] xl:text-[36px] 2xl:text-[48px] font-semibold leading-snug mt-32  xl:mt-0">
              We Help Lawyers Dominate Search Results, Grow Reputation, And{" "}
              <span className="bg-primary text-white px-3 font-bold">
                Generate Consistent Leads
              </span>{" "}
              Without Wasting Time On Outdated Marketing.
            </h1>
            <p className="mt-4 text-gray-600 text-[14px] sm:text-[16px]">
              You’re One Step Away From Discovering How You Can Consistently
              Attract High-Value Clients Through Organic Marketing & SEO—Without
              Relying on Ads.{" "}
              <span className="text-primary font-semibold">GUARANTEED.</span>
            </p>

            <div className="flex flex-col  xl:flex-row items-center gap-4 mt-6">
              <button
                className="bg-primary hover:bg-orange-500 text-white px-6 py-3 rounded-full shadow-md w-full sm:w-[200px] text-[14px] sm:text-[16px]"
                onClick={() =>
                  document
                    .getElementById("schedule")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Schedule Call
              </button>
              <p className="text-gray-700 text-[14px] sm:text-[16px] max-w-sm text-center sm:text-left">
                You don’t pay for effort—you pay for{" "}
                <span className="font-semibold text-primary">
                  real, measurable growth.
                </span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-4 mt-8 justify-start  md:mb-4">
              <div className="flex flex-col items-start">
                <Image
                  src="/images/home/Google.png"
                  alt="Google"
                  width={100}
                  height={70}
                />
                <div className="flex text-yellow-600 mt-1 ">
                  <span className="animate-star">★</span>
                  <span className="animate-star">★</span>
                  <span className="animate-star">★</span>
                  <span className="animate-star">★</span>
                  <span className="animate-star">★</span>
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold text-[14px] sm:text-[16px]">
                  4.9 (484 Reviews)
                </p>
                <a
                  href="#"
                  className="text-primary underline text-xs sm:text-sm !hover:text-orange-600"
                >
                  View all Google Reviews here
                </a>
              </div>
            </div>
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

            <div className="ml-0 xl:ml-[80px] 2xl:ml-[5px] mt-[-150px] sm:mr-[-260px] sm:mb-[120px] xl:mt-[-50px] w-full sm:w-[640px] md:mb-[120px] md:mr-[-150px] lg:ml-[200px] lg:mt-[-120px] md:mt-[-100px] md:ml-[90px]  px-4 text-center mb-16 ">
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
