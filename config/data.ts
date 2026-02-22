export interface Insight {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export const insightsData: Insight[] = [
  {
    id: 1,
    title:
      "How Founder-Led Businesses Can Break Free from Stagnation and Scale to $100M and Beyond",
    description:
      "How Founder-Led Businesses Can Break Free from Stagnation and Scale to $100M and Beyond",
    image: "/images/about-us/image 28 (1).png",
    date: "Dec 15 2024",
  },
  {
    id: 2,
    title: "Scaling Your Business Effectively",
    description:
      "Discover the key principles for scaling your business while maintaining quality and culture.",
    image: "/images/homepage/blog2.png",
    date: "Dec 10 2024",
  },
  {
    id: 3,
    title: "Leadership in the Digital Age",
    description:
      "Explore modern leadership strategies that work in today's fast-paced digital environment.",
    image: "/images/homepage/blog3.png",
    date: "Dec 05 2024",
  },
];

export interface News {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  url: string;
}

export const newsData: News[] = [
  {
    id: 1,
    title: "Innovative Franchise Model Becomes Shwapno's Growth Engine",
    description:
      "Sabbir Hasan Nasir's franchise innovation at Shwapno turned a debt-burdened retail chain into a national growth engine. By flipping the traditional franchise model and retaining operational control, he pioneered a system that delivers consistent profit while empowering SME investors across Bangladesh.",
    image: "/news/Frame90.png",
    date: "Jan 15 2024",
    url: "https://www.tbsnews.net/economy/corporates/innovative-franchise-model-becomes-shwapnos-growth-engine-aci-logistics-md-sabbir",
  },
  // {
  //   id: 2,
  //   title:
  //     "The Corporate Sufi of Bangladesh: An Interview with Sabbir Hasan Nasir",
  //   description:
  //     "The corporate Sufi of Bangladesh, Sabbir Hasan Nasir, blends engineering precision with spiritual depth, transforming his unconventional journey across music, physics, and business into a masterclass in visionary leadership. As the force behind Shwapno's turnaround, he exemplifies how empathy, design thinking, and relentless pursuit of excellence can reshape industries.",
  //   image: "/news/Frame91.png",
  //   date: "Oct 24 2017",
  //   url: "https://futurestartup.com/2017/10/24/an-interview-sabbir-hasan-nasir-executive-directoraci-logistics/",
  // },
  {
    id: 4,
    title: "From Engineer to Retail Force: Sabbir's Otobi Transformation",
    description:
      "Personally requested by Otobi's legendary founder in his final days, Sabbir Hasan Nasir took charge of a struggling legacy; what happened next changed the course of the company. How did an engineer with global corporate experience turn an artist's dream into a regional retail force?",
    image: "/news/Frame93.png",
    date: "Mar 20 2023",
    url: "https://www.thedailystar.net/news-detail-73783",
  },

  {
    id: 5,
    title: "ACI Ltd Announces Sabbir H Nasir as New Managing Director",
    description:
      "After transforming Shwapno into the country's most recognized retail brand, Sabbir H Nasir takes on the role of Managing Director. With decades of local and global leadership experience, his next move signals a strategic shift for ACI's retail ambitions.",
    image: "/news/Frame94.png",
    date: "Jun 10 2023",
    url: "https://www.dhakatribune.com/business/345984/aci-ltd-announces-sabbir-h-nasir-as-newmd-of",
  },
  {
    id: 6,
    title:
      "How Shwapno Heads Towards Full Break-Even: A Masterpiece in Progress",
    description:
      "Layer by layer, Sabbir H Nasir has painted Shwapno across the map. Brushstrokes of risk, resilience, and reinvention led the company to dominate its competitions. As the outlines of profit begin to take shape, his long-drawn composition nears its boldest form yet.",
    image: "/news/Frame95.png",
    date: "Sep 05 2023",
    url: "https://www.tbsnews.net/economy/corporates/how-shwapno-heads-towards-full-break-even-852371",
  },
  {
    id: 3,
    title: "Life Lessons from Sabbir Hasan Nasir: 10 Sharp Insights",
    description:
      "In this deeply personal feature, Sabbir Hasan Nasir, Executive Director of ACI Logistics and the man behind Shwapno's retail revolution, opens up about the philosophies that shaped his life. From studying under physicist Dr. Jamal Nazrul Islam to designing organizations with empathy and soul, he shares 10 sharp lessons on creativity, growth, and leading with meaning.",
    image: "/news/Frame92.png",
    date: "Nov 25 2019",
    url: "https://futurestartup.com/2019/11/25/life-lessons-sabbir-hasan-nasir-aci-logistics/",
  },
];
