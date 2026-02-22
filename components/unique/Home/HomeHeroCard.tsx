import Count from "@/components/Count";
import Link from "next/link";
import { ReactNode } from "react";

import { BsArrowRight } from "react-icons/bs";

interface hero {
  heading: string;
  stat: number;
  bgImg: string;
  link: string;
}

// const HomeHeroCard = ({ heading, stat, bgImg }: hero) => {
//   return (
//     // <div
//     //   className={`flex-1 custom-shadow ${bgImg} bg-cover bg-center bg-no-repeat flex flex-col items-center py-[2rem] px-[2rem] h-full`}
//     // >
//     <div
//       className={`flex-1 custom-shadow bg-cover bg-center bg-no-repeat flex flex-col items-center py-[2rem] px-[2rem] h-full`}
//     >
//       <h4 className="heading-four mb-8 text-center text-cut-2">{heading}</h4>
//       <p className=" heading-primary !text-primary !mb-4">
//         +<Count num={stat} duration={3} />%
//       </p>
//       {/* position bottom of the div */}
//       <Link
//         href="#"
//         className="text-link !text-[#207DE9] flex items-center gap-4"
//       >
//         <span>Read Full Case Study</span>
//         <span className="inline-block translate-y-[1px]">
//           <BsArrowRight />
//         </span>
//       </Link>
//     </div>
//   );
// };


const HomeHeroCard = ({ heading, stat, bgImg, link }: hero) => {
  return (
    <div
      className={`flex-1 custom-shadow bg-cover bg-center bg-no-repeat flex flex-col items-center py-[4rem] px-[2rem] h-full !rounded-[45px]`}
    >
      <p className=" heading-primary !text-primary !mb-4 text-left">
        +<Count num={stat} duration={3} />%
      </p>
      <h4 className="heading-four mb-8 text-center text-cut-2">{heading}</h4>

      {/* position bottom of the div */}
      <Link
        href={`/case-studies/${link
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
        className="text-link !text-[#207DE9] flex items-center gap-4"
      >
        <span>Read Full Case Study</span>
        <span className="inline-block translate-y-[1px]">
          <BsArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default HomeHeroCard;
