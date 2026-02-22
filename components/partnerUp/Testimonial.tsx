"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    title: "Carter Injury Law",
    desc: "Carter Injury Law had a strong reputation locally but wasn’t fully visible online. Our team revamped their website, fixed key SEO issues, and strengthened their social presence with informative content. Within a month, traffic surged, client inquiries multiplied, and the firm began consistently booking high-value injury cases every week.",
    videoId: "wjxj_eQzI1M",
  },
  {
    title: "Trip Law",
    desc: "Since partnering with Trip Law in 2016, we’ve helped grow the practice from just $60,000 to over $2.3 million in revenue all without spending a single dollar on advertising. We now consistently bring in 20+ high value client appointments each month, averaging $5,000 per case. At this point, client acquisition isn’t the challenge anymore it’s keeping up with the demand.",
    videoId: "RVit6poGLRs",
  },
  {
    title: "Apex Advisor",
    desc: "Apex had a strong brand presence, but poor SEO analysis from another agency left them invisible on Google. Our video production team built a powerful social media presence, driving trust through informative video marketing. Meanwhile, We identified SEO errors, optimized the site, and ranked it in 25 days, leading to 9x growth in consumer appointments.",
    videoId: "ohyUTzLiLbI",
  },
  {
    title: "Catflix",
    desc: "Despite having a brilliant idea, Catflix had trouble getting noticed online. To catapult their brand to the top of search results, our team created a high-performance website, optimized blogs for SEO, and built a content ranking plan. In just a few weeks, their blog entries started dominating industry terms, resulting in a spike in organic traffic and customer interaction.",
    videoId: "iqHA7By9OAI",
  },
  {
    title: "Tampa Motion",
    desc: "Opening Tampa Motion from scratch showed me that standard marketing was not enough. Bayshore supported us through every step of the first six months, from building a clear, professional website to managing our social media with consistent content. On-site video work felt natural and professional. The team stayed involved and truly cared about our growth and I would recommend Bayshore to any business looking for a long-term marketing partner.",
    videoId: "oxR0dFvDyeQ",
  },
  
];

const testimonials = [
  {
    name: "David Carter",
    role: "Founder of Carter Injury Law",
    img: "/image/testimonial/person1.png",
    testimonial:
      "Before partnering Bayshore, we were struggling with our marketing. In just one year, Google impressions skyrocketed by 6,000%, website traffic tripled, and qualified leads reached a consistent monthly number. Their Meta Ads alone generated 220+ leads at only $35 each, creating a dependable pipeline of new cases. Bayshore didn't just enhance our marketing- they built a complete growth system for our firm.",
    stat1: "220+ Leads",
    stat1desc: "Meta Ads alone generated 220+ leads at only $35 each",
    stat3: "$35 Cost per Lead",
    stat3desc: "High-intent campaigns focused on cost-efficiency and conversion accuracy",
    stat2: "Growth Marketing Service",
    videoTestimonialText: "View Video Testimonial",
    youtubeUrl: "https://www.youtube.com/watch?v=wjxj_eQzI1M",
  },
  {
    name: "Carlos Rosario",
    role: "Founder of Apex Advisor Group",
    img: "/image/testimonial/person2.png",
    testimonial:
      "I've been working with Bayshore for over 2 years, and honestly, they've been a huge part of our growth. Their SEO has helped us show up where it matters most, bringing in steady traffic every month. Social media is no longer a headache; they've boosted our engagement and made our brand actually feel alive online. Plus, their design work gave us a fresh, professional look that our clients notice right away.",
    stat1: "186+ Leads",
    stat1desc: "Meta Ads alone generated 186+ leads at only $25 each",
    stat3: "Top 3 Google Rankings",
    stat3desc: "Multiple high-intent keywords now rank on the first page and top 3 search results",
    stat2: "Seo Marketing Service",
    videoTestimonialText: "View Video Testimonial",
    youtubeUrl: "https://www.youtube.com/watch?v=ohyUTzLiLbI",
  },
  {
    name: "Hardam Tripathi, Esq.",
    role: "Founder of Trip Law",
    img: "/image/testimonial/person3.png",
    testimonial:
      "Bayshore has been our trusted partner for over 3 years, and the results speak for themselves. Our site now generates more than 12,000 clicks and has surpassed 550,000 impressions, providing us with continuous visibility and growth. Beyond SEO, their design, video editing, social media, and cybersecurity support have made a measurable difference in how we operate and present our brand. With Bayshore, we've built not just marketing results but long-term momentum.",
    stat1: "12000+ Clicks",
    stat1desc:
      "Our site now generates more than 12,000 clicks and has surpassed 550,000 impressions",

      stat3: "550000+ Impressions",
    stat3desc:
      "We’ve reached over half a million impressions through consistent visibility and brand positioning",
    stat2: "Business Growth Service",
    videoTestimonialText: "View Video Testimonial",
    youtubeUrl: "https://www.youtube.com/watch?v=RVit6poGLRs&t=1s",
  },
  // ➕ Add more testimonials here
];

