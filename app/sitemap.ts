type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?: string;
  priority?: number;
}>;

export default function Sitemap(): Sitemap {
  const pages = [
    "https://www.bayshorecommunication.com",
    "https://www.bayshorecommunication.com/about-us",
    "https://www.bayshorecommunication.com/our-services",
    "https://www.bayshorecommunication.com/growth-plan",
    "https://www.bayshorecommunication.com/case-studies",
    "https://www.bayshorecommunication.com/blog",
    "https://www.bayshorecommunication.com/contact",
    "https://www.bayshorecommunication.com/career",
    "https://www.bayshorecommunication.com/refer-client",
    "https://www.bayshorecommunication.com/faq",
    "https://www.bayshorecommunication.com/privacy-policy",
    "https://www.bayshorecommunication.com/terms-conditions",
    "https://www.bayshorecommunication.com/our-services/website-design",
    "https://www.bayshorecommunication.com/our-services/mobile-app",
    "https://www.bayshorecommunication.com/our-services/seo-service",
    "https://www.bayshorecommunication.com/our-services/ui-ux-design",
    "https://www.bayshorecommunication.com/our-services/paid-advertising",
    "https://www.bayshorecommunication.com/our-services/social-media-marketing",
    "https://www.bayshorecommunication.com/our-services/email-marketing",
    "https://www.bayshorecommunication.com/our-services/marketing-automation",
    "https://www.bayshorecommunication.com/our-services/content-marketing",
    "https://www.bayshorecommunication.com/our-services/content-writing",
    "https://www.bayshorecommunication.com/our-services/digital-pr",
    "https://www.bayshorecommunication.com/our-services/graphic-design",
    "https://www.bayshorecommunication.com/our-services/motion-graphic",
    "https://www.bayshorecommunication.com/our-services/video-production",
    "https://www.bayshorecommunication.com/our-services/influencer-marketing",
    "https://www.bayshorecommunication.com/our-services/digital-marketing",
    "https://www.bayshorecommunication.com/our-services/web-design",
    "https://www.bayshorecommunication.com/our-services/seo",
    "https://www.bayshorecommunication.com/case-studies/catflix-digital-marketing-case-study",
    "https://www.bayshorecommunication.com/case-studies/immigration-lawyer-digital-marketing-case-study",
    "https://www.bayshorecommunication.com/blog/how_google_maps_can_help_your_business",
    "https://www.bayshorecommunication.com/blog/marketing-to-millennials-reaching-the-digital-native-generation",
    "https://www.bayshorecommunication.com/blog/why_is_an_seo_friendly_website_important_for_business",
    "https://www.bayshorecommunication.com/blog/growth-tactics-for-small-business-local-seo",
  ];

  const sitemap: Sitemap = pages.map((url) => ({
    url,
    // lastModified: new Date(),
  }));

  return sitemap;
}
