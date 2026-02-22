import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";
import Link from "next/link";

const SocialMediaContent = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url('/assets/company-profile/smc-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "auto", // Adjust height as needed
      }}
    >
      <div
        className=" w-full"
        style={{
          backgroundImage:
            "url('assets/company-profile/social-media-content-heading.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "auto", // Adjust height as needed
        }}
      >
        {/* Content */}
        <SectionLayout bg="">
          <div className="  flex  items-center justify-around z-10 py-10 lg:py-14">
            {/* Title Text */}
            <div className="  lg:py-20 lg:px-10 text-center bg-[rgba(0,0,0,0.6)] p-4">
              <h1 className="text-white text-[28px] md:text-40px lg:text-[50px] px-14 font-bold uppercase w-full">
                SOCIAL MEDIA CONTENT
              </h1>
            </div>
          </div>
        </SectionLayout>
      </div>

      <SectionLayout bg="">
        <div className="w-full lg:w-[80%] mx-auto">
          <h3 className="text-20px md:text-[40px] text-white text-center mt-14 uppercase">
            STATICS
          </h3>
          {/* STATICS Images */}
          <div>
            {/* 1st div */}
            <div className="flex flex-col lg:flex-row items-center">
              <div className="">
                <Image
                  src="/assets/company-profile/smc/statics-1.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2  ">
                <Image
                  src="/assets/company-profile/smc/statics-2.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
                <Image
                  src="/assets/company-profile/smc/statics-3.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
                <Image
                  src="/assets/company-profile/smc/statics-4.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
                <Image
                  src="/assets/company-profile/smc/statics-5.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
              </div>
            </div>
            {/* 2nd div */}
            <div className="flex flex-col lg:flex-row items-center">
              <div className="grid grid-cols-1 md:grid-cols-2  ">
                <Image
                  src="/assets/company-profile/smc/statics-6.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
                <Image
                  src="/assets/company-profile/smc/statics-7.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
                <Image
                  src="/assets/company-profile/smc/statics-8.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
                <Image
                  src="/assets/company-profile/smc/statics-9.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
              </div>
              <div className="">
                <Image
                  src="/assets/company-profile/smc/statics-10.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
              </div>
            </div>
            {/* 3rd div */}
            <div className="pb-12 pt-6">
              <Image
                src="/assets/company-profile/smc/statics-11.png"
                alt=""
                width={1920}
                height={760}
                className="w-full h-auto "
              ></Image>
            </div>
            {/* 4th div */}
            <div className="flex flex-col lg:flex-row items-center">
              <div className="">
                <Image
                  src="/assets/company-profile/smc/statics-12.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2  ">
                <Image
                  src="/assets/company-profile/smc/statics-13.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
                <Image
                  src="/assets/company-profile/smc/statics-14.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
                <Image
                  src="/assets/company-profile/smc/statics-15.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
                <Image
                  src="/assets/company-profile/smc/statics-16.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
              </div>
            </div>
            {/* 5th div */}
            <div className="flex flex-col lg:flex-row items-center">
              <Image
                src="/assets/company-profile/smc/statics-17.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
              ></Image>
              <Image
                src="/assets/company-profile/smc/statics-18.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
              ></Image>
              <Image
                src="/assets/company-profile/smc/statics-19.png"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
              ></Image>
            </div>
            {/* 6th div */}
            <div className="pb-12 pt-6">
              <Image
                src="/assets/company-profile/smc/statics-20.png"
                alt=""
                width={1920}
                height={760}
                className="w-full h-auto "
              ></Image>
            </div>
            {/* 7th div */}
            <div className="flex flex-col lg:flex-row items-center gap-12 ">
              <div className="w-full lg:w-[67%]">
                <Image
                  src="/assets/company-profile/smc/statics-21.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
              </div>
              <div className="grid grid-cols-1  gap-10 w-full lg:w-[32%] ">
                <Image
                  src="/assets/company-profile/smc/statics-22.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
                <Image
                  src="/assets/company-profile/smc/statics-23.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
              </div>
            </div>
            {/* 8th div */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mt-14">
              <div className="grid grid-cols-1  gap-10 w-full lg:w-[32%] ">
                <Image
                  src="/assets/company-profile/smc/statics-24.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
                <Image
                  src="/assets/company-profile/smc/statics-26.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
              </div>
              <div className="w-full lg:w-[67%]">
                <Image
                  src="/assets/company-profile/smc/statics-26.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto overflow-hidden hover:scale-95 duration-500"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  lg:w-[80%] mx-auto">
          <h3 className="text-20px md:text-[40px] text-white text-center mt-14 uppercase">
            Motion Graphics
          </h3>
          {/*  Motion Graphics Video  */}
          <div>
            {/* Motion div 1 */}
            <div className="flex flex-col lg:flex-row items-center ">
              <div className="w-full lg:w-[38%] ">
                <Link
                  href="#"
                  className="group relative rounded-[30px] overflow-hidden"
                >
                  <Image
                    src="/assets/company-profile/smc/motion-1.png"
                    alt=""
                    width={500}
                    height={1000}
                    className="w-full h-auto rounded-[25px] transition-transform duration-500 transform group-hover:scale-95"
                  />
                  <FaRegCirclePlay
                    className="absolute inset-0 text-white text-[80px] transform  bg-black bg-opacity-60 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </Link>
              </div>
              <div className="w-full lg:w-[66%]">
                <Link
                  href="#"
                  className="group relative rounded-[30px] overflow-hidden"
                >
                  <Image
                    src="/assets/company-profile/smc/motion-2.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-auto rounded-[25px] transition-transform duration-500 transform group-hover:scale-95"
                  />
                  <FaRegCirclePlay
                    className="absolute inset-0 text-white text-[80px] transform  bg-black bg-opacity-60 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </Link>
              </div>
            </div>
            {/* Motion div 2 */}
            <div className="flex flex-col lg:flex-row items-center ">
              <div className="w-full lg:w-[66%]">
                <Link
                  href="#"
                  className="group relative rounded-[30px] overflow-hidden"
                >
                  <Image
                    src="/assets/company-profile/smc/motion-3.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-auto rounded-[25px] transition-transform duration-500 transform group-hover:scale-95"
                  />
                  <FaRegCirclePlay
                    className="absolute inset-0 text-white text-[80px] transform  bg-black bg-opacity-60 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </Link>
              </div>
              <div className="w-full lg:w-[38%] ">
                <Link
                  href="#"
                  className="group relative rounded-[30px] overflow-hidden"
                >
                  <Image
                    src="/assets/company-profile/smc/motion-4.png"
                    alt=""
                    width={500}
                    height={1000}
                    className="w-full h-auto rounded-[25px] transition-transform duration-500 transform group-hover:scale-95"
                  />
                  <FaRegCirclePlay
                    className="absolute inset-0 text-white text-[80px] transform  bg-black bg-opacity-60 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </Link>
              </div>
            </div>
            {/* Motion div 3 */}
            <div className="flex flex-col lg:flex-row items-center ">
              <div className="w-full ">
                <Link
                  href="#"
                  className="group relative rounded-[30px] overflow-hidden"
                >
                  <Image
                    src="/assets/company-profile/smc/motion-5.png"
                    alt=""
                    width={500}
                    height={1000}
                    className="w-full h-auto rounded-[25px] transition-transform duration-500 transform group-hover:scale-95"
                  />
                  <FaRegCirclePlay
                    className="absolute inset-0 text-white text-[80px] transform  bg-black bg-opacity-60 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </Link>
              </div>
              <div className="w-full ">
                <Link
                  href="#"
                  className="group relative rounded-[30px] overflow-hidden"
                >
                  <Image
                    src="/assets/company-profile/smc/motion-6.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-auto rounded-[25px] transition-transform duration-500 transform group-hover:scale-95"
                  />
                  <FaRegCirclePlay
                    className="absolute inset-0 text-white text-[80px] transform  bg-black bg-opacity-60 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </Link>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default SocialMediaContent;
