import Reveal from "@/components/motion/Reveal";
import { AnimationHomeTabBar } from "@/components/unique/Home/AnimationHomeTabBar";
import HeroScrollImage from "@/components/unique/Home/HeroScrollImage";
import HomeLogoLoop from "@/components/unique/Home/HomeLogoLoop";
import HomeServiceCard from "@/components/unique/Home/HomeServiceCard";
import Progress from "@/components/unique/Home/Progress";
import HomeTabBar from "@/components/unique/HomeTabBar";

import AboutUs from "@/components/universal/AboutUs";
import Boost from "@/components/universal/Boost";
import Footer from "@/components/universal/Footer";
import HeroLeft from "@/components/universal/HeroLeft";
import Info from "@/components/universal/Info";
import Navbar from "@/components/universal/Navbar";
import Results from "@/components/universal/Results";   
import SectionHeader from "@/components/universal/SectionHeader";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Bayshore Communication is Your all-in-one partner for accelerating business growth",
  description:
    "Welcome to Bayshore Communication!! Grow your brand or business with us. Whether you need digital marketing services, or software solutions, we've you covered.",
};

const Page = () => {
  return (
    <>
      <Navbar />
      <SectionLayout
        bg="bg-[#F4F4F4]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-[72px] items-center ">
          <div>
            {/* <Reveal>
              <p className="text-[2rem] text-center md:text-start text-[#3E7BE2] mb-[1.5rem] lg:mb-[2.5rem]">
                {hero[0].text}
              </p>
            </Reveal> */}

            <HeroLeft
              text={hero[0].text}
              heading={hero[0].heading}
              description={hero[0].description}
            />
          </div>
          <div className="px-[2rem] sm:px-[6rem] md:px-0">
            <div>
              <Reveal>
                {/* <Image
                  src='/assets/demo.svg'
                  alt='marketing'
                  width={800}
                  height={800}
                  className='w-full h-auto'
                /> */}
                <HeroScrollImage />
              </Reveal>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Logo section */}

      <SectionLayout bg="">
        <HomeLogoLoop />
      </SectionLayout>

      {/* Tailored */}
      <SectionLayout bg="">
        <div>
          <SectionHeader
            heading="Tailored Business Solutions for Your Unique Needs"
            text="We deliver results that exceed your expectations, marketing needs,
            goals and fits your budget. Our expertise, creativity, and passion
            will make your business shine."
          />
        </div>

        <div className="mt-10">
          <AnimationHomeTabBar />
        </div>
      </SectionLayout>

      {/* Boost */}

      <Boost
        heading="Need a Boost for You Business? Get Your FREE Quote Today!"
        btnText="Send Us a proposal"
      />

      {/* Campaigns */}
      <SectionLayout bg="">
        <Reveal>
          <SectionHeader
            heading="Drive Results Through Innovative Digital Marketing 
            Campaigns"
            text="Enhance your online presence and reach more customers with Bayshore Communication. We provides an extensive digital marketing services that work in synergy to create, engage, and convert leads. Plus, our exclusive tech-powered tools give you an edge over the competition."
          />
        </Reveal>

        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2  mb-8 gap-8 lg:gap-[5rem] px-1 sm:px-[10vw] md:px-0 justify-between ">
            <Reveal>
              <HomeServiceCard
                imgLink="/assets/growth-marketing.svg"
                title="Growth Marketing"
                box={Box1}
              />
            </Reveal>

            <Reveal>
              <HomeServiceCard
                imgLink="/assets/software-solution.svg"
                title="Software Solution"
                box={Box2}
              />
            </Reveal>

            <Reveal>
              <HomeServiceCard
                imgLink="/assets/offshore-office.svg"
                title="Offshore Office"
                box={Box3}
              />
            </Reveal>

            <Reveal>
              <HomeServiceCard
                imgLink="/assets/content-development.svg"
                title="Content Development"
                box={Box4}
              />
            </Reveal>
          </div>
        </div>
      </SectionLayout>

      {/* info */}
      <SectionLayout bg="">
        <Info />
      </SectionLayout>

      {/* Benefits */}
      <SectionLayout bg="bg-[#F4F4F4]">
        <div className="flex flex-col items-center">
          <Reveal>
            <h2 className="heading-secondary !text-center">
              Benefits of Choosing Us
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-[1.5rem] !text-center max-w-[622px] mx-auto mb-10">
              We offer creative solutions, data-driven strategies, and
              measurable results for your digital marketing needs. Choose us and
              grow your business online.
            </p>
          </Reveal>
        </div>
        <div className="grid items-center grid-cols-1 gap-16 mt-12 md:grid-cols-2">
          <div className="">
            <Reveal>
              <h3 className="heading-tertiary">
                Get Advantage and Access to <br /> Our Tools and Expertise
              </h3>
            </Reveal>

            <Reveal>
              <p className="text-[1.5rem] text-[gray]">
                Unlock excellence with Bayshore Communication&apos;s core
                services. From Growth Marketing to Software Solution and
                Development, Offshore Office, and Content Development,
                we&apos;re your path to exceptional results. Don&apos;t settle
                for less – our cutting-edge tools and experienced team will help
                you achieve your digital marketing goals faster and easier. Get
                ahead of the competition by getting in touch with us today, and
                experience the difference in our comprehensive approach.
              </p>
            </Reveal>
          </div>

          <div className=" flex flex-col gap-8 lg:gap-12 md:pl-[5rem] sm:px-[15vw] md:px-0">
            <Progress
              title="Growth Marketing"
              bg="bg-gradient-to-r from-[#D4145A] to-[#FBB03B]"
              border="bg-gradient-to-r from-[#4D4855] to-[#D7D7D7]"
              percentage="w-[90%]"
              percentageVal="90%"
              percentageValpx="sm:left-[82%] left-[80%] md:left-[80%] lg:left-[84%]"
            />
            <Progress
              title="Software Solution and Development"
              bg="bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]"
              border="bg-gradient-to-r from-[#4D4855] to-[#D7D7D7]"
              percentage="w-[96%]"
              percentageVal="96%"
              percentageValpx="sm:left-[87%] left-[86%] md:left-[86%] lg:left-[90%]"
            />
            <Progress
              title="Offshore Office"
              bg="bg-gradient-to-r from-[#11998E] to-[#38EF7D]"
              border="bg-gradient-to-r from-[#4D4855] to-[#D7D7D7]"
              percentage="w-[92%]"
              percentageVal="92%"
              percentageValpx="sm:left-[83%] left-[82%] md:left-[82%] lg:left-[86%]"
            />
            <Progress
              title="Content Development"
              bg="bg-gradient-to-r from-[#FF61D2] to-[#FE9090]"
              border="bg-gradient-to-r from-[#4D4855] to-[#D7D7D7]"
              percentage="w-[88%]"
              percentageVal="88%"
              percentageValpx="sm:left-[80%] md:left-[78%] lg:left-[82%] left-[78%]"
            />
          </div>
        </div>
      </SectionLayout>

      {/* Marketing */}
      <SectionLayout bg="">
        <div className="flex flex-col items-center mt-10">
          <Reveal>
            <h2 className="heading-secondary ">
              Integrated Marketing, Design and Development
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
              Marketing, design, and development in one place. We create
              stunning online solutions for your brand. Contact us today and get
              started.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-16 mb-5 bg-cover bg-[url('/assets/icons-for-web/dots-backgound1.png')]">
            <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-[4rem] sm:gap-[2rem] md:gap-[4rem] lg:gap-[8rem] ">
              {links.map((el: any, i: number) => (
                <LogosM el={el} key={i} />
              ))}
            </div>
          </div>
        </Reveal>
      </SectionLayout>
      {/* about us */}
      {/* <AboutUs /> */}
      {/*  Result */}
      <Results heading="We Have Some Amazing Results" />
      <Footer />
    </>
  );
};

