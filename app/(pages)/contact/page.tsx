import SectionLayout from "@/components/universal/SectionLayout";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import SimpleMap from "@/components/unique/contact/Map";
import Form from "@/components/unique/contact/Form";
import Reveal from "@/components/motion/Reveal";
import { AnimateContactHero } from "@/components/universal/AnimateContactHero";

export const metadata: Metadata = {
  title: "Contact-Bayshore Communication",
  description:
    "Are you concerned about your business growth? Bayshore's here to help. Contact us today and get a free consultation. Let us show you how we can make a difference for your business.",
};

let address: {
  title: string;
  phone: string;
  address: string;
  email: string;
  // icon: string;
}[];

address = [
  {
    title: "Tampa Office",
    phone: "+1 (509) 592-1745",
    address: "1211 Tech Blvd Suite 120, Tampa, FL 33619, United States",
    email: "neel@bayshorecommunication.org",
  },
  {
    title: "Asia Office",
    phone: "+8801685035449",
    address:
      "Flat : 2nd , House : 21, Road : 1, Block : A, Aftab Nagar, Dhaka - 1212",
    email: "info@bayshorecommunication.com",
  },
];

const Page = () => {
  return (
    <>
      <h1 className="bg-clip-text text-transparent bg-[#F4F4F4] inline absolute">
        Contact Us
      </h1>
      <AnimateContactHero />
      <SectionLayout bg="">
        <Reveal>
          <div className="flex flex-wrap justify-center md:justify-between gap-20 md:gap-20 mt-20 mb-20 items-center">
            <div className="md:flex-1 ">
              <Adress
                title="Tampa Office"
                address={address[0].address}
                phone={address[0].phone}
                email={address[0].email}
              />
            </div>

            <div className="hidden md:block">
              <div className="border bg-[#FE631A] w-2 h-[250px] rounded-full flex items-start justify-center">
                {/* <div className="bg-deep-orange-600 w-3 h-16 rounded-full"></div> */}
              </div>
            </div>

            <div className="md:hidden md:visible sm:visible">
              <div className="bg-[#FE631A] w-[250px] h-1 rounded-full flex items-start justify-center">
                {/* <div className="bg-deep-orange-600 w-3 h-16 rounded-full"></div> */}
              </div>
            </div>

            <div className="md:flex-1 mt-[14px]">
              <Adress
                title="Asia Office"
                address={address[1].address}
                phone={address[1].phone}
                email={address[1].email}
              />
            </div>

            <div className="md:flex-[2]">
              <div className="mx-auto">
                <h4 className="text-3xl font-bold !text-center mb-2">
                  Tired of Searching? Get the Help You Need Instantly!
                </h4>
                <h4 className="text-[17px] font-normal !text-center mb-12">
                  Just fire away your questions or concerns in a new message
                </h4>
                <Form />
              </div>
            </div>

            {/* <Adress title="Dubai" /> */}
          </div>
        </Reveal>
      </SectionLayout>
      {/* <SectionLayout bg="">
        <div className="max-w-[600px] mx-auto">
          <h4 className="heading-four !text-center">
            Just send us your questions or concerns by starting a new message
            and we will give you the help you need.
          </h4>
          <Form />
        </div>
      </SectionLayout> */}

      {/* <SimpleMap /> */}
      <Reveal>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1019.8052045544562!2d-82.67877466610979!3d27.756943436867076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e242db96ffff%3A0x6a7fc5cfe7f891a3!2sBayshore%20Communication!5e0!3m2!1sen!2sbd!4v1693473942600!5m2!1sen!2sbd"
            className="w-full h-[35rem] shadow-lg"
          ></iframe>
        </div>
      </Reveal>
    </>
  );
};

export default Page;

const Row = ({ title, icon, address, phone, email }: any) => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="heading-four mb-2 flex items-center gap-4">
        <span>
          <Image
            src={icon}
            alt="contact-office"
            width={600}
            height={80}
            className="w-[2rem] h-auto object-cover"
          />
        </span>
        <span>{title}</span>
      </h4>
      <div className="mb-[1rem]">
        <p className="text-small !text-center">{phone}</p>
        <p className="text-small !text-center">{address}</p>
        <p className="text-small !text-center">{email}</p>
      </div>
    </div>
  );
};

const Adress = ({ address, title, phone, email }: any) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="heading-secondary">{title}</h3>
      <div className="flex flex-col gap-3">
        <Row title="Phone" icon="/assets/phone.svg" phone={phone} />
        <Row title="Address" icon="/assets/location.svg" address={address} />
        <Row title="Email" icon="/assets/email.svg" email={email} />
      </div>
    </div>
  );
};
