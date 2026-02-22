import Reveal from "@/components/motion/Reveal";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-gray-50">
      <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10 md:gap-6">
          {/* Left Image */}
          <Reveal className="rounded-xl overflow-hidden">
            <Image
              src="/images/about/about.jpg"
              alt="Our Team"
              className="w-auto h-auto object-contain rounded-xl "
              width={1000}
              height={470}
            />
          </Reveal>

          {/* Right Content */}
          <div className="flex flex-col">
            <Reveal tag="h2" className="text-3xl  font-bold text-black mb-4">
              About Us
            </Reveal>
            <Reveal
              tag="p"
              className="text-gray-600 text-sm md:text-base leading-relaxed mb-4"
              delay={0.05}
            >
              At Medical Weight Loss Tampa, we specialize in medically guided
              weight loss and wellness solutions tailored to your unique needs.
              Our evidence-based programs combine medical expertise,
              compassionate care, and personalized support to help you achieve
              sustainable results and improve your overall well-being.
            </Reveal>
            <Reveal
              tag="p"
              className="text-gray-600 text-sm md:text-base leading-relaxed mb-6"
              delay={0.1}
            >
              Founded on the principles of health, science, and individualized
              care, our team is dedicated to helping you transform your body and
              your life. Whether you’re looking to lose weight, boost energy, or
              enhance your overall health, we provide the tools, guidance, and
              support you need to succeed.
            </Reveal>

            {/* Explore More button */}
            <Reveal tag="div" delay={0.15}>
              <button className="bg-black text-white px-6 py-3 rounded-full w-fit transition mb-8 hover:bg-white hover:border hover:border-black hover:text-black">
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 text-white font-medium transition hover:text-black"
                >
                  Explore More <ArrowRight size={18} />
                </Link>
              </button>
            </Reveal>

            {/* Google Reviews */}
            <Reveal
              className="flex flex-col sm:flex-row sm:items-center gap-4"
              delay={0.2}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/images/about/google.png"
                  alt="Google"
                  width={80}
                  height={20}
                  className="h-5 w-auto"
                />
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
              </div>
              <div className="text-black text-sm">
                <span className="font-semibold">4.9</span> | 140 Reviews
                <div>
                  <Link
                    href="https://share.google/gvEBvr3N2B1QK82KM"
                    className="text-primary underline hover:text-green-700"
                  >
                    View all Google Reviews here
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </section>
  );
}