export default function ResultsSection() {
  // Function to scroll to Calendly section
  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly-section');
    if (calendlySection) {
      calendlySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      className="px-8"
    // className="px-8 sm:px-6 md:px-12 overflow-hidden py-0"
    // variants={container}
    // initial="hidden"
    // animate="show"
    >
      {/* Heading */}
      <div className="max-w-[1440px] mx-auto text-center py-6 py-10 md:py-12 ">
        <h2 className="text-center text-[36px] font-bold mt-0 md:mt-6">
          CLIENT{" "}
          <span className="border-2 border-[#FE641A] text-[#FE641A] px-2">
            TESTIMONIALS
          </span>
        </h2>
      </div>

      {/* Testimonial Carousel */}
      <div className="max-w-[1440px] mx-auto my-[30px] mt-[5px] md:mt-0">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="testimonial-swiper"
        >
          <style jsx global>{`
            /* Mobile: Small pagination, close to content */
            .testimonial-swiper {
              margin-bottom: 1rem; /* Mobile: 16px */
              padding-bottom: 25px; /* Mobile: 25px - close to content */
            }
            
            .testimonial-swiper .swiper-pagination {
              bottom: 5px; /* Mobile: close to content */
            }
            
            .testimonial-swiper .swiper-pagination-bullet {
              width: 8px; /* Mobile: small dots */
              height: 8px;
              background-color: #d1d5db;
              border-radius: 50%;
              opacity: 0.5;
              margin: 0 4px; /* Mobile: closer spacing */
              transition: all 0.3s ease;
            }
            
            .testimonial-swiper .swiper-pagination-bullet-active {
              background-color: #FE641A;
              opacity: 1;
              transform: scale(1.1); /* Mobile: smaller scale */
            }

            .custom-swiper {
              padding-bottom: 20px; /* Mobile: 20px - minimal space for video carousel */
            }
            
            .custom-swiper .swiper-pagination {
              bottom: -5px; /* Mobile: overlapping with video content */
            }
            
            .custom-swiper .swiper-pagination-bullet {
              width: 8px; /* Mobile: small dots */
              height: 8px;
              background-color: #d1d5db;
              border-radius: 50%;
              opacity: 0.5;
              margin: 0 4px; /* Mobile: closer spacing */
              transition: all 0.3s ease;
            }
            
            .custom-swiper .swiper-pagination-bullet-active {
              background-color: #FE641A;
              opacity: 1;
              transform: scale(1.1); /* Mobile: smaller scale */
            }

            /* Desktop: Normal pagination, comfortable spacing */
            @media (min-width: 768px) {
              .testimonial-swiper {
                margin-bottom: 3rem; /* Desktop: 48px */
                padding-bottom: 50px; /* Desktop: 50px */
              }
              
              .testimonial-swiper .swiper-pagination {
                bottom: 10px; /* Desktop: normal spacing */
              }
              
              .testimonial-swiper .swiper-pagination-bullet {
                width: 12px; /* Desktop: normal size */
                height: 12px;
                margin: 0 8px; /* Desktop: normal spacing */
              }
              
              .testimonial-swiper .swiper-pagination-bullet-active {
                transform: scale(1.2); /* Desktop: normal scale */
              }

              .custom-swiper {
                padding-bottom: 50px; /* Desktop: 50px */
              }
              
              .custom-swiper .swiper-pagination {
                bottom: 10px; /* Desktop: normal spacing */
              }
              
              .custom-swiper .swiper-pagination-bullet {
                width: 12px; /* Desktop: normal size */
                height: 12px;
                margin: 0 8px; /* Desktop: normal spacing */
              }
              
              .custom-swiper .swiper-pagination-bullet-active {
                transform: scale(1.2); /* Desktop: normal scale */
              }
            }
          `}</style>

          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 rounded-2xl border border-gray-200 p-6 md:p-10 shadow-lg">
                {/* Testimonial */}
                <div className="flex flex-col items-start w-[280px] md:w-[400px] lg:w-[500px] my-4">
                  <div className="flex items-center gap-6 text-left mb-6">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-[#FE641A] font-bold text-[22px] mb-2">
                        {item.name}
                      </h3>
                      <p className="text-[14px] text-gray-500 italic">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[15px] text-gray-700 text-left leading-relaxed mb-4">
                    {item.testimonial}
                  </p>
                  <a
                    href={item.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-orange-500 hover:text-orange-600 transition-colors underline"
                  >
                    {item.videoTestimonialText}
                  </a>
                </div>

                <div className="flex flex-col">
                  {/* Stat 1 */}
                <div className="flex flex-col justify-start w-[280px] my-4">
                  <h3 className="text-[#FE641A] text-[18px] md:text-[36px] font-bold mb-3">
                    {item.stat1}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {item.stat1desc}
                  </p>
                </div>


                {/* Stat 3 */}
                <div className="flex flex-col justify-start w-[400px] my-4">
                  <h3 className="text-[#FE641A] text-[18px] md:text-[36px] font-bold mb-3">
                    {item.stat3}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {item.stat3desc}
                  </p>
                </div>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col justify-start w-[350px] my-4">
                  <h3 className="text-[#FE641A] text-[18px] md:text-[39px] font-bold">
                    {item.stat2}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🎥 Swiper Video Testimonials */}
      <section className="max-w-[1440px] mx-auto h-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="custom-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer h-auto md:h-[500px]">
                {/* Video */}
                <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${slide.videoId}?rel=0&showinfo=0&controls=1`}
                    title={slide.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-[20px] hover:text-orange-500 transition-colors mb-3">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="text-center text-gray-800 text-3xl md:text-[24px] mt-6 md:mt-0 font-semibold">
          <p>Get a Free <span className="text-[#FE641A]">Video Shoot + 1-Year Growth Plan</span> at Your Office — Schedule Today</p>
        </div>
        {/* CTA Button */}
        <div className="w-full h-[100px] sm:h-[180px] flex justify-center items-center  md:mt-[-30px] mt-[-10px]"><motion.div
          className="mx-auto justify-center mt-4  border-[1px] border-[#FE641A] p-3 inline-block rounded-full transition-all duration-[5000ms] ease-out hover:border-[8px] hover:border-transparent hover:p-0"
          variants={item}
        >
          <button
            onClick={scrollToCalendly}
            className="bg-[#FE641A] text-white rounded-full text-xl font-semibold shadow-xl transition-all duration-[5000ms] px-8 py-4 sm:px-12 sm:py-6 flex flex-col items-center text-center"
          >
            <span className="text-2xl font-semibold">Schedule a Call Now</span>

          </button>
        </motion.div></div>
    </section>
  );
}
