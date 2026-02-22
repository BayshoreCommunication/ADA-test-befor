import { services } from "@/components/unique/services/Service";
import SectionLayout from "@/components/universal/SectionLayout";
import Parser from "html-react-parser";
import Image from "next/image";
import AboutUs from "@/components/universal/AboutUs";
import Consultaion from "@/components/universal/Consultaion";
import Hero, { HeroIndividual } from "@/components/universal/Hero";
import Info from "@/components/universal/Info";
import ServiceTabBar from "@/components/unique/ServiceTabBar";
import { BoostService } from "@/components/universal/Boost";
import SectionPackage from "@/components/universal/SectionPackage";
import ServicePrice from "@/components/unique/services/ServicePrice";
import { useParams } from "next/navigation";
import { log } from "console";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import GetAllBlogData from "@/lib/GetAllBlogData";
import Head from "next/head";

//  Home Hero section
let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Empower Your Business with Innovative Marketing Solutions",
    description: `Bayshore Communication is a digital marketing company that offers web and app 
    development, SEO and online advertising, social media and email marketing, 
    content creation and distribution, UI/UX, graphics, video production, and 
    influencer marketing services. We provide innovative and practical solutions to 
    help you expand your company globally and accomplish your goals.`,
  },
];

const Page = async ({ params }: { params: { service: string } }) => {
  const parameter = params.service;
  const individualService = services.filter((elem) => elem.url === parameter);
  const individualHomeTabBar = individualService.map((el) => el.homeTabBar)[0];

  const blogData = await GetAllBlogData();

  return (
    <>
      <Reveal>
        <HeroIndividual
          heading={individualService[0]?.topHeroLeftTitle}
          description={individualService[0]?.topHeroLeftDescription}
          // src={individualService.map((elem, index) => elem.heroImg)}
          imgLink={individualService[0]?.heroImg}
        />
      </Reveal>

      {/* <div className="mt-16">
        <Info />
      </div> */}

      <div className="relative mt-16">
        <div className="">
          {individualService?.map((elem, index) => (
            <div key={index}>
              <Reveal>
                <SectionLayout bg="">
                  <div className="flex gap-10">
                    <div className="flex-[5] h-[100%] service-style">
                      <Reveal>
                        <div>
                          <>
                            <div className="">
                              <div className="rounded-[10px] px-4 pb-16 !text-justify">
                                <h2>{elem?.title}</h2>
                                {elem?.shortDescription}
                              </div>
                              {/* <div className="row-start-1 md:col-start-2">
                                <Image
                                  src={elem.secondHeroImg}
                                  alt="tab-1"
                                  width={400}
                                  height={400}
                                  className="w-full h-full"
                                />
                              </div> */}
                            </div>
                          </>
                        </div>
                      </Reveal>
                      {/* <h1>Tab</h1> */}

                      {/*Responsive Problem*/}

                      {/* <Reveal>
                        <ServiceTabBar
                          individualHomeTabBar={individualHomeTabBar}
                        />
                      </Reveal> */}

                      <Reveal>
                        <div className="!mb-8 !text-justify !md:text-left service-style-ind">
                          {Parser(elem?.description1)}
                        </div>
                      </Reveal>
                      {/* <h1>prie</h1> */}

                      <Reveal>
                        <ServicePrice url={parameter} />
                      </Reveal>

                      {/* <h1>check</h1> */}

                      <div className="!mb-8 !text-justify !md:text-left service-style-ind">
                        {Parser(elem?.description2)}
                      </div>

                      <div className="!mb-8 !text-justify !md:text-left service-style-ind">
                        {Parser(elem?.description3)}
                      </div>
                    </div>
                    <div className="flex-[1.5] hidden sm:block">
                      <div className="sticky top-28">
                        <h3 className="text-[1.8rem] font-semibold text-center mb-3">
                          Our Services
                        </h3>
                        {services?.map((elem: any, index: any) => (
                          <div key={index}>
                            <Link
                              className="flex gap-5 p-4 shadow-md mb-4 bg-slate-500 rounded "
                              href={`/our-services/${elem?.url
                                .replace(/\s+/g, "-") // Replace spaces with dashes globally
                                .toLowerCase()}`}
                            >
                              <Image
                                src={`${elem?.heroImg}`}
                                alt="blog_image"
                                width={3109}
                                height={1752}
                                className="w-[100px] h-[80px]"
                              />{" "}
                              <p className="!text-xl">{elem?.title}</p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SectionLayout>
              </Reveal>
              <div className="container">
                <div>
                  <BoostService
                    heading=" Need a boost for you business? Get your FREE Quote Today!"
                    btnText="Send us a proposal"
                  />
                </div>
                <Info />
                <Consultaion />
              </div>
              <Reveal>
                <SectionLayout bg="">
                  <div className="flex gap-10">
                    <div className="flex-[5] h-[100%] service-style service-style-ind ">
                      <div>
                        <div className="!mb-8 !text-justify !md:text-left service-style-ind">
                          {Parser(elem?.description4)}
                        </div>

                        <div className="!mb-8 !text-justify !md:text-left service-style-ind">
                          {Parser(elem?.description5)}
                        </div>

                        <div className="!mb-8 !text-justify !md:text-left service-style-ind">
                          {Parser(elem?.description6)}
                        </div>
                        <div className="!mb-8 !text-justify !md:text-left service-style-ind">
                          {Parser(elem?.description7)}
                        </div>
                        <div className="!mb-8 !text-justify !md:text-left service-style-ind">
                          {Parser(elem?.description8)}
                        </div>
                        <div className="!mb-8 !text-justify !md:text-left">
                          {Parser(elem?.description9)}
                        </div>
                        <div className="!mb-8 !text-justify !md:text-left">
                          {Parser(elem?.description10)}
                        </div>
                        <div className="!mb-8 !text-justify !md:text-left">
                          {Parser(elem?.description11)}
                        </div>
                        <div className="!mb-8 !text-justify !md:text-left">
                          {Parser(elem?.description12)}
                        </div>
                        <div className="!mb-8 !text-justify !md:text-left">
                          {Parser(elem?.description13)}
                        </div>
                        <div className="!mb-8 !text-justify !md:text-left">
                          {Parser(elem?.description14)}
                        </div>
                        {Parser(elem?.description15)}
                      </div>
                    </div>
                    <div className="flex-[1.5] hidden sm:block">
                      <div className="sticky top-28">
                        <h3 className="text-[1.8rem] font-semibold text-center mb-3">
                          Our Blogs
                        </h3>
                        {blogData?.data
                          ?.filter((blog: any) => blog?.published === true)
                          ?.slice(0, 4)
                          ?.map((elem: any, index: any) => (
                            <div key={index}>
                              <Link
                                className="flex gap-5 p-4 shadow-md mb-4 bg-slate-500 rounded "
                                href={`/blog/${elem?.slug}`}
                              >
                                <Image
                                  src={elem?.featuredImage?.image?.url}
                                  alt="blog_image"
                                  width={3109}
                                  height={1752}
                                  className="w-[100px] h-[80px]"
                                />
                                <p className="!text-xl">{elem?.title}</p>
                              </Link>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </SectionLayout>
              </Reveal>
              {/* <AboutUs /> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  const parameter = params?.service;
  const individualService = services?.filter((elem) => elem?.url === parameter);
  //console.log(individualService.map((elem, index) => elem.metaDescription)[0]);
  return {
    title: `${individualService?.map((elem, index) => elem?.topHeroLeftTitle)}`,
    description: `${
      individualService?.map((elem, index) => elem?.metaDescription)[0]
    }`,
    openGraph: {
      title: `${individualService?.map(
        (elem, index) => elem?.topHeroLeftTitle
      )}`,
      description: `${
        individualService?.map((elem, index) => elem?.metaDescription)[0]
      }`,
      images: individualService[0]?.heroImg,
      url: `https://www.carterinjurylaw.com/our-services/${individualService[0]?.url}`,
      type: "article",
      site_name: "https://www.bayshorecommunication.com/",
    },
  };
}
