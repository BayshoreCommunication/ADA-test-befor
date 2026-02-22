import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const AboutBayshore = () => {
  return (
    <SectionLayout bg="lg:pb-20">
      <div className=" p-10 md:p-14 lg:py-20 lg:px-40 bg-[#222222] rounded-[30px] lg:rounded-[60px] overflow-hidden">
        <div className=" text-center mb-14">
          <h3 className="text-[28px] md:text-40px lg:text-[50px] px-14 text-white font-semibold mb-4 lg:mb-8">
            About Bayshore Communication
          </h3>
          <p className="text-white  text-[18px] mb-5">
            The company was founded with the goal of transforming dreams into
            reality, even in a world filled with challenges and limited
            resources. Key figures in the company include:
          </p>
          <p className="text-white  text-[18px]">
            Together, they have turned Bayshore Communication into a supportive
            environment where dreams can flourish. The company values its
            commitment to clients and partners, fostering a sense of family
            united by a shared vision. Bayshore Communication focuses on
            inspiring and developing unique strategies that reflect clients
            brand personalities and resonate with their audiences. Their story
            is centered around their clients, aiming to combine their expertise
            with clients aspirations to bring visions to life.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
          <div className="flex flex-col lg:flex-row gap-8 items-center px-8 py-8  bg-[#313131] rounded-[30px] lg:rounded-[50px]">
            <Image
              src="/assets/company-profile/neel.png"
              alt="ARJO NEE"
              width={200}
              height={200}
              className="rounded-full"
            ></Image>
            <div>
              <div className="text-white">
                <h4 className="text-[28px] font-semibold">ARJO NEEL</h4>
                <h6 className="text-[18px] font-medium mt-2 mb-5">
                  CHIEF EXECUTIVE OFFICER (CEO)
                </h6>
                <p>
                  Known for building trust and creating lasting relationships
                  beyond mere business transactions.
                </p>
              </div>
              <div className="flex gap-4 items-center mt-6 lg:mt-14">
                <Link
                  href="#"
                  className="bg-[#F77224] p-3 inline-block rounded-full"
                >
                  <FaFacebookF color="#313131" size={16} />
                </Link>
                <Link
                  href="#"
                  className="bg-[#F77224] p-3 inline-block rounded-full"
                >
                  <FaXTwitter color="#313131" size={16} />
                </Link>
                <Link
                  href="#"
                  className="bg-[#F77224] p-3 inline-block rounded-full"
                >
                  <FaInstagram color="#313131" size={16} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-center px-8 py-8  bg-[#313131] rounded-[30px] lg:rounded-[50px]">
            <Image
              src="/assets/company-profile/salman.png"
              alt="SALMAN H SAIKOTE"
              width={200}
              height={200}
              className="rounded-full"
            ></Image>
            <div>
              <div className="text-white">
                <h4 className="text-[28px] font-semibold">SALMAN H SAIKOTEL</h4>
                <h6 className="text-[18px] font-medium mt-2 mb-5">
                  SALMAN H SAIKOTE
                </h6>
                <p>
                  A creative and technically skilled individual who excels in
                  digital campaigns and  innovation.
                </p>
              </div>
              <div className="flex gap-4 items-center mt-6 lg:mt-14">
                <Link
                  href="#"
                  className="bg-[#F77224] p-3 inline-block rounded-full"
                >
                  <FaFacebookF color="#313131" size={16} />
                </Link>
                <Link
                  href="#"
                  className="bg-[#F77224] p-3 inline-block rounded-full"
                >
                  <FaXTwitter color="#313131" size={16} />
                </Link>
                <Link
                  href="#"
                  className="bg-[#F77224] p-3 inline-block rounded-full"
                >
                  <FaInstagram color="#313131" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutBayshore;
