"use client";


import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
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
    <section className="relative  w-full px-8 py-8 md:py-16 overflow-hidden">
      {/* HERO BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/gift/hero/bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className=" max-w-[1640px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-evenly gap-48">
        {/* LEFT */}
        <div className="text-white">
          <h1 className="text-[36px] lg:text-[54px] font-bold leading-tight">
            A Complimentary Growth{" "}
            <span className="inline-block bg-[#FE641A] px-2 py-1 rounded">
              Package
            </span>{" "}
            — On Us
          </h1>

          <p className="mt-6 text-gray-300 max-w-5xl">
            We’re offering a 100% free professional headshot, short video shoot,
            and a custom 1-year marketing strategy — delivered at your office.
          </p>

          
            

            {/* BUTTON */}
            <button className="rounded-lg bg-[#FE641A] px-6 py-3 text-[18px] font-semibold text-white hover:bg-orange-600 transition mt-12">
              Claim My Free Gift
            </button>
        </div>

        {/* RIGHT */}
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
                    src="/gift/hero/right.png"
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
                <h2 className="text-[60px] xl:text-[100px] 2xl:text-[130px] font-bold sm:text-[40px] md:text-[50px] lg:text-[70px] xl:mb-[0px] text-white">
                  {count}+
                </h2>
                <p className="mt-2 text-[14px] xl:text-xl sm:text-base text-white">
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
    </section>
  );
}
