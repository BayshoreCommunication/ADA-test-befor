import Image from "next/image";

const items = [
  {
    title: "Professional Headshot",
    image: "/gift/receive/img1.png",
    description: "Clean, high-quality photos you can use on:",
    points: ["Website", "Google Business Profile", "LinkedIn & social media"],
  },
  {
    title: "Short Video Shoot",
    image: "/gift/receive/img2.png",
    description: "A simple, professional video showcasing:",
    points: ["You", "Your team", "Your services – perfect for trust-building"],
  },
  {
    title: "Custom 1-Year Marketing Plan",
    image: "/gift/receive/img3.png",
    description: "A data-driven roadmap tailored to your business, covering:",
    points: [
      "How clients find you",
      "What channels actually convert",
      "Where you’re losing opportunities today",
    ],
  },
];

export default function WhatYouWillReceive() {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto px-8">
        {/* SECTION TITLE */}
        <h2 className="text-[20px] lg:text-[36px] xl:text-[38px] font-bold text-center mb-16">
          What You’ll <span className="text-[#f97316]">Receive</span>
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative  w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={800}
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-[24px] md:text-[30px] font-semibold  mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-[14px] md:text-[20px]">
                  {item.description}
                </p>

                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="mt-1  flex items-center justify-center ">
                        <Image
                          src="/gift/receive/icon.png"
                          alt="Check icon"
                          width={1000}
                          height={800}
                          className="object-cover w-8"
                        />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
