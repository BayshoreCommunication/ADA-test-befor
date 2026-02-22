"use client";

import Reveal from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "What Happens to Your Gut with Age",
    desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    img: "/images/blog/img1.png",
    slug: "what-happens-to-your-gut-with-age",
  },
  {
    id: 2,
    title: "What Is the FODMAP Diet?",
    desc: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    img: "/images/blog/img2.png",
    slug: "what-is-the-fodmap-diet",
  },
  {
    id: 3,
    title: "Myths and Facts About Going Gluten-Free",
    desc: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    img: "/images/blog/img3.png",
    slug: "myths-and-facts-about-going-gluten-free",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-[1640px] mx-auto px-8 md:my-16 my-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <Reveal tag="h2" className="text-3xl md:text-4xl font-bold">
          Latest From the <span className="text-primary">Blog</span>
        </Reveal>
        <Reveal tag="div" delay={0.1}>
          <Link
            href="#"
            className="flex items-center gap-2 border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition"
          >
            Explore Blogs →
          </Link>
        </Reveal>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {blogs.map((blog) => (
          <Reveal key={blog.id}>
            <Link
              href={`/the-wellness-journal/${blog.slug}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300 cursor-pointer block"
            >
              {/* Image */}
              <div className="w-full h-auto relative">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={1058}
                  height={640}
                  className="rounded-t-2xl object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  {blog.title}
                  <ArrowUpRight size={18} />
                </h3>
                <p className="text-gray-600 text-sm">{blog.desc}</p>
                <span className="text-primary font-medium">Read More</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
