import React from "react";
import SectionLayout from "../universal/SectionLayout";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";

const Pricing = () => {
  return (
    <>
      <SectionLayout bg="bg-[#ECECEC] lg:py-14">
        <Reveal>
          <div className="mb-8">
            <h2 className="text-[30px] md:text-[36px] lg:text-[40px] font-semibold uppercase text-center mb-4 lg:10">
              Pricing
            </h2>
            <p className="text-center max-w-3xl mx-auto">
              Flexible pricing designed to deliver professional photography that
              fits your business needs and budget.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 lg:gap-20 justify-evenly max-w-[1280px]  mx-auto ">
            {/* Custom Plan Card */}
            <div className="relative rounded-[20px] overflow-hidden  shadow-[0_19px_30px_rgba(0,0,0,0.15)]  ">
              <Image
                src="/assets/corporate-photoshoot/pricing-card-1.png"
                alt="Pricing card with a woman seated on a chair"
                width={400}
                height={670}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex flex-col justify-end items-start text-white z-10 bg-gradient-to-b from-black/40 via-transparent to-black/70 px-10 py-14">
                <h2 className="text-[24px] lg:text-[32px] font-light mb-3">
                  Save More <br />
                  <span className="font-semibold">With Custom Plan.</span>
                </h2>
                <p className="text-[16px] lg:text-[18px] text-start mb-6">
                  Choose a plan and get onboard in minutes. Then get $100
                  credits for your next payment.
                </p>

                <div className="w-full mt-[50%]">
                  <Link href="#">
                    <button
                      type="submit"
                      className="btn text-[16px] !py-5 flex items-center gap-8 r-button border-2 border-primary hover:text-primary !rounded-lg  !w-full"
                    >
                      <span> Get Quote</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* $99 Plan Card */}
            <div className="overflow-hidden  shadow-[0_19px_30px_rgba(0,0,0,0.15)] rounded-[20px] px-10 py-14 h-full flex flex-col justify-between bg-white min-[400px] gap-10 ">
              <div className=" border-b-2 border-dashed pb-10">
                <div>
                  <h3 className="text-[30px] lg:text-[40px] font-bold text-primary ">
                    $99
                  </h3>
                  <p className="text-[16px]  font-medium text-primary">
                    Only Headshoot
                  </p>
                </div>
                <div className="mt-8 lg:mt-14">
                  <p className="text-[22px] text-[#A9A9AA] mb-5">
                    What You’ll Get
                  </p>
                  <ul className=" space-y-4 text-[#35353F]">
                    <li className="flex items-start">
                      <svg
                        className="w-8 h-8 me-4 text-primary flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      8 hours usage of our coworking space
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-8 h-8 me-4 text-primary flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Access to All our rooms
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full ">
                <Link href="#">
                  <button
                    type="submit"
                    className="btn text-[16px] !py-5 flex items-center gap-8 r-button border-2 border-primary hover:text-primary !rounded-lg  !w-full"
                  >
                    <span>Choose</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* $300 Plan Card */}
            <div className="overflow-hidden  shadow-[0_19px_30px_rgba(0,0,0,0.15)] rounded-[20px] px-10 py-14 h-full flex flex-col justify-between bg-white min-[400px] gap-10 ">
              <div className=" border-b-2 border-dashed pb-10">
                <div>
                  <h3 className="text-[30px] lg:text-[40px] font-bold text-primary ">
                    $300
                  </h3>
                  <p className="text-[16px]  font-medium text-primary">
                    Photoshoot
                  </p>
                </div>
                <div className="mt-8 lg:mt-14">
                  <p className="text-[22px] text-[#A9A9AA] mb-5">
                    What You’ll Get
                  </p>
                  <ul className=" space-y-4 text-[#35353F]">
                    <li className="flex items-start">
                      <svg
                        className="w-8 h-8 me-4 text-primary flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      8 hours usage of our coworking space
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-8 h-8 me-4 text-primary flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Access to All our rooms
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-8 h-8 me-4 text-primary flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Dedicated Desk{" "}
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-8 h-8 me-4 text-primary flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Free Business Address{" "}
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-8 h-8 me-4 text-primary flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Free Lunch 1x a day{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full ">
                <Link href="#">
                  <button
                    type="submit"
                    className="btn text-[16px] !py-5 flex items-center gap-8 r-button border-2 border-primary hover:text-primary !rounded-lg  !w-full"
                  >
                    <span>Choose</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionLayout>
    </>
  );
};

export default Pricing;
