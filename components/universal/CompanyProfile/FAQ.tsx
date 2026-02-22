"use client";
import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <SectionLayout bg="py-10">
      <div>
        <h2 className="text-[28px] md:text-40px lg:text-[50px] font-medium text-white text-center mb-10 uppercase">
          Asked Questions
        </h2>
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="flex-1">
            <Image
              src="/assets/company-profile/fag-img.png"
              alt=""
              width={600}
              height={500}
              className="mx-auto"
            ></Image>
          </div>

          <div className="flex-1">
            <div className="w-full pt-8">
              <FAQAccordion
                title="Would a review from last year be enough to convince you to buy this product, or would you prefer something more recent?"
                answer="Would a review from last year be enough to convince you to buy this product, or would you prefer something more recent?"
              />

              <FAQAccordion
                title="Honestly, how many times have you looked at your social media and felt proud?"
                answer="Honestly, how many times have you looked at your social media and felt proud?"
              />

              <FAQAccordion
                title="Knowing that the most recent review for this product is a year old, would you be comfortable trusting it, or would you wait for a newer one?"
                answer="Knowing that the most recent review for this product is a year old, would you be comfortable trusting it, or would you wait for a newer one?"
              />

              <FAQAccordion
                title="Imagine your competitors are actively engaging their audience on social media, while your accounts remain silent. How long before you start losing ground?"
                answer="Imagine your competitors are actively engaging their audience on social media, while your accounts remain silent. How long before you start losing ground?"
              />

              <FAQAccordion
                title="In today's digital world, silence speaks volumes. Is your silence saying what you want it to be about your brand?"
                answer="In today's digital world, silence speaks volumes. Is your silence saying what you want it to be about your brand?"
              />

              <FAQAccordion
                title="Are you comfortable with your competitors owning the conversation around your industry on social media? Because if you're not there, they will be."
                answer="Are you comfortable with your competitors owning the conversation around your industry on social media? Because if you're not there, they will be."
              />
              <FAQAccordion
                title="What if you could turn your social media presence into a powerful lead generation machine, attracting high-quality customers daily?"
                answer="What if you could turn your social media presence into a powerful lead generation machine, attracting high-quality customers daily?"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FAQ;
