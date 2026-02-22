// Define the Service interface
interface Service {
  servicesName: string | null;
  serviceDetails: string | null;
  unitPrice: number | null;
  quantity: number | null;
  estimatedTotalPrice: number | null;
}
// export const InitialPricingListMain: Service[] = [
//   {
//     servicesName: [
//       { name: null },
//       { name: "Website Maintains" },
//       { name: null },
//     ],
//     serviceDetails: [
//       { services: "Maintains, Cybersecurity, Hosting, SSL" },
//       { services: "Technical Support" },
//       { services: "Technical SEO" },
//     ],
//     unitPrice: [{ price: null }, { price: 100 }, { price: null }],
//     quantity: [{ quantitys: null }, { quantitys: 1 }, { quantitys: null }],
//     estimatedTotalPrice: [
//       { totalPrice: null },
//       { totalPrice: 100 },
//       { totalPrice: null },
//     ],
//   },
//   {
//     servicesName: [
//       { name: null },
//       { name: "Search Engine Optimization" },
//       { name: null },
//     ],
//     serviceDetails: [
//       { services: "Keywords Analysis" },
//       { services: "On Page SEO" },
//       { services: "Off Page SEO, SEO Tools" },
//     ],
//     unitPrice: [{ price: null }, { price: 550 }, { price: null }],
//     quantity: [{ quantitys: null }, { quantitys: 1 }, { quantitys: null }],
//     estimatedTotalPrice: [
//       { totalPrice: null },
//       { totalPrice: 550 },
//       { totalPrice: null },
//     ],
//   },
//   {
//     servicesName: [{ name: null }, { name: "Content Writing" }, { name: null }],
//     serviceDetails: [
//       { services: "Blogs Writing (Avg 1500 Words/Blog)" },
//       {
//         services:
//           "Blog Graphics, Thumniels & Image SEO Optimization (Avg 3 Copyright Free Images/Blog)",
//       },
//       { services: "On Page SEO, Social Share" },
//     ],
//     unitPrice: [{ price: 50 }, { price: 5 }, { price: null }],
//     quantity: [{ quantitys: 4 }, { quantitys: 12 }, { quantitys: null }],
//     estimatedTotalPrice: [
//       { totalPrice: 200 },
//       { totalPrice: 60 },
//       { totalPrice: null },
//     ],
//   },
//   {
//     servicesName: [{ name: "Google My Business" }],
//     serviceDetails: [{ services: "Management" }, { services: "SEO " }],
//     unitPrice: [{ price: 100 }],
//     quantity: [{ quantitys: 1 }],
//     estimatedTotalPrice: [{ totalPrice: 100 }],
//   },
//   {
//     servicesName: [
//       { name: null },
//       { name: null },
//       { name: "Social Media Management" },
//       { name: null },
//       { name: null },
//       { name: null },
//     ],
//     serviceDetails: [
//       { services: "Content Idea Genaration" },
//       {
//         services: "Content Design",
//       },
//       { services: "Social Media Calender Management (4/Month)" },
//       { services: "Event Calender Management (16/Year" },
//       { services: "Publishing with Creative Caption & HashTag" },
//       { services: "Facebook, Instagram, Threads, Twitter, LinkedIn" },
//     ],
//     unitPrice: [{ price: 250 }],
//     quantity: [{ quantitys: 1 }, { quantitys: null }],
//     estimatedTotalPrice: [{ totalPrice: 250 }],
//   },

