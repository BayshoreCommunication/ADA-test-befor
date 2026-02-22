import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import SectionLayout from "./SectionLayout";

const Consultaion = () => {
  return (
    <SectionLayout bg="">
      <div className="flex flex-col items-center">
        <h2 className="heading-secondary ">Consultations for Our Service</h2>
        <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
          {` Consultations for our service are free and easy. Simply click below to
            fix a suitable date and time that works for you. We'll contact you
            shortly. Don’t miss this opportunity.
            `}
        </p>

        <Link
          href={
            "https://calendly.com/info-bayshorecommunication/meeting?month=2025-04"
          }
          target="_blank"
        >
          <button className="btn text-small !py-4 flex items-center gap-4 md:gap-8 r-button border-2 border-primary hover:text-primary">
            <span>Book now 45 min Free Consultation</span>
            <span className="inline-block translate-y-[2px] ml-2">
              <AiOutlineRight />
            </span>
          </button>
        </Link>
      </div>
    </SectionLayout>
  );
};

export default Consultaion;
