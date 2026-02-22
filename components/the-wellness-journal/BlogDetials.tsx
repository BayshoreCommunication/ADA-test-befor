import Image from "next/image";
import GetAllPostData from "@/lib/GetPostData";
import parse from "html-react-parser";

import Head from "next/head";
import Link from "next/link";
import BreadcrumbSection from "../shared/BreadcrumbSection";

const css = `
 h1, h2, p, br, nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

h1, h2 {
  font-style: blog;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 25px;
}

p {
  font-size: 17px;
  padding-top: 6px;
  padding-bottom: 6px;
}

ul {
  list-style-type: disc;
}

`;

function extractTextFromHtml(htmlString: string): string {
  // Use regex to strip HTML tags and extract plain text
  const plainText = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
  return plainText;
}

function truncateText(text: string, wordLimit: number): string {
  const words = text.split(/\s+/);
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.find(
    (blogs: any) => blogs.slug === params.slug
  );

  if (!blogDetails) {
    return {
      title: "Blog not found",
      description: "No blog post available.",
    };
  }

  const rawDescription = blogDetails?.body || "";
  const plainTextDescription = extractTextFromHtml(rawDescription);
  const shortDescription = truncateText(plainTextDescription, 120);

  return {
    title: blogDetails?.title,
    description: shortDescription,
    openGraph: {
      title: blogDetails?.title,
      description: shortDescription,
      images: blogDetails?.featuredImage?.image?.url,
      url: `https://www.medicalweightlosstampa.com/blog/${blogDetails?.slug}`,
      type: "article",
      site_name: ".medicalweightlosstampa.com",
    },
  };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.filter(
    (blogs: any) => blogs.slug === params.slug
  );

  const postDate = (date: string | Date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <>
      <style>{css}</style>
      <BreadcrumbSection
        title={blogDetails[0]?.title}
        items={[
          { label: "Home", href: "/" },
          { label: "Blog Details" }, // current page (no href)
        ]}
      />

      <section>
        <div className="grid gap-12 mb-10 gird-col-1 sm:grid-cols-3">
          {blogDetails?.map((blogs: any, index: number) => (
            <div key={index} className="col-span-2">
              <div className="flex items-center justify-between">
                <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
                  {blogs?.category || "Blog Post"}
                </p>
                <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
                  {postDate(blogs?.createdAt)}
                </p>
              </div>
              <h2
                className={`mb-0 md:mb-4 text-2xl md:text-4xl font-bold tracking-normal text-left text-[#1B2639]`}
              >
                {blogs?.title}
              </h2>
              <Image
                width={1000}
                height={300}
                src={blogs?.featuredImage?.image?.url}
                alt={blogs?.featuredImage?.altText}
                className="w-full h-auto bg-center bg-cover"
              />

              <div className="mt-2 text-md">{parse(blogs?.body)}</div>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-1 h-[100%] md:h-[1000px] overflow-y-scroll overflow-x-hidden  p-3 rounded-lg">
            <h2 className="font-medium text-4xl text-black border-b-2 border-gray-500 pb-4 mb-6">
              Recent Cases
            </h2>
            {blogPostData?.data
              ?.filter((pub: any, no: number) => pub.published === true)
              ?.map((blogs: any, index: number) => (
                <Link
                  className="flex items-start gap-2 ps-3 py-3 drop-shadow-lg bg-white my-3"
                  key={index}
                  href={`/blog/${blogs?.slug}`}
                >
                  <Image
                    width={180}
                    height={180}
                    src={blogs?.featuredImage?.image?.url}
                    alt={blogs?.featuredImage?.altText}
                    className="w-[100px] h-auto bg-center bg-cover"
                  />
                  <div>
                    <div className="text-md font-bold text-black text-left line-clamp-2">
                      {blogs?.title}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