//   {
//     servicesName: [
//       { name: null },
//       { name: null },
//       { name: null },
//       { name: null },
//       { name: null },
//       { name: "Video Production" },
//       { name: null },
//       { name: null },
//       { name: null },
//       { name: null },
//     ],
//     serviceDetails: [
//       { services: "Video Production Tranning" },
//       { services: "Studio Setup" },
//       { services: "Video Shoot (1 Day/Month)" },
//       { services: "Topics With Outline" },
//       { services: "Video Editing (4/Month)" },
//       { services: "Reels Editing (4/Month)" },
//       { services: "Publishing with Creative Description & SEO" },
//       { services: "YouTube, TikTok, Facebook, Instagram" },
//     ],
//     unitPrice: [
//       { price: null },
//       { price: null },
//       { price: 350 },
//       { price: null },
//       { price: 50 },
//       { price: 20 },
//       { price: 20 },
//       { price: null },
//     ],
//     quantity: [
//       { quantitys: null },
//       { quantitys: null },
//       { quantitys: 0 },
//       { quantitys: null },
//       { quantitys: 0 },
//       { quantitys: 0 },
//       { quantitys: 0 },
//       { quantitys: null },
//     ],
//     estimatedTotalPrice: [
//       { totalPrice: null },
//       { totalPrice: null },
//       { totalPrice: 0 },
//       { totalPrice: null },
//       { totalPrice: 0 },
//       { totalPrice: 0 },
//       { totalPrice: 0 },
//       { totalPrice: null },
//     ],
//   },
//   {
//     servicesName: [
//       { name: null },
//       { name: "Email Marketing" },
//       { name: null },
//       { name: null },
//     ],
//     serviceDetails: [
//       {
//         services: "Campaign Plan",
//       },
//       { services: "Email Copy Writing (4/Month)" },
//       { services: "Email Graphic (4/Month)" },
//       { services: "Template Design" },
//       { services: "Campaign Management" },
//     ],
//     unitPrice: [{ price: 200 }],
//     quantity: [{ quantitys: 0 }],
//     estimatedTotalPrice: [{ totalPrice: 0 }],
//   },
//   {
//     servicesName: [
//       { name: null },
//       { name: "Digital Advertising" },
//       { name: null },
//       { name: null },
//     ],
//     serviceDetails: [
//       {
//         services:
//           "Enviorment Setup, CRM Intrigration, Ad Creative, Campaign Management",
//       },
//       { services: "Facebook, Instagram, Google, YouTube" },
//       { services: "Email Graphic (4/Month)" },
//       { services: "Lead Ads, Display Ad With 15% Ad Spend" },
//     ],
//     unitPrice: [{ price: 200 }],
//     quantity: [{ quantitys: 0 }],
//     estimatedTotalPrice: [{ totalPrice: 0 }],
//   },
//   {
//     servicesName: [
//       { name: null },
//       { name: "Community Managment" },
//       { name: null },
//     ],
//     serviceDetails: [
//       {
//         services: "Social Media Group Managment",
//       },
//       { services: "Cold DM" },
//       { services: "Lead Forwarding" },
//     ],
//     unitPrice: [{ price: 300 }],
//     quantity: [{ quantitys: 0 }],
//     estimatedTotalPrice: [{ totalPrice: 0 }],
//   },
//   {
//     servicesName: [{ name: "Dedicated Marketing Manager" }],
//     serviceDetails: [
//       {
//         services: "",
//       },
//     ],
//     unitPrice: [{ price: 650 }],
//     quantity: [{ quantitys: 0 }],
//     estimatedTotalPrice: [{ totalPrice: 0 }],
//   },
//   {
//     servicesName: [{ name: "Offshore Support" }],
//     serviceDetails: [
//       {
//         services: "",
//       },
//     ],
//     unitPrice: [{ price: 500 }],
//     quantity: [{ quantitys: 0 }],
//     estimatedTotalPrice: [{ totalPrice: 0 }],
//   },
//   {
//     servicesName: [{ name: "Marketing Automation" }],
//     serviceDetails: [
//       {
//         services: "",
//       },
//     ],
//     unitPrice: [{ price: null }],
//     quantity: [{ quantitys: null }],
//     estimatedTotalPrice: [{ totalPrice: null }],
//   },
//   {
//     servicesName: [{ name: "Technical Support" }],
//     serviceDetails: [
//       {
//         services: "",
//       },
//     ],
//     unitPrice: [{ price: null }],
//     quantity: [{ quantitys: null }],
//     estimatedTotalPrice: [{ totalPrice: null }],
//   },

//   {
//     servicesName: [{ name: "Monthly Report" }],
//     serviceDetails: [
//       {
//         services: "Work Update & Performance",
//       },
//     ],
//     unitPrice: [{ price: null }],
//     quantity: [{ quantitys: null }],
//     estimatedTotalPrice: [{ totalPrice: null }],
//   },
// ];

