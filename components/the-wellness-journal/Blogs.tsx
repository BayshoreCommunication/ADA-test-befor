"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "../motion/Reveal";
import parse from "html-react-parser";

export type BlogFeaturedImage = {
  image?: { url?: string };
};

export type BlogItem = {
  title: string;
  slug: string;
  date?: string | number | Date;
  createdAt?: string | number | Date;
  publishedAt?: string | number | Date;
  image?: string;
  body?: string | React.ReactNode;
  altText?: string;
  featuredImage?: BlogFeaturedImage;
  published?: boolean;
};

export type BlogsProps = {
  blogPost?: { data?: BlogItem[] };
};

// ✅ Fallback static data
const fallbackBlogs: BlogItem[] = [
  {
    title: "Top Balance Exercises for Seniors at Home",
    slug: "top-balance-exercises-for-seniors-at-home",
    date: "2022-05-24", // ✅ use ISO date format
    image: "/images/blog/image1.png",
    body: "Learn balance exercises to improve mobility and prevent falls at home.",
  },
  {
    title: "Stroke (CVA) Rehab: What to Expect in Physical Therapy",
    slug: "stroke-cva-rehab-what-to-expect-in-physical-therapy",
    date: "2022-05-24",
    image: "/images/blog/image2.png",
    body: "Understand the rehab process for stroke recovery through physical therapy.",
  },
  {
    title: "How to Relieve Lower Back Pain Without Surgery",
    slug: "how-to-relieve-lower-back-pain-without-surgery",
    date: "2022-05-24",
    image: "/images/blog/image3.png",
    body: "Discover natural methods and exercises to ease lower back pain.",
  },
];

const formatPostDate = (input?: BlogItem["date"]) => {
  if (!input) return "";
  let d: Date | null = null;

  if (input instanceof Date) {
    d = input;
  } else if (typeof input === "number") {
    // Handle seconds vs milliseconds
    d = new Date(input > 1e12 ? input : input * 1000);
  } else if (typeof input === "string") {
    const trimmed = input.trim();
    let parsed = new Date(trimmed);
    if (isNaN(parsed.getTime())) {
      // Try common CMS format "YYYY-MM-DD HH:mm:ss"
      const normalized = trimmed.replace(" ", "T");
      parsed = new Date(normalized);
    }
    if (!isNaN(parsed.getTime())) {
      d = parsed;
    } else {
      return trimmed; // Fallback to original string
    }
  }

  if (!d || isNaN(d.getTime())) return "";

  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function Blogs({ blogPost }: BlogsProps) {
  const posts: BlogItem[] =
    blogPost?.data?.filter((b: BlogItem) => b.published) || fallbackBlogs;

  return (
    <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
      <Reveal tag="div" y={16} opacityFrom={0}>
        <div className="mb-8">
          <h2 className="text-3xl lg:text-[38px] font-bold text-gray-900">
            The Wellness Journal
          </h2>
        </div>
      </Reveal>

      {posts.length === 0 ? (
        <div className="text-center py-16 text-gray-600">
          No posts available
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {posts.map((blog: BlogItem, index: number) => (
            <Link
              key={index}
              href={`/the-wellness-journal/${blog.slug}`}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              {/* Blog Image */}
              <div className="w-full p-4 lg:p-6">
                <Image
                  src={
                    blog.image ||
                    blog?.featuredImage?.image?.url ||
                    "/images/placeholder.jpg"
                  }
                  alt={blog.altText || blog.title}
                  width={1000}
                  height={667}
                  className="object-cover rounded-xl w-full h-auto"
                />
              </div>

              {/* Blog Content */}
              <div className="p-4 lg:p-6 pt-0 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase flex items-center gap-2">
                    {formatPostDate(
                      blog.date ?? blog.createdAt ?? blog.publishedAt
                    )}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">
                    {blog.title}
                  </h3>
                  {blog.body && (
                    <div className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {typeof blog.body === "string"
                        ? parse(blog.body)
                        : blog.body}
                    </div>
                  )}
                </div>

                <span className="text-primary text-sm font-medium hover:underline mt-4">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
