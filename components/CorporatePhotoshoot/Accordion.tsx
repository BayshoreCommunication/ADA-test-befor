import React, { useState, FC } from "react";

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion: FC<AccordionProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <div className="p-10 bg-white rounded-2xl m-6">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full pb-3"
        aria-expanded={accordionOpen}
      >
        <h4 className="text-start font-semibold text-[16px] lg:text-[20px]">
          {title}
        </h4>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-8 h-8 text-primary transform origin-center transition duration-500 ease-out ${
            accordionOpen ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-secondary opacity-85 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[16px] lg:text-[20px] ">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
