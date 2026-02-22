import React from "react";
import Package from "./Package";

// let bulletData: {
//   title: string;
//   icon: string;
//   price: string;
//   points: string[];
// }[];

// bulletData = [
//   {
//     title: "SILVER PLAN",
//     icon: "/assets/growth-plan/growth-plan-silver.svg",
//     price: "2500",
//     points: [
//       "150 keyphrases optimized",
//       "30 pages optimized",
//       "6 content, outreach, UX, or CRO assets per quarter",
//       "8 custom dashboards",
//       "Phone call, lead, and revenue tracking dashboard",
//     ],
//   },
//   {
//     title: "GOLD PLAN",
//     icon: "/assets/growth-plan/growth-plan-gold.svg",
//     price: "5000",
//     points: [
//       "200 keyphrases optimized",
//       "40 pages optimized",
//       "12 content, outreach, UX, or CRO assets per quarter",
//       "8 custom dashboards",
//       "Phone call, lead, and revenue tracking dashboard",
//     ],
//   },
//   {
//     title: "DIAMOND PLAN",
//     icon: "/assets/growth-plan/growth-plan-diamond.svg",
//     price: "8000",
//     points: [
//       "300 keyphrases optimized",
//       "60 pages optimized",
//       "24 content, outreach, UX, or CRO assets per quarter",
//       "10 custom dashboards",
//       "Phone call, lead, and revenue tracking dashboard",
//     ],
//   },
// ];

let bulletData: {
  title: string;
  icon: string;
  price: string;
  points: string[];
}[];

bulletData = [
  // {
  //   title: "Package 1",
  //   icon: "/assets/growth-plan/growth-plan-silver.svg",
  //   price: "499",
  //   points: [
  //     "Website Maintenance",
  //     "Google My Business",
  //     "2 Blog Post",
  //     "SMM(FB,IG,Twitter,LinkedIn,Pinterest)",
  //     "YouTube, TikTok",
  //     "Google Ads - PPC/Display",
  //     "FB, Ig Lead Ads",
  //     "FB, Ig Lead Ads",
  //     "Graphic Design (5)",
  //     "Video Editing (2)",
  //     "Local SEO",
  //     "Marketing Automation",
  //     "Technical Support",
  //     "Monthly Support",
  //   ],
  // },
  {
    title: "Our Package",
    icon: "/assets/growth-plan/growth-plan-gold.svg",
    price: "1999",
    points: [
      "Website Maintenance",
      "Google My Business",
      "4 Blog Post",
      "SEO",
      "SMM(FB,IG,Twitter,LinkedIn,Pinterest)",
      "YouTube, TikTok",
      "Google Ads - PPC/Display",
      "FB, Ig Lead Ads",
      "Graphic Design & Motion Graphic (5)",
      "Video Topic & Script",
      "Video Production",
      "Video Editing (4)",
      "Local SEO",
      "Marketing Automation",
      "Technical Support",
      "Monthly Support",
    ],
  },
  // {
  //   title: "Our Package",
  //   icon: "/assets/growth-plan/growth-plan-gold.svg",
  //   price: "1999",
  //   points: [
  //     "Website Maintenance",
  //     "Google My Business",
  //     "4 Blog Post",
  //     "SEO",
  //     "SMM(FB,IG,Twitter,LinkedIn,Pinterest)",
  //     "YouTube, TikTok",
  //     "Google Ads - PPC/Display",
  //     "FB, Ig Lead Ads",
  //     "Graphic Design & Motion Graphic (5)",
  //     "Video Topic & Script",
  //     "Video Production",
  //     "Video Editing (4)",
  //     "Local SEO",
  //     "Marketing Automation",
  //     "Technical Support",
  //     "Monthly Support",
  //   ],
  // },
];

const SectionPackage = () => {
  return (
    <div className="mt-20 mb-8">
      <div className="flex flex-wrap md:flex-nowrap gap-[3rem] md:gap-[7rem] justify-center">
        {bulletData.map((el: any, i: number) => (
          <Package data={el} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SectionPackage;
