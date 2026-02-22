"use client";

import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";

export default function MedicalWeightLoss() {
  const services = [
    {
      title: "Sema",
      desc: "Supporting your journey to lasting health with personalized guidance, advanced therapies, and compassionate care.",
      img: "/images/medical/Frame 1000006283.png",
      href: "/medical-weight-loss",
    },
    {
      title: "Tirzep",
      desc: "Tirzep helps you achieve safe, effective weight loss by supporting appetite control and metabolism, tailored to your personalized weight loss plan.",
      img: "/images/medical/Frame 1000006284.png",
      href: "/medical-weight-loss",
    },
    {
      title: "Retatrutide",
      desc: "Retatrutide supports your weight loss journey by enhancing metabolism and controlling appetite, helping you achieve safe and lasting results under medical supervision.",
      img: "/images/medical/Frame 1000006285.png",
      href: "/medical-weight-loss",
    },
    {
      title: "Nutritional Counseling",
      desc: "Personalized nutritional guidance designed to support your weight loss goals, boost energy, and create lasting healthy habits.",
      img: "/images/medical/image 75.jpg",
      href: "/medical-weight-loss",
    },
    {
      title: "Personalized Support",
      desc: "Dedicated guidance every step of the way to ensure your weight loss journey is safe, effective, and tailored to your unique needs",
      img: "/images/medical/image 76.jpg",
      href: "/medical-weight-loss",
    },
    {
      title: "HRT (Hormone Replacement Therapy)",
      desc: "Hormone Replacement Therapy (HRT) is a medical treatment that helps balance hormone levels in the body, commonly used to relieve symptoms of menopause such as hot flashes, mood swings, and bone loss. It can also support hormonal health in other conditions by supplementing estrogen, progesterone, or testosterone.",
      img: "/images/medical/hormon.png",
      href: "/medical-weight-loss",
    },
    {
      title: "Chiropractic Care",
      desc: "Expert chiropractic care to relieve pain, improve mobility, and support your overall health and wellness.",
      img: "/images/medical/image 77.jpg",
      href: "/regenerative-medicine",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1640px] md:my-16 my-8 px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <Reveal tag="h2" className="text-3xl font-bold text-gray-900">
              Medical Weight Loss
            </Reveal>
            <Reveal tag="p" className="text-gray-600 mt-2" delay={0.1}>
              We provide medically guided programs and therapies designed to
              help you achieve your weight loss goals, boost energy, and improve
              overall health.
            </Reveal>
          </div>
          <Reveal tag="div" delay={0.2}>
            <Link href="/our-services">
            <button className="mt-4 md:mt-0 border border-black rounded-full px-6 py-2 font-medium flex items-center gap-2 hover:bg-black hover:text-white transition ">
              Explore More Services
              <span>→</span>
            </button>
            </Link>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, idx) => (
            <Reveal key={idx}>
              <Link
                href="/our-services"
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100 cursor-pointer"
              >
                <div className="w-full h-auto relative mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={1000}
                    height={800}
                    className="object-cover object-top rounded-xl group-hover:scale-110 transition-transform duration-300 w-full h-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 w-[300px] group-hover:text-gray-700 transition-colors duration-300  line-clamp-3">
                  {service.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
