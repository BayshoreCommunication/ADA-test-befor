import Service, { services } from "@/components/unique/services/Service";
import AboutUs from "@/components/universal/AboutUs";
import Consultaion from "@/components/universal/Consultaion";
import Hero from "@/components/universal/Hero";
import Info from "@/components/universal/Info";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { HomeTabBarType } from "@/types/types";
import { AiOutlineRight } from "react-icons/ai";
import Reveal from "@/components/motion/Reveal";

//  Home Hero section
let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Empower Your Business with Innovative Marketing Solutions",
    description: `Bayshore Communication is a digital marketing company that offers web and app 
    development, SEO and online advertising, social media and email marketing, 
    content creation and distribution, UI/UX, graphics, video production, and 
    influencer marketing services. We provide innovative and practical solutions to 
    help you expand your company globally and accomplish your goals.`,
  },
];

export const metadata: Metadata = {
  title: "Service-Bayshore Communication",
  description:
    "Are you looking for a communication partner who can help you create a lasting impression on digital market? Browse our website and fulfill your dream with Bayshore. ",
};

const page = () => {
  return (
    <>
      <Reveal>
        <Hero heading={hero[0].heading} description={hero[0].description} />
      </Reveal>
      <div className="mt-20 container max-w-2xl">
        <Info />
      </div>
      <SectionLayout bg="">
        <Reveal>
          <h2 className="heading-secondary flex justify-center mt-10">
            Our Services
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[3rem] mt-[6rem] mb-10">
          {services.map(
            (
              el: {
                logo: string;
                topHeroLeftTitle: string;
                topHeroLeftDescription: string;
                metaName: string;
                metaDescription: string;
                readMoreDesc: string;
                url: string;
                heroImg: string;
                shortTitle: string;
                title: string;
                shortDescription: string;
                homeTabBar: HomeTabBarType[];
                description1: string;
                description2: string;
                description3: string;
                description4: string;
                description5: string;
                description6: string;
                description7: string;
                description8: string;
                description9: string;
                description10: string;
                description11: string;
                description12: string;
                description13: string;
                description14: string;
                description15: string;
                whyBayshore: string;
              },
              i: number
            ) => (
              <>
                <Service el={el} key={i} />
              </>
            )
          )}
        </div>
      </SectionLayout>

      <AboutUs />

      <Reveal>
        <Consultaion />
      </Reveal>
    </>
  );
};

export default page;