export const InitialPricingList: Service[] = [
  {
    servicesName: "Website Maintains",
    serviceDetails: `Website Maintenance, Cybersecurity, Hosting, SSL,
  Technical Support, Technical SEO`,
    unitPrice: 100,
    quantity: 1,
    estimatedTotalPrice: 100,
  },

  {
    servicesName: "Search Engine Optimization",
    serviceDetails: `Keywords Research, On-Page SEO, Off-Page SEO
  Including All SEO Tools`,
    unitPrice: 550,
    quantity: 1,
    estimatedTotalPrice: 550,
  },

  {
    servicesName: "Content Writing",
    serviceDetails: `Copyright Free Human Written Blogs (Avg 1500
  Words/Blog), On-Page SEO`,
    unitPrice: 50,
    quantity: 1,
    estimatedTotalPrice: 50,
  },

  {
    servicesName: "Creative Content (Graphic Design)",
    serviceDetails: `Blog Graphics, Thumbnails & Image SEO Optimization
  (Avg 4 Copyright Premium Images/Blog)`,
    unitPrice: 5,
    quantity: 1,
    estimatedTotalPrice: 5,
  },

  {
    servicesName: "Local SEO - Google My Business",
    serviceDetails: `Management & SEO`,
    unitPrice: 200,
    quantity: 1,
    estimatedTotalPrice: 200,
  },

  {
    servicesName: `Social Media Management & Content
  Creation`,
    serviceDetails: `Content Idea Generation, Content Design, Social Media
  Calendar Management (4/Month), Event Calendar Management (16/Year), Publishing with Creative
  Captions & HashTags & Social Share on Facebook,
  Instagram, Threads, Twitter, and LinkedIn`,
    unitPrice: 250,
    quantity: 1,
    estimatedTotalPrice: 250,
  },

  {
    servicesName: `Video Production`,
    serviceDetails: `Video Production Training, Studio Setup, Video Shoot (1
Day/Month)`,
    unitPrice: 350,
    quantity: 1,
    estimatedTotalPrice: 350,
  },

  {
    servicesName: `Video Editing (Long & Short)`,
    serviceDetails: `Topics Research With Outline, Video Editing, Short Video
Editing, Publishing with Creative Description & SEO on
YouTube, TikTok, Facebook, and Instagram`,
    unitPrice: 100,
    quantity: 1,
    estimatedTotalPrice: 100,
  },

  {
    servicesName: `Email Marketing`,
    serviceDetails: `Campaign Plan, Lead Generation, Email Copy Writing (4/Month), Email
Graphic (4/Month), Email Template Design, Campaign Management, Direct Sales Campaign`,
    unitPrice: 200,
    quantity: 1,
    estimatedTotalPrice: 200,
  },

  {
    servicesName: `Digital Advertising`,
    serviceDetails: `Environment Setup, CRM Integration, Ad Creative,
Campaign Management Facebook, Instagram, Google,
YouTube Lead Ads, Display ads with 15% Ad Spend`,
    unitPrice: 200,
    quantity: 1,
    estimatedTotalPrice: 200,
  },

  {
    servicesName: `AI-Driven Marketing`,
    serviceDetails: `Leverage AI tools to analyze customer behavior, automate campaign delivery, personalize content, and optimize conversion funnels. Includes AI-generated content, predictive analysis, chatbot enhancements, and A/B testing.`,
    unitPrice: 350,
    quantity: 1,
    estimatedTotalPrice: 350.00,
  },
  {
    servicesName: `Social Media Endorsement (Quora, Reddit, Facebook)`,
    serviceDetails: `Strategic brand promotion through trusted community-based platforms. Includes native post creation, engagement through comments, reputation building, and audience-targeted endorsement campaigns across Quora, Reddit, and Facebook Groups.`,
    unitPrice: 350,
    quantity: 1,
    estimatedTotalPrice: 350.00,
  },
  {
    servicesName: `Dedicated Marketing Manager`,
    serviceDetails: `Accounts Management, Crisis Management, Lead
Nurturing & Forwarding, Growth Monitoring,
Performance Tracking & Reporting`,
    unitPrice: 650,
    quantity: 1,
    estimatedTotalPrice: 650,
  },
];
