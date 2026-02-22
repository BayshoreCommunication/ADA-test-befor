"use client";
import React from "react";
import SectionLayout from "../universal/SectionLayout";
import Reveal from "../motion/Reveal";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <>
      <SectionLayout bg="lg:py-14">
        <div className="p-[20px] lg:p-[40px] bg-[#F3F5F6]  rounded-2xl overflow-hidden  max-w-[1280px]  mx-auto">
          <Reveal>
            <div>
              <Accordion
                title="What’s included in the headshot session?"
                answer="Our headshot session includes professional lighting, multiple poses, and expert editing to ensure you look your best in every shot."
              />
            </div>
          </Reveal>
          <Reveal>
            <Accordion
              title="How many people can participate in the team photo shoot?"
              answer="Absolutely! We design personalized journeys to suit your desires and requirements."
            />
          </Reveal>
          <Reveal>
            <Accordion
              title="Do you offer on-location services outside Tampa?"
              answer="Depending on your chosen destination, we can arrange family vacations, honeymoons, luxury getaways, adventure trips, group tours and more."
            />
          </Reveal>
          <Reveal>
            <Accordion
              title="Can I choose a custom background or setting for my photos?"
              answer="Depending on your chosen destination, we can arrange family vacations, honeymoons, luxury getaways, adventure trips, group tours and more."
            />
          </Reveal>
        </div>
      </SectionLayout>
    </>
  );
};

export default FAQ;
