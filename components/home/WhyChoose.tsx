import Reveal from "@/components/motion/Reveal";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WhyChoose() {
  const cards = [
    {
      id: "01",
      title: "Our Purpose",
      text: "To empower every patient with personalized, medically assisted weight loss and wellness solutions that create lasting health and confidence.",
      href: "/our-purpose",
      icon: (
        <Image
          src="/images/whychoose/icon1.png"
          alt="Icon 1"
          width={1000}
          height={700}
          className="w-full h-auto"
        />
      ),
    },
    {
      id: "02",
      title: "Meet the Team",
      text: "Our team of experienced medical professionals is dedicated to guiding you on your weight loss and wellness journey with personalized care, expertise, and compassion.",
      href: "/team",
      icon: (
        <Image
          src="/images/whychoose/icon2.png"
          alt="Icon 2"
          width={1000}
          height={700}
          className="w-full h-auto"
        />
      ),
    },
    {
      id: "03",
      title: "Our Services",
      text: "At Medical Weight Loss Tampa, we offer a range of medically guided programs and therapies designed to help you lose weight safely, boost energy, and improve overall wellness.",
      href: "/our-services",
      icon: (
        <Image
          src="/images/whychoose/icon3.png"
          alt="Icon 3"
          width={1000}
          height={700}
          className="w-full h-auto"
        />
      ),
    },
  ];

  return (
    <section className="max-w-[1640px] mx-auto px-8 md:my-16 my-8">
      {/* Grid with custom 70/30 split */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%]  items-start gap-6">
        {/* Left: Cards */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group bg-white rounded-2xl shadow-md p-8 flex items-center justify-center md:items-start flex-col text-center md:text-left hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer h-full"
              >
                <span className="text-gray-400 font-semibold mb-4">
                  /{card.id}
                </span>
                <div className="md:ml-[-20px] flex items-center justify-center rounded-full text-2xl  mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {card.text}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>

        {/* Right: Text Content */}
        <div>
          <Reveal
            tag="h2"
            className="text-3xl font-bold text-gray-900 leading-snug mb-4"
          >
            Why Choose Our <span className="text-primary">Weight Loss</span>{" "}
            Program
          </Reveal>
          <Reveal
            tag="p"
            className="text-gray-600 mb-6 text-sm md:text-base max-w-md"
            delay={0.1}
          >
            Our weight loss programs are designed to provide safe, effective,
            and lasting results through medically guided methods tailored to
            your lifestyle and goals.
          </Reveal>
          <Reveal tag="div" delay={0.2}>
            <Link
              href="/our-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-green-800 transition"
            >
              Explore More <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
