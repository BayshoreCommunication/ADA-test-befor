"use client";
import React, { useState } from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import { FaRegCirclePlay, FaStar } from "react-icons/fa6";

const testimonialsData = [
  {
    name: "Hardam Tripathi",
    rating: 5,
    testimonial:
      "Hello, I'm U.S. immigration attorney Hardam Tripathi from Trip Law. If you're a young attorney, know that success in starting your law firm requires a strong marketing team. Law school doesn't teach marketing, but it's vital. Invest in your marketing to avoid future problems and achieve growth. Salman from Bayshore can guide you with SEO and creative strategies. Marketing helps attract clients, establish authority, and grow financially. It's crucial for young attorneys. Best of luck as you grow your firm and help others.",
    img: "/assets/company-profile/hardam_tripathi.png",
    video_thumbnail: "/assets/company-profile/video-thumbnail1.png",
    video_link: "https://www.youtube.com/embed/RVit6poGLRs?si=udy8J53Pt20Yx2we",
  },
  {
    name: "Charlos Rosario",
    rating: 5,
    testimonial:
      "As an owner of Apex Advisor Group, I have been very impressed with the service provided by Bayshore. They are a professional and reliable company that offers a range of services. They are committed to enabling and empowering their clients to be as independent as possible within their community. They also have friendly and helpful teams that always go the extra mile to meet the needs and expectations of their clients. I would highly recommend Bayshore's service to anyone who is looking for a quality and compassionate care provider.",
    img: "/assets/company-profile/charlos_rosario.png",
    video_thumbnail: "/assets/company-profile/video-thumbnail2.png",
    video_link: "https://www.youtube.com/embed/ohyUTzLiLbI?si=hOxOovAHev4Sw3xk",
  },
  {
    name: "Chis Thayer",
    rating: 5,
    testimonial:
      "Hello, I'm thrilled to say that I am the proud owner of Catflix, a journey that wasn't always easy. Thankfully, Bayshore Communications came to my rescue, transforming my dull website into a thriving business strategy. They treated me like family, addressing security concerns, improving customer communication, and optimizing our online presence. Entrusting them with every aspect of my business was a decision I'll never regret. Bayshore Communications handled it all with utmost care, and their dedication and expertise turned Catflix into a phenomenal success. I'm forever grateful for their genuine support and trust.",
    img: "/assets/company-profile/chis_thayer.png",
    video_thumbnail: "/assets/company-profile/video-thumbnail2.png",
    video_link: "https://www.youtube.com/embed/iqHA7By9OAI?si=Li8gXqx8pVV3ovD6",
  },
];

const Testimonials = () => {
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(
    null
  );

  const handlePlay = (index: number) => {
    setPlayingVideoIndex(index);
  };

  return (
    <div>
      <SectionLayout bg="">
        <h2 className="text-[28px] md:text-40px lg:text-[50px] font-medium text-white text-center mb-10 uppercase">
          What Our Partners Saying About Us
        </h2>
        <div className="flex flex-col gap-10">
          {testimonialsData.map((client, index) => (
            <div
              key={index}
              className="timeline-item w-full lg:max-w-[75%] mx-auto"
            >
              <div
                className="p-10 lg:p-20 rounded-[20px] lg:rounded-[50px]"
                style={{
                  backgroundImage:
                    "url('/assets/company-profile/testimonials-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "auto", // Adjust height as needed
                }}
              >
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                  <div className="flex-1">
                    <Image
                      src={client?.img}
                      alt={client?.name}
                      width={150}
                      height={150}
                    ></Image>
                    <h4 className="text-[28px] md:text-40px font-medium text-white mb-3">
                      {client?.name}
                    </h4>
                    <div className="flex gap-2 items-center ">
                      <FaStar color="#FFC226" size={24} />
                      <FaStar color="#FFC226" size={24} />
                      <FaStar color="#FFC226" size={24} />
                      <FaStar color="#FFC226" size={24} />
                      <FaStar color="#FFC226" size={24} />
                    </div>
                    <p className="text-[16px] lg:text-[17px] text-white mt-10">
                      {client?.testimonial}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="relative group">
                      {playingVideoIndex === index ? (
                        <div className="relative rounded-3xl  overflow-hidden w-full">
                          <iframe
                            src={client?.video_link}
                            allowFullScreen
                            className="w-full h-[152px]  lg:h-[300px] rounded-lg"
                          />
                        </div>
                      ) : (
                        <button
                          onClick={() => handlePlay(index)}
                          className="block w-full"
                        >
                          <div className="relative  rounded-3xl overflow-hidden ">
                            <Image
                              src={client?.video_thumbnail}
                              alt={client?.video_thumbnail}
                              width={1000}
                              height={550}
                              className="w-full rounded-lg transition-transform duration-500 transform group-hover:scale-105"
                            />
                            <FaRegCirclePlay
                              className="absolute inset-0 text-white text-[80px] transform group-hover:scale-110 bg-black bg-opacity-60 rounded-full"
                              style={{
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                              }}
                            />
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default Testimonials;
