import Reveal from "@/components/motion/Reveal";
import ServicePricingPlan from "@/components/unique/servicepricing/ServicePricingPlan";
import AboutUs from "@/components/universal/AboutUs";
import Boost from "@/components/universal/Boost";
import ColFlex from "@/components/universal/ColFlex";
import Hero from "@/components/universal/Hero";
import Info from "@/components/universal/Info";
import Package from "@/components/universal/Package";
import Results from "@/components/universal/Results";
import SectionLayout from "@/components/universal/SectionLayout";
import SectionPackage from "@/components/universal/SectionPackage";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Growth-Bayshore Communication",
  description:
    "Do you want to take your company to the next stage? Increase conversions, or boost brand awareness? Join Bayshore and experience rapid growth with best marketing bundles.",
};

const page = () => {
  return (
    <>
      <Reveal>
        <Hero heading={hero[0].heading} description={hero[0].description} />
      </Reveal>

      {/* Package */}

      <SectionLayout bg="">
        <Reveal>
          <div className="flex flex-col items-center">
            <h2 className="heading-secondary !text-center max-w-[800px] mx-auto ">
              Affordable Marketing Solutions to Fit Your Budget with Our Value
              Package
            </h2>
            <p className="text-base !text-center  mb-10">
              {`
            We are aware that there is no one size fits all approach to SEO. To
            create a unique SEO plan for your company, Bayshore team takes into
            account your firm's particular demands, industry, existing SEO
            performance, and goals in addition to their own in-depth
            investigation. Contact us right away if you're prepared to begin
            developing your unique, revenue-generating SEO approach.
            `}
              <Link className="text-[#4C74B9] underline" href="/contact">
                contact us{" "}
              </Link>{" "}
              today!
            </p>
          </div>
        </Reveal>
        <Reveal>
          {/* <SectionPackage /> */}
          <ServicePricingPlan />
        </Reveal>
      </SectionLayout>

      {/* FLexiblity */}
      <Reveal>
        <SectionLayout bg="">
          <h2 className="flex justify-center heading-secondary">
            Flexibility at its Best: From One-Time Assessments to Complete
            Marketing Solutions
          </h2>
          {/* <div className="mt-8 border-2 rounded-[40px] border-gray-300 md:py-[7rem] md:px-[10rem] py-[3rem] px-[1rem] sm:px-[4rem] ">
            <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-4 text-center heading-four">
                  Budget-Friendly Options
                </h4>
                <p className="text-base text-center">
                  We’ll do everything, take care of everything,and report
                  directly to you.
                </p>
              </div>
              <div className="justify-self-center opacity-70">
                <Image
                  src="/assets/growth-plan/option.svg"
                  alt="option"
                  width={300}
                  height={300}
                  className="w-[8rem] md:w-[12rem] lg:w-[14rem] h-auto"
                />
              </div>
            </div>
          </div> */}

          <div className="grid grid-cols-1 gap-8 mt-12 mb-12 md:grid-cols-3">
            <ColFlex
              heading="Budget-Friendly Options"
              description="We’ll do everything, take care of everything,and report
              directly to you."
              imgLink="/assets/growth-plan/save-money.png"
            />
            <ColFlex
              heading="Flexibility to Test and Experiment"
              description="We’ll build you a high performing engine and you run it by yourself."
              imgLink="/assets/growth-plan/data-sharing.png"
            />
            <ColFlex
              heading="Collaborative Invironment"
              description="Get ongoing step-by-step advice with data-driven prioritization, achieving your goals faster."
              imgLink="/assets/growth-plan/seo.png"
            />
          </div>
        </SectionLayout>
      </Reveal>

      <Reveal>
        <Boost
          heading="Ready to Grow? Get Your FREE Quote Today!"
          btnText="Get a Proposal "
        />
      </Reveal>
      {/* <AboutUs /> */}
      <div className="container mt-10">
        <Info />
      </div>
      <Reveal>
        <Results
          heading="Even Though We Don’t Like Showing off, 
          We Have Some Amazing Results"
        />
      </Reveal>
    </>
  );
};

export default page;

let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Experience Rapid Growth with Our Enhanced Marketing ",
    description: `Do you wish to benefit from the most recent marketing techniques and resources? If so, 
    you require one of our upgraded marketing bundles. We provide a broad spectrum of services that can expand your brand and boost sales. From the website, or software solutions to digital marketing services, we have a bundle that suits  your needs and 
    budget. Don’t let this chance slip away to skyrocket your business with our enhanced advertising packages.`,
  },
];

function HeadingTitleImg() {
  return;
}