export default Page;

const Box1: any = [
  "SEO",
  "Paid Advertising",
  "Social Media Marketing",
  "Email Marketing",
  "Marketing Automation",
  "Content Marketing",
  "Digital PR",
  "Influencer Marketing",
];

const Box2: any = [
  "Android App Development",
  "IOS App Development",
  "Website Development",
  "Ecommerce Development",
  "SaaS Development",
  "Prototype",
  "Update and Maintenance",
  "UI/UX Design",
];

const Box3: any = [
  "Own Development Team",
  "Own Marketing Team",
  "Graphics Design",
  "Call Center",
  "Bookkeeping and Finance Team",
  "Virtual Assistant",
  "Project Management",
  "CRM",
];

const Box4: any = [
  "Video Production",
  "Video Editing",
  "Article Writing",
  "Social Media Post Design",
  "Motion Graphics",
  "3D Product Visualization",
  "TVC/ Ad Creative Design",
  "Video Production Setup",
];

//  Home Hero section
let hero: {
  text: string;
  heading: string;
  description: string;
}[];

hero = [
  {
    text: "Ease Your Business Challenges with Our Expertise.",
    heading: "Get Your Own Workforce for Your Business",
    description: `Bayshore Communication is your all-in-one partner for accelerating business growth. With a dynamic range of services spanning Growth Marketing, Software Solutions, Offshore Office Support, and Content Development, we empower business owners to thrive in the digital era. Experience a seamless journey towards excellence and discover endless possibilities – where your vision meets innovation!`,
  },
];

