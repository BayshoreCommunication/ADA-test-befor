import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
const serviceData = [
  {
    img: "/assets/company-profile/services/service_1.png",
  },
  {
    img: "/assets/company-profile/services/services_2.png",
  },
  {
    img: "/assets/company-profile/services/service_3.png",
  },
  {
    img: "/assets/company-profile/services/service_4.png",
  },
  {
    img: "/assets/company-profile/services/service_5.png",
  },
  {
    img: "/assets/company-profile/services/service_6.png",
  },
  {
    img: "/assets/company-profile/services/service_7.png",
  },
  {
    img: "/assets/company-profile/services/service_8.png",
  },
  {
    img: "/assets/company-profile/services/service_9.png",
  },
  {
    img: "/assets/company-profile/services/service_10.png",
  },
  {
    img: "/assets/company-profile/services/service_11.png",
  },
  {
    img: "/assets/company-profile/services/service_12.png",
  },
];
const Services = () => {
  return (
    <SectionLayout bg="">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {serviceData.map((item, index) => (
          <div key={index} className="w-full">
            <Image
              src={item.img}
              alt={`Service ${index + 1}`} // Providing a more descriptive alt text
              width={1000}
              height={600}
              className="mx-auto w-full"
            />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Services;
