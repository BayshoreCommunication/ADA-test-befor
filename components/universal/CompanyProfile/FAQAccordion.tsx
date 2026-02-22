import React, { useState } from "react";

interface FAQAccordionProps {
  title: string;
  answer: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="border-b border-[#C4C4C4] py-4">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex  w-full gap-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className={`w-8 h-8 text-[#F77224] transform origin-center transition duration-500 ease-out flex-shrink-0 mt-[10px] ${
            accordionOpen && "!rotate-90"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
        <span className="text-start text-white text-[20px] font-[500]">
          {title}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden mt-4">
          <p className="text-[18px] opacity-80 text-white">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
