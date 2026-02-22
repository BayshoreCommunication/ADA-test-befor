import Reveal from "@/components/motion/Reveal";
import Consultaion from "@/components/universal/Consultaion";
import { HeroWithImage } from "@/components/universal/Hero";
import Pagination from "@/components/universal/Pagination";
import SectionLayout from "@/components/universal/SectionLayout";
import GetAllBlogData from "@/lib/GetAllBlogData";
import parser from "html-react-parser";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Blogs: Expert Tips and Strategies from Our Agency",
    description: `You've chosen the best place to learn more about web marketing and how to develop your online presence. Our blog features insightful articles from our team of experts, covering topics such as SEO, social media, content marketing, web design, and more. You'll discover useful tactics and tips that you may use in your own business. By reading our blog, you may keep up with the most recent trends and best practices in the digital world.`,
  },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bayshorecommunication.com"),
  title: "Blog-Bayshore Communication",
  description:
    "Learn communication tips from our Bayshore experts. Read our blogs on web-mobile app design, content writing, social media marketing, video production, and more.",
  // openGraph: {
  //   title: "Blog-Bayshore Communication",
  //   description:
  //     "Learn communication tips from our Bayshore experts. Read our blogs on web-mobile app design, content writing, social media marketing, video production, and more.",
  //   images: [
  //     {
  //       url: "/assets/blog/blog-hero-img.svg",
  //       width: 1200,
  //       height: 600,
  //       alt: "Blog-Bayshore Communication",
  //     },
  //   ],
  // },
};

const page = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const parsedPage = Number(searchParams?.page);
  const currentPage = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const blogsPerPage = 10;
  const blogData = await GetAllBlogData({ page: currentPage, limit: blogsPerPage });

  // Handle error or empty data
  if (!blogData?.data || blogData.data.length === 0) {
    return (
      <>
        <Reveal>
          <HeroWithImage
            heading={hero[0].heading}
            description={hero[0].description}
            imgLink="/assets/blog/blog-hero-img.svg"
          />
        </Reveal>

        <SectionLayout bg="">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <h2 className="heading-secondary text-center">
              {blogData?.error ? "Unable to Load Blogs" : "No Blogs Available"}
            </h2>
            <p className="text-base !text-center max-w-[622px] mx-auto mt-4">
              {blogData?.error || "There are no blog posts available at the moment. Please check back later."}
            </p>
          </div>
        </SectionLayout>

        <Reveal>
          <Consultaion />
        </Reveal>
      </>
    );
  }

  return (
    <>
      <Reveal>
        <HeroWithImage
          heading={hero[0].heading}
          description={hero[0].description}
          imgLink="/assets/blog/blog-hero-img.svg"
        />
      </Reveal>

      {/* section blog */}

      <SectionLayout bg="">
        <Reveal>
          <div className="flex flex-col items-center">
            <h2 className="heading-secondary ">
              {`The Digital Marketer's Playbook: Insights, Ideas, and Inspiration`}
            </h2>
            <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
              Get valuable tips and tricks from our skilled digital marketing
              teams. Boost your online performance and reach your goals with our
              insights, ideas, and inspirations.
            </p>
          </div>
        </Reveal>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem] grid-flow-row-dense">
            {blogData?.data?.map((el: any, i: number) => (
                <div key={i} className="h-fit">
                  <Blog el={el} i={i} />
                </div>
              ))}
          </div>
        </div>

        {/* Pagination */}
        {blogData?.pagination && (
          <Pagination
            currentPage={blogData.pagination.currentPage}
            totalPages={blogData.pagination.totalPages}
            totalBlogs={blogData.pagination.totalBlogs}
          />
        )}
      </SectionLayout>

      {/* <SectionLayout bg="bg-[#F4F4F4]">
        <h2 className="heading-secondary text-center">
          Level Up Your SEO Skills With Our Free Training
        </h2>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 xl:gap-14">
            <Seo />
            <Seo />
            <Seo />
          </div>
        </div>
      </SectionLayout> */}

      <Reveal>
        <Consultaion />
      </Reveal>
    </>
  );
};

export default page;

const Blog = ({ el, i }: any) => {
  const dateFormate = (date: any) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };
  return (
    <Reveal>
      <Link href={`/blog/${el.slug}`}>
        <div>
          <div className="relative mb-2">
            <Image
              src={el?.featuredImage?.image?.url || "/assets/blog/blog-hero-img.svg"}
              alt={el?.title || "marketing"}
              width={800}
              height={800}
              className="w-full h-auto"
            />
            {/* <Image
            src="/assets/blog/mike.png"
            alt="marketing"
            width={800}
            height={800}
            className="w-[6rem] md:w-[8rem] h-auto absolute bottom-0 left-[3%] translate-y-[50%]"
          /> */}
            <p className="text-xsmall mt-6">{dateFormate(el.createdAt)}</p>
          </div>
          <div className="cus-name flex justify-between items-center w-[78%] sm:w-[80%] ml-auto">
            {/* <p className="text-xsmall">
            By: <span className="text-[#0077B3]">{el.writerName} </span>
          </p> */}
            {/* <p className="text-xsmall">{el.blogDate}</p> */}
          </div>
          <h4 className="heading-tertiary mt-[1rem] md:mt-[1.5rem]">
            {el.title}
          </h4>
          <div>
            {/* <h5 className="text-small !text-[#0077B3] md:mt-[3rem] md:mb-[2rem] my-[1.5rem]">
          Content Marketing
        </h5> */}
            <p className="text-small mt-4 text-cut text-cut-5">
              {parser(el.body)}
            </p>
          </div>
          <div className="center md:block">
            {/* <button className="!text-[#4DBDEB] border-[1px] border-[#4DBDEB] px-[1rem] py-[0.8rem] rounded-[10px] text-xsmall mt-[2rem]">
           
            </button> */}
            <button className="text-gray-500 font-semibold text-small border border-gray-800 rounded-full p-5 hover:!bg-[#FE6F1F] hover:text-white hover:border-[#FE6F1F] mt-[2rem]">
              Read this post
            </button>

            {/* <Link href={`/blog/${el.url}`}>
          <button className="!text-[#4DBDEB] border-[1px] border-[#4DBDEB] px-[1rem] py-[0.8rem] rounded-[10px] text-xsmall mt-[2rem]">
            Read this post
          </button>
        </Link> */}
          </div>
        </div>
      </Link>
    </Reveal>
  );
};

// const Seo = () => {
//   return (
//     <div className="p-8 bg-[#fff] border-[1px] border-[#E6E6E6] rounded-[10px]">
//       <Image
//         src="/assets/blog/seo-1.png"
//         alt="marketing"
//         width={800}
//         height={800}
//         className="w-full h-auto "
//       />
//       <h4 className="heading-four my-6">Moz Academy Training</h4>
//       <p className="text-small">Complete courses to master SEO basics</p>
//       <p className="text-small  mt-10 flex justify-center items-center gap-4">
//         <span className="text-[#0077B3]">Start Learing </span>
//         <Image
//           src="/assets/blog/learn.svg"
//           alt="right-arr"
//           width={20}
//           height={20}
//           className="w-[12px] h-auto translate-y-[1px]"
//         />
//       </p>
//     </div>
//   );
// };
