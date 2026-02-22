import React from "react";
import SectionLayout from "../universal/SectionLayout";
import Link from "next/link";
import Reveal from "../motion/Reveal";

const ReadyToSchedule = () => {
  return (
    <>
      <SectionLayout bg="bg-[#2B2B2B] lg:py-14 text-white">
        <Reveal>
          <div className="mb-10">
            <h2 className="text-[30px] md:text-[36px] lg:text-[40px] font-semibold uppercase text-center mb-4">
              Ready to Schedule Your Photoshoot?
            </h2>
            <p className="text-center max-w-6xl mx-auto">
              Don’t wait—book your photoshoot today and start showcasing your
              team’s professionalism and your business’s unique story.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <form className=" max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="px-8 py-6 bg-[#1F1F1F] border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-8 py-6 bg-[#1F1F1F] border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-8 py-6 bg-[#1F1F1F] border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              />
              <input
                type="text"
                placeholder="Phone"
                className="px-8 py-6 bg-[#1F1F1F] border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              />
              <input
                type="text"
                placeholder="Street Address"
                className="px-8 py-6 bg-[#1F1F1F] border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="px-8 py-6 bg-[#1F1F1F] border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              />
            </div>

            <div className="w-full text-center mt-10">
              <Link href="#">
                <button
                  type="submit"
                  className="btn text-[16px] !py-3 flex items-center gap-8 r-button border-2 border-primary hover:text-primary !rounded-lg !px-20"
                >
                  <span>Book Your Session Now</span>
                </button>
              </Link>
            </div>
          </form>
        </Reveal>
      </SectionLayout>
    </>
  );
};

export default ReadyToSchedule;
