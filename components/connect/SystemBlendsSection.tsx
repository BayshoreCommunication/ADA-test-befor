import Image from "next/image";
export default function SystemBlendsSection() {
  const items = [
    "AI automation & CRM systems",
    "Reputation & authority management",
    "Website design & conversion optimization",
    "Local SEO & Google Maps dominance",
    "Paid media (Google, Meta, YouTube)",
    "Video marketing & on-site shoots",
  ];

  return (
    <section className="w-full px-6 py-6 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[32px] lg:text-[48px] font-bold text-black">
          Our System <span className="text-[#FE641A]">Blends</span> Everything
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-[16px] lg:text-[18px] text-gray-600 max-w-5xl mx-auto">
          Everything works together — not in silos. We integrate visibility,
          authority, and conversion into one cohesive growth machine.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1640px] mx-auto ">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl  px-6 py-8  bg-gradient-to-br from-[#F5F5F5] to-[#FFF7F3]"
            >
              {/* Icon */}
              <div className="flex items-center justify-center shrink-0">
                <Image
                  src="/connect/icon.png"
                  alt="Check Icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-base md:text-[18px] font-medium text-gray-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
