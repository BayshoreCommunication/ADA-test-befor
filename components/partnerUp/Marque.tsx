import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function TrustedBy() {
  // Define the content as an array for easier duplication
  const services = [
    "Law Firms",
    "•",
    "Attorneys",
    "•",
    "Lawyers",
    "•",
    "Business Professionals",
    "•",
    "Startups",
    "•",
    "Entrepreneurs",
    "•",
    "Financial Advisors",
    "•",
    "Accountants & CPAs",
    "•",
    "Consultants",
    "•",
    "Real Estate Agents",
    "•",
    "Doctors",
    "•",
    "Dentists",
    "•",
    "Clinics",
    "•",
    "E-commerce Businesses",
    "•",
    "Coaches & Trainers",
    "•",
    "SMEs",
    "•",
    "Legal Consultants",
    "•",
  ];

  // Duplicate logos for the bottom marquee similarly
  const logos = [
    "/image/marquee/sabbir-nasir.png",
    "/image/marquee/apex.png",
    "/image/marquee/rob.png",
    "/image/marquee/dxg.png",
    "/image/marquee/trip-law.png",
    "/image/marquee/super.png",
    "/image/marquee/tiki.png",
    "/image/marquee/law.png",
    "/image/marquee/sabbir-nasir.png",
    "/image/marquee/apex.png",
    "/image/marquee/rob.png",
    "/image/marquee/dxg.png",
    "/image/marquee/trip-law.png",
    "/image/marquee/super.png",
    "/image/marquee/tiki.png",
    "/image/marquee/law.png",
    "/image/marquee/tampa.png",
    "/image/marquee/tmp.png",
    "/image/marquee/carter.png",


  ];

  return (
    <div className="w-full my-10 md:my-16 text-center relative overflow-hidden py-10 md:py-16">
      {/* Title */}
      <h2 className="text-3xl md:text-[36px] font-bold mt-0 md:mt-4 mb-6 relative z-20">
        TRUSTED <span className="text-[#FE641A]">BY</span>
      </h2>

      {/* Marquees Container - Positioned to cross at center */}
      <div className="relative h-[140px] md:h-[300px] w-full">
        {/* Top Marquee - Black Services - Crossing from top-left to bottom-right */}
        <div className="absolute top-0 left-0 w-[150%] transform -rotate-[7deg] origin-center translate-x-[-12.5%] translate-y-[50px] md:translate-y-[75px]">
          <Marquee speed={60} gradient={true} gradientColor="white" gradientWidth={100} className="w-full">
            <div className="flex space-x-10 text-white bg-[#1b1b1b] py-12 md:py-16 text-[14px] md:text-xl font-medium uppercase tracking-wide w-full">
              {[...services, ...services].map((item, i) => (
                <span key={i} className={item === "•" ? "text-[#FE641A]" : ""}>
                  {item}
                </span>
              ))}
            </div>
          </Marquee>
          {/* Custom blur overlay for enhanced effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
          </div>
        </div>

        {/* Bottom Marquee - Orange Logos - Crossing from bottom-left to top-right */}
        <div className="absolute bottom-0 left-0 w-[150%] transform rotate-[7deg] origin-center translate-x-[-12.5%] translate-y-[-50px] md:translate-y-[-75px] z-10">
          <Marquee speed={50} gradient={true} gradientColor="white" gradientWidth={100} direction="right" className="w-full">
            <div className="flex items-center space-x-12 md:space-x-16 bg-orange-500 py-6 md:py-8 w-full">
              {[...logos, ...logos].map((src, i) => (
                <Image key={i} src={src} alt={`Logo ${i + 1}`} width={500} height={340} className="w-[50px] md:w-[60px] h-auto" />
              ))}
            </div>
          </Marquee>
          {/* Custom blur overlay for enhanced effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
