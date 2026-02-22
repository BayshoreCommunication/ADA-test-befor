"use client";
import Package from "@/components/universal/Package";
import PackageService from "@/components/universal/PackageService";
import React from "react";

let ServicePriceData: {
  url: string;
  serviceName: string;
  otherCompany: string[];
  bayshore: string[];
}[];

ServicePriceData = [
  {
    url: "website-design",
    serviceName: "Website Design",
    otherCompany: [
      "Corporate Website Design and Development ($800-$1500)",
      "E-commerce Website Design Development ($500-$5000)",
      "Content Management System Development ($1000-$5000)",
      "Web Application Development ($2500-$5000)",
      "Website Maintenance and Support ($300-$1500)",
    ],
    bayshore: [
      "Corporate Website Design and Development ($300-$1500)",
      "E-commerce Website Design Development ($300-$4000)",
      "Content Management System Development ($600-$2500)",

      "Web Application Development ($1500-$3000)",
      "Website Maintenance and Support ($100-$500)",
    ],
  },

  {
    url: "mobile-app",
    serviceName: "Mobile App",
    otherCompany: [
      "Native and Cross-platform Development ($4000-$10000)",
      "iOS App Development ($2000-$5000)",
      "Android App Development ($2000-$5000)",

      "App Monetization ($1000-$2000)",
      "Testing and Quality Assurance ($25 per hour)",
      "IoT and Wearable App Development ($20000+)",

      "App Analytics and Performance Monitoring ($300-$1500)",
      "App Security Development ($1000-$4000)",
      "App Store Optimization ($1000-$1500)",
      "Maintenance and Updates ($1000-$2500)",
    ],
    bayshore: [
      "Native and Cross-platform Development ($2500-$5000)",
      "iOS App Development ($1500-$3000)",
      "Android App Development ($1500-$3000)",

      "App Monetization ($300-$1500)",
      "Testing and Quality Assurance ($300-$1500)",
      "IoT and Wearable App Development ($6000-$12000)",

      "App Analytics and Performance Monitoring ($100-$500)",
      "App Security Development ($500-$1500)",
      "App Store Optimization ($300-$1000)",
      "Maintenance and Updates ($500-$1500)",
    ],
  },

  {
    url: "seo-service",
    serviceName: "SEO",
    otherCompany: [
      "Keyword Research ($300-$1500)",
      "On-Page Optimization ($300-$1500)",
      "Off-Page Optimization ($300-$1500)",
      "Technical SEO ($300-$1500)",
      "Local SEO($300-$1500)",
      "E-commerce SEO ($300-$1500)",
      "SEO Audits ($300-$1500)",
      "SEO Content Writing ($300-$1500)",
      "SEO Reporting and Analytics ($300-$1500)",
      "SEO Consultation and Strategy($300-$1500)",
    ],
    bayshore: [
      "Keyword Research ($100)",
      "On-Page Optimization ($50 for one Post)",
      "Off-Page Optimization (Start from $50)",
      "Technical SEO ($100)",
      "Local SEO ($200)",
      "E-commerce SEO ($500)",
      "SEO Audits ($200)",
      "SEO Content Writing 15/H",
      "SEO Reporting and Analytics 200",
      "SEO Consultation and Strategy 200",
    ],
  },

  {
    url: "ui-ux-design",
    serviceName: "UI/UX Design",
    otherCompany: [
      "10 page ($800)",
      "UI Design ($800)",
      "Responsive Design ($800)",
      "Mobile Design View ($800)",
      "Prototype ($800)",
      "User Flow ($800)",
      "Wireframe ($800)",
      "Source File ($800)",
    ],

    bayshore: [
      "10 page ($600)",
      "UI Design ($600)",
      "Responsive Design ($600)",
      "Mobile Design View ($600)",
      "Prototype ($600)",
      "User Flow ($600)",
      "Wireframe ($600)",
      "Source File ($600)",
    ],
  },
  {
    url: "paid-advertising",
    serviceName: "Paid Advertising",
    otherCompany: [
      "Google Ads ($300-$1500)",
      "Facebook Ads($300-$1500)",
      "Display Advertising ($300-$1500)",
      "Remarketing/Retargeting ($300-$1500)",
      "Video Advertising ($300-$1500)",
      "Native Advertising ($300-$1500)",
      "LinkedIn Ads ($300-$1500)",
      "Twitter Ads ($300-$1500)",
      "Amazon Advertising ($300-$1500)",
      "Pay-Per-Click Management Services ($300-$1500)",
      "YouTube ads ($300-$1500)",
    ],
    bayshore: [
      "Google Ads start from $100",
      "Facebook Ads start from $100",
      "Display Advertising start from $100",
      "Remarketing/Retargeting start from $100",
      "Video Advertising start from $100",
      "Native Advertising start from $100",
      "LinkedIn Ads start from $100",
      "Twitter Ads start from $100",
      "Amazon Advertising start from $100",
      "Pay-Per-Click Management Services start from $100",
      "YouTube ads start from $100",
    ],
  },
  {
    url: "social-media-marketing",
    serviceName: "Social Media Marketing",
    otherCompany: [
      "Social Media Strategy Development ($300-$1500)",
      "Content Creation and Management ($300-$1500)",
      "Community Management ($300-$1500)",
      "Influencer Marketing ($300-$1500)",
      "Paid Social Media Advertising ($300-$1500)",
      "Social Media Analytics and Reporting ($300-$1500)",
      "Social Media Listening and Monitoring ($300-$1500)",
      "Social Media Contests and Campaigns ($300-$1500)",
      "Social Media Influencer Management($300-$1500)",
    ],
    bayshore: [
      "Social Media Strategy Development start from $100",
      "Content Creation and Management start from $100",
      "Community Management start from $100",
      "Influencer Marketing start from $100",
      "Paid Social Media Advertising start from $100",
      "Social Media Analytics and Reporting start from $50",
      "Social Media Listening and Monitoring start from $100",
      "Social Media Contests and Campaigns start from $100",
      "Social Media Influencer Management start from $15/H",
    ],
  },
  {
    url: "email-marketing",
    serviceName: "Email Marketing",
    otherCompany: [
      "Email Campaign Strategy ($300-$1500)",
      "Email List Building and Management ($300-$1500)",
      "Email Design and Content Creation ($300-$1500)",
      "A/B Testing and Optimization ($300-$1500)",
      "Personalization and Segmentation ($300-$1500)",
      "Email Deliverability and Spam Compliance ($300-$1500)",
      "Performance Tracking and Analytics ($300-$1500)",
      "Email List Segmentation ($300-$1500)",
      "Email Automation Integration ($300-$1500)",
    ],
    bayshore: [
      "Email Campaign Strategy start from $100",
      "Email List Building and Management start from $100",
      "Email Design and Content Creation start from $100",
      "A/B Testing and Optimization ($200-$250)",
      "Personalization and Segmentation start from $50",
      "Email Deliverability and Spam Compliance ($200-$250)",
      "Performance Tracking and Analytics start from $100",
      "Email List Segmentation ($200-$300)",
      "Email Automation Integration ($150-$200)",
    ],
  },
  {
    url: "marketing-automation",
    serviceName: "Marketing Automation",
    otherCompany: [
      "Strategy Development ($300-$1500)",
      "Marketing Automation Platform Selection ($300-$1500)",
      "Workflow Design and Implementation ($300-$1500)",
      "Lead Management and Scoring ($300-$1500)",
      "Email Campaign Automation ($300-$1500)",
      "Behavioral Tracking and Personalization ($300-$1500)",
      "Customer Relationship Management (CRM) Integration ($300-$1500)",
      "Social Media Automation ($300-$1500)",
      "Analytics and Reporting ($300-$1500)",
      "Continuous Optimization and Support ($300-$1500)",
    ],
    bayshore: [
      "Strategy Development ($200-$500)",
      "Marketing Automation Platform Selection ($200-$500)",
      "Workflow Design and Implementation ($100-$150)",
      "Lead Management and Scoring ($200-$500)",
      "Email Campaign Automation ($150-$200)",
      "Behavioral Tracking and Personalization ($150-$200)",
      "Customer Relationship Management (CRM) Integration ($200-$300)",
      "Social Media Automation ($250-$300)",
      "Analytics and Reporting $200-$300)",
      "Continuous Optimization and Support ($250-$350)",
    ],
  },
  {
    url: "content-marketing",
    serviceName: "Content Marketing",
    otherCompany: [
      "Content Strategy Development ($300-$1500)",
      "Content Creation ($300-$1500)",
      "SEO Optimization ($300-$1500)",
      "Content Distribution ($300-$1500)",
      "Content Promotion ($300-$1500)",
      "Content Calendar Management ($300-$1500)",
      "Content Performance Measurement ($300-$1500)",
      "Content Repurposing ($300-$1500)",
      "Content Collaboration and Partnerships ($300-$1500)",
      "Content Audits and Optimization ($300-$1500)",
    ],
    bayshore: [
      "Content Strategy Development ($50-$300)",
      "Content Creation ($100-$500)",
      "SEO Optimization ($50 per post)",
      "Content Distribution ($50 per post)",
      "Content Promotion ($50per post)",
      "Content Calendar Management ($100-$200)",
      "Content Performance Measurement ($50 per post)",
      "Content Repurposing ($50 per post)",
      "Content Collaboration and Partnerships ($50 per post)",
      "Content Audits and Optimization ($50 per post)",
    ],
  },
  {
    url: "content-writing",
    serviceName: "Content Writing",
    otherCompany: [
      "Blog Writing ($300-$1500)",
      "Article Writing ($300-$1500)",
      "Website Content Writing ($300-$1500)",
      "SEO Content Writing ($300-$1500)",
      "Social Media Content Writing ($300-$1500)",
      "Email Newsletter Writing ($300-$1500)",
      "Press Release Writing ($300-$1500)",
      "White-Paper and eBook Writing ($300-$1500)",
      "Case Study Writing ($300-$1500)",
      "Editing and Proofreading ($300-$1500)",
    ],
    bayshore: [
      "Blog Writing ($30-$50 per 1200/1500 word post)",
      "Article Writing ($30-$50 per 1200/1500 word post)",
      "Website Content Writing ($30-$50 per 1200/1500 word post)",
      "SEO Content Writing ($50-$60 per 1200/1500 word post)",
      "Social Media Content Writing ($30-$50 per 1200/1500 word post)",
      "Email Newsletter Writing ($30-$50 per 1200/1500 word post)",
      "Press Release Writing ($30-$50 per 1200/1500 word post)",
      "White-Paper and eBook Writing ($130-$150 per 1200/1500 word post)",
      "Case Study Writing ($30-$50 per 1200/1500 word post)",
      "Editing and Proofreading ($30-$50 per 1200/1500 word post)",
    ],
  },
  {
    url: "digital-pr",
    serviceName: "Digital PR",
    otherCompany: [
      "Online Reputation Management ($300-$1500)",
      "Media Relations ($300-$1500)",
      "Content Creation and Distribution ($300-$1500)",
      "Influencer Marketing ($300-$1500)",
      "Social Media Engagement ($300-$1500)",
      "Online Crisis Management ($300-$1500)",
      "Online Press Release Distribution ($300-$1500)",
      "Online Events and Webinars ($300-$1500)",
      "Monitoring and Analytics ($300-$1500)",
      "SEO Integration ($300-$1500)",
    ],
    bayshore: [
      "Online Reputation Management ($200-$250)",
      "Media Relations ($200-$250)",
      "Content Creation and Distribution ($200-$250)",
      "Influencer Marketing ($200-$1000)",
      "Social Media Engagement ($200-$250)",
      "Online Crisis Management ($200-$250)",
      "Online Press Release Distribution ($300-$350)",
      "Online Events and Webinars ($200-$250)",
      "Monitoring and Analytics ($200-$250)",
      "SEO Integration ($400-$500)",
    ],
  },
  {
    url: "graphic-design",
    serviceName: "Graphic Design",
    otherCompany: [
      "Logo Design ($300-$1500)",
      "Brand Identity Design ($300-$1500)",
      "Print Design ($300-$1500)",
      "Web Design ($300-$1500)",
      "UI/UX Design ($300-$1500)",
      "Infographic Design ($300-$1500)",
      "Social Media Graphics ($300-$1500)",
      "Illustrations and Icons ($300-$1500)",
      "Motion Graphics ($300-$1500)",
      "Visual Content for Digital Marketing ($300-$1500)",
    ],
    bayshore: [
      "Logo Design ($50-$70per logo)",
      "Brand Identity Design ($50-$70 per design)",
      "Print Design ($50-$70 per design)",
      "Web Design ($150-$200 per design)",
      "UI/UX Design ($200-$250per",
      "Infographic Design ($50-$70 per design)",
      "Social Media Graphics ($20-$30 per design)",
      "Illustrations and Icons ($20-$30 per design)",
      "Motion Graphics ($50-$100)",
      "Visual Content for Digital Marketing ($50-$100)",
    ],
  },
  {
    url: "motion-graphic",
    serviceName: "Motion Graphic",
    otherCompany: [
      "Explainer Videos ($300-$1500)",
      "Animated Infographics ($300-$1500)",
      "Title Sequences and Intros ($300-$1500)",
      "Logo Animation ($300-$1500)",
      "Motion Graphics for Presentations ($300-$1500)",
      "Social Media Motion Graphics ($300-$1500)",
      "Broadcast Graphics ($300-$1500)",
      "Motion Graphic Ads ($300-$1500)",
      "Interactive Motion Graphics ($300-$1500)",
      "Visual Effects ($300-$1500)",
    ],
    bayshore: [
      "Explainer Videos ($50-$100)",
      "Animated Infographics ($50-$70)",
      "Title Sequences and Intros ($50-$70)",
      "Logo Animation ($50-$100)",
      "Motion Graphics for Presentations ($50-$100)",
      "Social Media Motion Graphics ($50-$100)",
      "Broadcast Graphics ($50-$100)",
      "Motion Graphic Ads ($100-$150)",
      "Interactive Motion Graphics ($100-$150)",
      "Visual Effects ($300-$500)",
    ],
  },
  {
    url: "video-production",
    serviceName: "Video Production",
    otherCompany: [
      "Concept Development ($300-$1500)",
      "Scriptwriting ($300-$1500)",
      "Pre-production ($300-$1500)",
      "Video Shooting ($300-$1500)",
      "Video Editing ($300-$1500)",
      "Motion Graphics and Animation ($300-$1500)",
      "Voiceover and Sound Design ($300-$1500)",
      "Video Transcoding and Formatting ($300-$1500)",
      "Subtitling and Captioning ($300-$1500)",
      "Video Distribution and Promotion ($300-$1500)",
    ],
    bayshore: [
      "Concept Development ($50-$100 per idea)",
      "Scriptwriting ($100-$150 per script)",
      "Pre-production ($200-$500)",
      "Video Shooting ($200-$500)",
      "Video Editing ($200-$500)",
      "Motion Graphics and Animation ($50-$100)",
      "Voiceover and Sound Design ($100-$150)",
      "Video Transcoding and Formatting ($100-$150)",
      "Subtitling and Captioning ($100-$120)",
      "Video Distribution and Promotion ($100-$150)",
    ],
  },
  {
    url: "influencer-marketing",
    serviceName: "Influencer Marketing",
    otherCompany: [
      "Influencer Identification ($300-$1500)",
      "Campaign Strategy ($300-$1500)",
      "Relationship Building ($300-$1500)",
      "Content Creation ($300-$1500)",
      "Campaign Management ($300-$1500)",
      "Performance Tracking and Reporting ($300-$1500)",
      "Influencer Events and Activations ($300-$1500)",
      "Influencer Outreach and Management ($300-$1500)",
      "Affiliate and Ambassador Programs ($300-$1500)",
      "Influencer Analytics and Insights ($300-$1500)",
    ],
    bayshore: [
      "Influencer Identification ($30-$50 per influencer)",
      "Campaign Strategy ($50-$70)",
      "Relationship Building ($50-$70)",
      "Content Creation ($50-$70 per post)",
      "Campaign Management ($30-$50)",
      "Performance Tracking and Reporting ($130-$150)",
      "Influencer Events and Activations ($130-$150)",
      "Influencer Outreach and Management ($150-$200)",
      "Affiliate and Ambassador Programs ($200-$300)",
      "Influencer Analytics and Insights ($150-$200)",
    ],
  },
];

const ServicePrice = ({ url }: any) => {
  //   console.log("Data check", TestData.map((el) => el.otherCompany)[0]);
  const data = ServicePriceData.filter((el: any) => el.url === url);
  //console.log("data ", data);
  return (
    <div className="mt-20 mb-8">
      <div>
        {ServicePriceData.filter((el: any) => el.url === url).map(
          (el: any, i: number) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-[.5rem]"
              key={i}
            >
              <PackageService
                data={el.otherCompany}
                title={"Other Company Offer"}
              />
              <PackageService data={el.bayshore} title={"We Offer"} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

// const ServicePrice = ({ url }: any) => {
//   const data = ServicePriceData.filter((el: any) => el.url === url);
//   return (
//     <div className="mt-20 mb-8">
//       <div className="flex flex-wrap md:flex-nowrap gap-[4rem] justify-center">
//         {ServicePriceData.filter((el: any) => el.url === url).map(
//           (el: any, i: number) => (
//             <div key={i}>
//               <PackageService data={el.otherCompany} title={"Market Offer"} />
//               <PackageService data={el.bayshore} title={"Our Offer"} />
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

export default ServicePrice;
