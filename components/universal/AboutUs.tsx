import React from "react";
import SectionLayout from "./SectionLayout";
import FocusOnSelect from "../unique/DemoSlider";
import Reveal from "../motion/Reveal";

const AboutUs = () => {
  return (
    <div className="">
      <SectionLayout bg="bg-[#F4F4F4] hidden md:block ">
        <Reveal>
          <div className="flex flex-col items-center">
            <h2 className="heading-secondary ">
              Here is What Our Client Saying About Us
            </h2>
            <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
              Read the feedback from our satisfied clients who have benefited from
              our services. Their words reflect our high-quality work and
              dedication to their success.
            </p>
          </div>
        </Reveal>
        <div className="mt-0 bg-[url('/assets/Dots-Background-Orange-01.png')] bg-cover bg-center">
          <Reveal>
            <FocusOnSelect />
          </Reveal>
        </div>
      </SectionLayout>
    </div>
  );
};

export default AboutUs;
