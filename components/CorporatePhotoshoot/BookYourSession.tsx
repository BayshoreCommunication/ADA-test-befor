import React from "react";
import SectionLayout from "../universal/SectionLayout";
import Link from "next/link";
import Reveal from "../motion/Reveal";

const BookYourSession = () => {
  return (
    <>
      <SectionLayout bg="lg:py-14">
        <Reveal>
          <div className="text-center">
            <h2 className="text-[36px] uppercase font-medium text-[#2B2B2B] mb-2">
              Book Your Session Now
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto mb-8">
              Ready to get started? Secure your session today and elevate your
              business with professional photos.
            </p>
            <Link href="#">
              <button
                type="submit"
                className="btn text-[16px] !py-5 flex items-center gap-8 r-button border-2 border-primary hover:text-primary !rounded-lg !px-40"
              >
                <span>Book Now</span>
              </button>
            </Link>
          </div>
        </Reveal>
      </SectionLayout>
    </>
  );
};

export default BookYourSession;