let links: {
  link: string;
  alt: string;
  text: string;
  desc: string;
}[];

links = [
  {
    link: "/assets/icons-for-web/color-icon/analyze-and-measure-results.png",
    alt: "analyze-and-Measure-Results",
    text: "Analyze and Measure Results",
    desc: "We analyze the numbers of your marketing efforts. We track every step customers take and turn that data into smart ideas to make your strategy better and get results you can see",
  },
  {
    link: "/assets/icons-for-web/color-icon/conversion-optimization.png",
    alt: "conversion-optimization",
    text: "Conversion Optimization",
    desc: "When someone checks out your site, we make sure they don't just browse they buy. We smooth out the buying process, make offers too good to resist, and bring in strategies that turn clicks into sales",
  },

  {
    link: "/assets/icons-for-web/color-icon/define.png",
    alt: "Define",
    text: "Define",
    desc: "We’ll help you find what really makes your brand tick. By diving deep into what you stand for and who you're trying to reach, we'll create a brand that feels just right everywhere it shows up",
  },

  {
    link: "/assets/icons-for-web/color-icon/engage.png",
    alt: "engage",
    text: "Engage",
    desc: "We make your brand more than just another name online. We create awesome content, build lively communities, and start conversations that really connect with the people you want to reach",
  },

  {
    link: "/assets/icons-for-web/color-icon/seo-and-sem.png",
    alt: "seo-sem",
    text: "SEO and SEM",
    desc: "We'll make sure your brand shines bright online. We've got tricks up our sleeves to get you to the top of those Google searches, both through organic methods and clever paid strategies",
  },

  {
    link: "/assets/icons-for-web/color-icon/strategy.png",
    alt: "strategy",
    text: "Strategy",
    desc: "Let's plan your success step by step. We use the info we gather to create plans that match your goals, making sure your marketing helps your business grow in a big way",
  },

  {
    link: "/assets/icons-for-web/color-icon/target-audience.png",
    alt: "target-audience",
    text: "Target Audience",
    desc: "No more random ads to everyone! We use smart ways to find exactly who your best customers are. That way, your marketing hits the bullseye with the right audience at just the right time",
  },
  {
    link: "/assets/icons-for-web/color-icon/ui-ux.png",
    alt: "ui-ux",
    text: "UI UX Design",
    desc: "Your website and digital spaces won't just look good—they'll be easy and enjoyable to use. We design them so that your customers can move around effortlessly, keeping them engaged and loya",
  },
  {
    link: "/assets/icons-for-web/color-icon/video-production.png",
    alt: "video-production",
    text: "Video Production",
    desc: "Our videos aren't just about showing off your brand; they tell its story. They're emotional, attention-grabbing, and get people to take action, making your brand stand out in the online crowd",
  },
];

const LogosM = ({ el }: any) => {
  return (
    <>
      <Reveal>
        <div className="flex flex-col justify-start gap-2 items-left sm:items-center md:flex-row md:max-w-2xl">
          <Image
            src={el.link}
            alt={el.alt}
            width={600}
            height={600}
            className="w-[35%] sm:w-[35%] h-auto hover:animate-bounce"
          />
          <div className="flex flex-col mt-6 leading-normal sm:pl-4 md:mt-0">
            <h5 className="mb-2 text-2xl font-bold tracking-widest text-gray-900">
              {el.text}
            </h5>
            <p className="mb-3 text-xl font-normal leading-loose tracking-widest text-gray-600 ">
              {el.desc}
            </p>
          </div>
        </div>
      </Reveal>
    </>
  );
};
