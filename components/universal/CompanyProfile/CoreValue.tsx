import Image from "next/image";
import React from "react";
import SectionLayout from "../SectionLayout";

const valueData = [
  {
    img: "/assets/company-profile/values/1.png",
    title: "Continual Growth:",
    description:
      "We are committed to personal and professional development, continually seeking opportunities to learn, grow, and improve.",
  },
  {
    img: "/assets/company-profile/values/2.png",
    title: "Client Satisfaction:",
    description:
      "We prioritize our clients' needs and strive to exceed their expectations, ensuring they are delighted with our services.",
  },
  {
    img: "/assets/company-profile/values/3.png",
    title: "Result-Oriented Approach:",
    description:
      "We focus on delivering tangible results that drive our clients' success and help them achieve their goals.",
  },
  {
    img: "/assets/company-profile/values/4.png",
    title: "Professionalism:",
    description:
      "We maintain the highest standards of professionalism in all our interactions and deliverables.",
  },
  {
    img: "/assets/company-profile/values/5.png",
    title: "Integrity & Transparency:",
    description:
      "We operate with honesty and openness, building trust with our clients through clear and transparent communication.",
  },
  {
    img: "/assets/company-profile/values/6.png",
    title: "Collaboration & Teamwork:",
    description:
      "We believe in the power of teamwork and collaboration, working together to achieve the best outcomes for our clients.",
  },
  {
    img: "/assets/company-profile/values/7.png",
    title: "Accountability:",
    description:
      "We take responsibility for our actions and deliver on our promises, ensuring reliability and trustworthiness.",
  },
  {
    img: "/assets/company-profile/values/8.png",
    title: "Innovation & Creativity:",
    description:
      "We embrace innovation and creativity, constantly seeking new and better ways to solve problems and deliver exceptional value to our clients.",
  },
];

const CoreValue = () => {
  return (
    <div className="relative h-[60vh] md:h-[78vh] lg:h-[110vh] xl:h-[130vh] w-full ">
      {/* Background Image */}
      <Image
        src="/assets/company-profile/core-value-bg.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      <SectionLayout bg="">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 py-0 lg:py-16 px-6">
          <div className="w-full  lg:w-[60%] mx-auto text-center mb-14">
            <h3 className="text-[28px] md:text-40px lg:text-[50px] px-14 text-white font-semibold mb-4 lg:mb-8 text-center w-full">
              Our Core Value
            </h3>
            <p className="text-[16px] lg:text-[20px] text-white">
              At Bayshore Communication, our core values guide our actions and
              define our approach to business. These values are the foundation
              of our success and the principles we uphold in every project
            </p>
          </div>
          {/* <div className="hidden lg:block"> */}
          <div>
            <Image
              src="/assets/company-profile/values.png"
              alt=""
              width={1920}
              height={1000}
            ></Image>
          </div>
          {/* <div className="  grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
            {valueData.map((item, index) => (
              <div key={index} className="values-item">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={120}
                  height={100}
                />
                <h3 className="text-white text-[22px] font-bold">
                  {item.title}
                </h3>
                <p className="text-white">{item.description}</p>
              </div>
            ))}
          </div> */}
          <div className="w-full lg:w-[60%] mx-auto text-center">
            <p className="text-[16px] lg:text-[20px] text-white">
              These core values are embedded in everything we do, driving us to
              deliver excellence and create lasting partnerships with our
              clients.
            </p>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default CoreValue;
