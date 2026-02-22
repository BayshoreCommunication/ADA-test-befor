import Image from "next/image";

export default function Purpose() {
  const data = [
    {
      id: 1,
      image: "/images/purpose/purpose.png",
      title: "Our Purpose",
      description:
        "We understand that weight loss isn’t one-size-fits-all. That’s why our programs are built around you — your goals, your body, and your lifestyle. Our team combines medical expertise, science-based treatments, and compassionate support to guide you every step of the way.",
    },
    {
      id: 2,
      image: "/images/purpose/mission.png",
      title: "Our Mission",
      description:
        "To provide comprehensive, patient-centered care that delivers real, sustainable results. We aim to empower our patients with the tools, education, and confidence they need to take control of their health and maintain long-term success.",
    },
    {
      id: 3,
      image: "/images/purpose/vision.png",
      title: "Our Vision",
      description:
        "At Medical Weight Loss Tampa, our vision is to create a healthier community — one patient at a time. We strive to be Tampa’s leading center for medically guided weight loss and wellness, where every individual is empowered to achieve lasting results and live a more vibrant, confident life.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-[1640px] mx-auto px-8 py-8 md:py-16">
        {/* Section Header
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Purpose, Mission & Vision
          </h2>
        </div> */}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-8 text-center flex flex-col items-center cursor-pointer"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={800}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
