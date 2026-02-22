"use client";
import React from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { IoLogoBehance } from "react-icons/io5";

let service: {
  title: string;
  link: string;
}[];

service = [
  { title: "Website Design", link: "/our-services/website-design" },
  { title: "Mobile App", link: "/our-services/mobile-app" },
  { title: "SEO", link: "/our-services/seo-service" },
  { title: "UI/UX Design", link: "/our-services/ui-ux-design" },
  { title: "Paid Advertising", link: "/our-services/paid-advertising" },
  {
    title: "Social Media Marketing",
    link: "/our-services/social-media-marketing",
  },
  { title: "Email Marketing", link: "/our-services/email-marketing" },
  { title: "Marketing Automation", link: "/our-services/marketing-automation" },
  { title: "Content Marketing", link: "/our-services/content-marketing" },
  { title: "Content Writing", link: "/our-services/content-writing" },
  { title: "Digital PR", link: "/our-services/digital-pr" },
  { title: "Graphic Design", link: "/our-services/graphic-design" },
  { title: "Motion Graphic", link: "/our-services/motion-graphic" },
  { title: "Video Production", link: "/our-services/video-production" },
  { title: "Influencer Marketing", link: "/our-services/influencer-marketing" },
];

let quickLinks: {
  title: string;
  link: string;
}[];

quickLinks = [
  { title: "Appointment", link: "/contact" },
  { title: "Career", link: "/career" },
  { title: "Refer Client", link: "/refer-client" },
  { title: "FAQs", link: "/faq" },
  // { title: "Industries We Serve", link: "/industries-we-serve" },
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Terms & Conditions", link: "/terms-conditions" },
  {
    title: "Client Portal",
    link: "https://billing.stripe.com/p/login/6oE8xFda4ac42Ws4gg",
  },
  {
    title: "Portfolio",
    link: "https://docs.google.com/presentation/d/1xYTNa-HSNlu2nxNGcOxwCIHTXmOJG55xd67GSxuCf60/edit?usp=sharing",
  },
  {
    title: "Perspectives Form",
    link: "/marketing-perspectives-form",
  },
];

const Col = ({ text, links }: any) => {
  return (
    <div className="flex-1 md:translate-x-[20%] lg:translate-x-[30%] ">
      <h4 className="mb-10 heading-four text-headingPrimary lg:text-[1.8rem]  text-center md:text-start ">
        {text}
      </h4>
    </div>
  );
};
const Footer = () => {
  return (
    <footer>
      <SectionLayout bg="bg-[#F4F4F4]">
        <div className="grid grid-cols-1  justify-items-center gap-[3rem] md:gap-8 lg:w-[50%] m-auto">
          <div className=" flex flex-col justify-center items-center">
            <div className="center md:block">
              <Image
                src="/assets/bayshore-logo.svg"
                alt="bayshore-logo"
                width={366}
                height={106}
                className="w-[185px] h-auto mb-6"
                priority
              />
            </div>
            <p className="text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify  leading-[1.3] px-[2vw] !text-center  sm:px-0 ">
              {text}
            </p>
          </div>

          {/* <div className="flex-1 md:translate-x-[20%] lg:translate-x-[30%] ">
            <h4 className="mb-10 heading-four text-headingPrimary lg:text-[1.8rem]  text-center md:text-start ">
              By subscribing we inform about
            </h4>
            <div className="flex flex-col items-center gap-y-4">
              <input
                className="bg-[#eae7e7] py-[0.8rem] px-2 rounded-xl text-[1.3rem] placeholder-center focus:outline-none w-full"
                type="text"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="btn text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify !py-3 flex items-center gap-8 w-max"
              >
                <span>Get a Proposal</span>
              </button>
            </div>
          </div> */}
          {/*  */}
        </div>
        <div className="w-full mt-6 h-[1px] bg-[#DBDBDB]"></div>
        <div className="flex flex-wrap justify-center md:justify-between items-center   ">
          <p className="text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify mt-8 ">
            Copyright © 2024 All Rights Reserved by Bayshore Communication.
          </p>
          <div className=" flex flex-col items-center  gap-6 pl-8 ">
            <div className="center mt-8 gap-4 ">
              <Link
                href={"https://www.facebook.com/bayshorecommunication"}
                target="_blank"
              >
                <BsFacebook className=" w-[2rem] lg:w-[2.45rem] h-auto  hover:text-[#3b5998] " />
              </Link>
              <Link
                href={"https://www.instagram.com/bayshorecommunication"}
                target="_blank"
              >
                <AiFillInstagram className="w-[2.6rem] lg:w-[2.9rem] h-auto hover:text-[#bb3380]" />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/bayshore-communication"}
                target="_blank"
              >
                <BsLinkedin className="w-[2rem] lg:w-[2.4rem] h-auto hover:text-[#007bb6]" />
              </Link>
              <Link href={"https://twitter.com/BayshoreCom"} target="_blank">
                <AiFillTwitterCircle className="w-[2.6rem] lg:w-[2.8rem] h-auto hover:text-[#00aced] hover:fill-blue-500   " />
              </Link>
              <Link
                href={
                  "https://www.youtube.com/channel/UCAaI96cOP7GGpYhEOPFhu8w"
                }
                target="_blank"
              >
                <SiYoutubemusic className="w-[2.5rem] lg:w-[2.5rem] h-auto hover:text-[#FF0000]" />
              </Link>
              <Link
                href={"https://www.behance.net/bayshorcommuni"}
                target="_blank"
              >
                <IoLogoBehance className="w-[3rem] lg:w-[3rem] h-auto hover:text-[#003ECB]" />
              </Link>
            </div>
          </div>
        </div>
      </SectionLayout>
    </footer>
  );
};

export default Footer;

const text: string = `We deliver quality projects, focus on client satisfaction and customized solutions. Our track record prides best-in-industry expertise and reliability. We have proudly and successfully served over 70+ amazing clients, launched 220+ websites, generated 500k leads since we started our journey in 2016. `;
