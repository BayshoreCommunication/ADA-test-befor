import Consultaion from "@/components/universal/Consultaion";
import SectionLayout from "@/components/universal/SectionLayout";
import GetAllBlogData from "@/lib/GetAllBlogData";
import GetBlogBySlug from "@/lib/GetBlogBySlug";
import parser from "html-react-parser";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  body: string;
  excerpt?: string;
  createdAt?: string;
  published?: boolean;
  category?: string[];
  featuredImage?: {
    image?: {
      url?: string;
    };
  };
}

const getDescription = (blog: BlogPost) => {
  const plainText = (blog.body || "").replace(/<[^>]+>/g, "").trim();
  if (plainText) return plainText.slice(0, 200);
  return (blog.excerpt || "No blog post available.").slice(0, 200);
};

const formatDate = (date?: string) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blogResult = await GetBlogBySlug(params.slug);
  const blogDetails = blogResult?.data as BlogPost | undefined;

  if (!blogDetails) {
    return {
      metadataBase: new URL("https://www.bayshorecommunication.com"),
      title: "Blog not found",
      description: "No blog post available.",
      openGraph: {
        title: "Blog not found",
        description: "No blog post available.",
        images: [],
        url: "https://www.bayshorecommunication.com/blog/not-found",
        type: "article",
        siteName: "Bayshorecommunication",
      },
    };
  }

  const shortDescription = getDescription(blogDetails);

  return {
    metadataBase: new URL("https://www.bayshorecommunication.com"),
    title: blogDetails.title,
    description: shortDescription,
    openGraph: {
      title: blogDetails.title,
      description: shortDescription,
      images: blogDetails.featuredImage?.image?.url
        ? [
            {
              url: blogDetails.featuredImage.image.url,
              width: 1200,
              height: 600,
              alt: blogDetails.title,
            },
          ]
        : [],
      url: `https://www.bayshorecommunication.com/blog/${blogDetails.slug}`,
      type: "article",
      siteName: "Bayshorecommunication",
    },
  };
}

const IndividualBlog = async ({ params }: { params: { slug: string } }) => {
  const blogResult = await GetBlogBySlug(params.slug);
  const blog = blogResult?.data as BlogPost | undefined;

  if (!blog || blog?.published !== true) {
    return (
      <>
        <SectionLayout bg="">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <h1 className="heading-primary text-center">Blog Not Found</h1>
            <p className="text-base text-center max-w-[622px] mx-auto mt-4">
              {blogResult?.error ||
                "The blog post you're looking for doesn't exist or has been removed."}
            </p>
            <Link href="/blog" className="mt-6">
              <button className="text-gray-500 font-semibold text-small border border-gray-800 rounded-full p-5 hover:!bg-[#FE6F1F] hover:text-white hover:border-[#FE6F1F]">
                Back to Blogs
              </button>
            </Link>
          </div>
        </SectionLayout>
        <Consultaion />
      </>
    );
  }

  return (
    <>
      <SectionLayout bg="">
        <div className="h-[100%] service-style">
          <div className="container">
            <div className="flex gap-x-10">
              <div className="flex-[3]">
                <div>
                  <Image
                    src={
                      blog?.featuredImage?.image?.url ||
                      "/assets/blog/blog-hero-img.svg"
                    }
                    alt={blog.title || "blog_image"}
                    width={2400}
                    height={2400}
                    className="w-full h-full"
                  />
                  <div className="flex gap-4 py-6">{formatDate(blog.createdAt)}</div>

                  <div>
                    <h1 className="font-semibold text-[80px] leading-normal">
                      {blog.title}
                    </h1>
                  </div>

                  <div className="externallink">{parser(blog.body)}</div>
                </div>
              </div>

              <div className="flex-1 hidden sm:block">
                <div className="sticky top-24">
                  <BlogNavigation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <Consultaion />
    </>
  );
};

export default IndividualBlog;

const BlogNavigation = async () => {
  const blogData = await GetAllBlogData({ page: 1, limit: 10 });
  return (
    <>
      {blogData?.data
        ?.filter(
          (blog: any) =>
            blog?.published === true && blog?.category?.[0] !== "Job Post"
        )
        ?.map((elem: any, index: number) => (
          <div key={index}>
            <Link
              className="flex gap-5 p-4 mb-4 rounded shadow-md bg-slate-500 "
              href={`/blog/${elem.slug}`}
            >
              <Image
                src={
                  elem?.featuredImage?.image?.url ||
                  "/assets/blog/blog-hero-img.svg"
                }
                alt={elem?.title || "blog_image"}
                width={3109}
                height={1752}
                className="w-[100px] h-[80px]"
              />
              <p className="!text-xl">{elem.title}</p>
            </Link>
          </div>
        ))}
    </>
  );
};
