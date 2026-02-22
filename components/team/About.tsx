import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-[#F9F9F9]">
      <div className="container mx-auto max-w-[1640px] px-8 py-8 md:py-16">
        {/* ===== Image Top ===== */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/images/about/about.jpg"
            alt="Medical Weight Loss Tampa Team"
            width={1000}
            height={800}
            className="rounded-2xl shadow-md w-[900px] h-auto object-cover"
            priority
          />
        </div>

        {/* ===== Text Content Below ===== */}
        <div className="text-left md:text-center max-w-4xl mx-auto">
          <p className="text-gray-600 mb-4 leading-relaxed">
            At Medical Weight Loss Tampa, we specialize in medically guided
            weight loss and wellness solutions tailored to your unique needs.
            Our evidence-based programs combine medical expertise, compassionate
            care, and personalized support to help you achieve sustainable
            results and improve your overall well-being.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Founded on the principles of health, science, and individualized
            care, our team is dedicated to helping you transform your body and
            your life. Whether you’re looking to lose weight, boost energy, or
            enhance your overall health, we provide the tools, guidance, and
            support you need to succeed.
          </p>

          {/* Explore Button */}
          {/* <div className="flex justify-center md:justify-center">
            <button className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full font-medium transition">
              Explore More <span className="text-lg">→</span>
            </button>
          </div> */}

          {/* Google Rating */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-8">
            <div className="flex items-center gap-2">
              <Image
                src="/images/about/google.png"
                alt="Google Logo"
                width={60}
                height={24}
              />
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 font-medium text-sm">
                4.9 | 140 Reviews
              </p>
            </div>

            <a
              href="https://share.google/gvEBvr3N2B1QK82KM"
              className="text-green-600 hover:underline text-sm mt-2 md:mt-0 "
            >
              View all Google Reviews here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
