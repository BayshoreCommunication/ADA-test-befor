"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

const blogs = [
  {
    title: "Top Balance Exercises for Seniors at Home",
    slug: "brand-positioning-what-space-will-you-own-in-your-customers-mind-during-your-business-transformation",
    date: "May 24, 2022",
    image: "/images/blog/blog1.png",
  },
  {
    title: "Stroke (CVA) Rehab: What to Expect in Physical Therapy",
    slug: "stroke-cva-rehab-what-to-expect-in-physical-therapy",
    date: "May 24, 2022",
    image: "/images/blog/blog2.png",
  },
  {
    title: "How to Relieve Lower Back Pain Without Surgery",
    slug: "how-to-relieve-lower-back-pain-without-surgery",
    date: "May 24, 2022",
    image: "/images/blog/blog3.png",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
      {/* Header */}
      <Reveal tag="div" y={16} opacityFrom={0}>
        <div className=" mb-8">
          <h2 className="text-3xl lg:text-[38px] font-bold text-gray-900"></h2>
        </div>
      </Reveal>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
        <Stagger>
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                Latest From the <span className="text-primary">Blog</span>
              </h2>
            </div>
          </Reveal>
          <Reveal y={12} opacityFrom={0}>
            <Link
              href="/the-wellness-journal"
              className="mt-6 md:mt-0 border border-black rounded-full px-6 py-2 transition text-gray-900 hover:bg-black hover:text-white"
            >
              Explore Blogs →
            </Link>
          </Reveal>
        </Stagger>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={`/the-wellness-journal/${blog.slug}`}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col h-full hover:shadow-lg transition-shadow"
          >
            {/* Blog Image */}
            <div className="w-full h-56 relative">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase flex items-center gap-2">
                  {blog.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                  {blog.title}
                </h3>
              </div>

              <span className="text-primary text-sm font-medium hover:underline mt-4">
                Read More
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
