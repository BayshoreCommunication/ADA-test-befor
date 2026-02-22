"use client";

import { useState } from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "JDM",
    time: "2 months ago",
    review:
      "I have been using pageant medical for quite some time. They are extremely professional. The office is efficient and clean. I call ahead to let them know. I'm going to arrive and when I get there, my medicine is ready. Their prices are much better than other Similar facilities in the area. I would highly recommend them.",
    rating: 5,
    image: "",
  },
  {
    name: "Lisa Hernandez",
    time: "3 months ago",
    review:
      "Numerous medical weight loss facilities exist, yet none surpass this one in terms of exceptional customer service and comprehensive weight loss support. My experience was outstanding. I extend my sincere gratitude, particularly to Candace for her phenomenal service and to Dana for her invaluable guidance.",
    rating: 5,
    image: "",
  },
  {
    name: "Jenn Howard",
    time: "4 months ago",
    review:
      "Wonderful experience. Staff is so nice! I've had great success with their program. They make it easy and painless. Highly recommended.",
    rating: 5,
    image: "",
  },
  {
    name: "Sarah Valentine",
    time: "4 months ago",
    review:
      "Very considerate, professional people. It was nice to come in weekly. I have achieved my weight loss goals. Great behavior modification tips.",
    rating: 5,
    image: "",
  },
  {
    name: "Jenny Brito",
    time: "4 months ago",
    review:
      "Amazing environment! Everybody is friendly from the front desk to the specialists! Great customer service and very knowledgeable! Keep the good work guys",
    rating: 5,
    image: "",
  },
];

const testimonialsTwo = [
  {
    name: "Keyshla Rivera",
    time: "5 months ago",
    review:
      "The care is 100%, they are very kind and very reliable. I am in a weight loss plan and the process is very effective. Thanks to the team of Medical Weight Loss Tampa.",
    rating: 5,
    image: "",
  },
  {
    name: "Sydney Manna",
    time: "a month ago",
    review:
      "The staff here is amazing! Always so inviting and knowledgeable, which makes achieving your goals that much easier!",
    rating: 5,
    image: "",
  },
  {
    name: "Jeanne Hardesty",
    time: "4 months ago",
    review:
      "Awesome staff along with Santana. I recommend anyone that wants to do a weight loss program to check into it!",
    rating: 5,
    image: "",
  },
  {
    name: "Victor Arencibia",
    time: "4 months ago",
    review:
      "Very friendly and informative staff. Came here for the weight loss, 45 lbs lost over the course of 7 months.",
    rating: 5,
    image: "",
  },
  {
    name: "Jazzy Is A Baddie",
    time: "3 months ago",
    review:
      "I love the atmosphere and energy at this clinic. It's a great place to be and I feel so encouraged!",
    rating: 5,
    image: "",
  },
];

export default function Testimonials() {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const autoplayConfig = isAutoPlaying
    ? {
        delay: 0,
        disableOnInteraction: false,
      }
    : false;

  return (
    <section className="w-full px-8 py-8 md:py-16 bg-gray-50">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Our patients&apos; transformations speak for themselves. Hear how our
            personalized weight loss and wellness programs have changed lives.
          </p>
          <a
            href="https://share.google/gvEBvr3N2B1QK82KM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-primary font-medium hover:underline"
          >
            View all Google Reviews here
          </a>
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setIsAutoPlaying((value) => !value)}
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-white"
              aria-pressed={!isAutoPlaying}
            >
              {isAutoPlaying ? "Pause moving testimonials" : "Play moving testimonials"}
            </button>
          </div>
        </div>

        {/* First Swiper - Left to Right */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={
            autoplayConfig && {
              ...autoplayConfig,
              reverseDirection: true,
            }
          }
          speed={6000}
          loop={true}
          allowTouchMove={true}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-16 mb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100 h-full flex flex-col">
                {/* User Info */}
                <div className="flex items-center gap-4 mb-4">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.time}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-orange-500 text-lg" aria-hidden="true">
                      *
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm text-gray-600 leading-relaxed">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Swiper - Right to Left */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={
            autoplayConfig && {
              ...autoplayConfig,
              reverseDirection: false,
            }
          }
          speed={6000}
          loop={true}
          allowTouchMove={true}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-16 mb-8"
        >
          {testimonialsTwo.map((testimonial, index) => (
            <SwiperSlide key={`second-${index}`}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100 h-full flex flex-col">
                {/* User Info */}
                <div className="flex items-center gap-4 mb-4">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.time}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-orange-500 text-lg" aria-hidden="true">
                      *
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm text-gray-600 leading-relaxed">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
