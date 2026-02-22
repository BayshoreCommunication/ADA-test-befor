"use client";

import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbBrandFacebook } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
const teammatesData = [
  {
    id: 1,
    image: "/images/team/Emily.png",
    name: `Dr. Emily Devol Webster`,
    designation: "Medical Director",
    details: `Dr. Emily Devol Webster always knew she wanted to help people and began manifesting her career as a physician from the age of 14. She attended Ohio University Heritage College of Osteopathic Medicine in 2011, followed by Rowan University for residency training, to pursue her dreams. The morning of her medical school graduation, Emily received a phone call that would change her life forever- she was diagnosed with breast cancer. Three days later Emily had a bilateral mastectomy- a procedure where both breasts are removed at the same time. She wrestled through 9 surgeries, dozens of treatments, multiple reconstructions, and a handful of complications while undertaking residency. While undergoing cancer treatment as a medical resident, Dr. Devol Webster even testified before the New Jersey State Assembly, leading to instrumental expansion of the New Jersey State paid family and disability laws.  Through her own personal experiences as a patient, Dr. Devol Webster realized her true passion. Since then, she has dedicated her life to helping men and women achieve their wellness and aesthetic goals through the art and science of modern medicine. Through years of training and practice she has been appointed a National Speaker and KOL for top aesthetic companies, her office has been named as a Center of Excellence training facility, she has been awarded Tampa Top Doc in Cosmetic Surgery 4 years in a row, and has continued to train internationally with top medical providers in the body sculpting and aesthetic field. She uses her experience to empower and teach others to live their life to the fullest. Today, Emily is married to a loving and supportive husband, and has a beautiful 5-year-old daughter that's just as sweet, lively, and captivating as her mommy. Dr. Devol Webster is passionate about continuing education, so that she may provide the most innovative and cutting edge technologies in the field of cosmetic body sculpting, aesthetic medicine, and bio-hacking. In the words of Dr. Devol Webster, "wellness has completely transformed my life and I want to share my experience and expertise with others because I believe we all deserve to not only look, but feel our best." `,
    socialsMedia: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      x: "https://x.com",
    },
  },
  {
    id: 2,
    image: "/images/team/Dana.png",
    name: `Dana Osnos`,
    designation: "Executive Director",
    details:
      "Dana was born in Pasadena, California, and raised in Cleveland, Ohio, before moving to Florida at the age of 10. Growing up, she developed a love for writing and communication, which led her to study Journalism in high school in Tampa. During this time, she was actively involved in clubs such as Quill & Scroll and the National Honor Society, where she honed her leadership and storytelling skills. Her professional journey began in the food and beverage industry, where she worked as a corporate trainer for Applebee's. In this role, she traveled across Florida, training staff and assisting with the successful launch of new locations. This experience not only strengthened her skills in mentorship and team-building but also deepened her passion for helping others succeed. In 2018, Dana made a career shift into the health and wellness industry, driven by a strong desire to help individuals live happier, healthier, and pain-free lives. Through this transition, she has continued to focus on personal development and making a meaningful impact in the lives of those she serves. Beyond her professional endeavors, Dana is a devoted mother to three amazing children—Elijah, Nevaeh, and Madison—who inspire her every day. She enjoys attending sporting events, spending quality time with family, engaging in community outreach, and expanding her knowledge of American Sign Language (ASL). Dedicated to continuous growth, she strives to uplift those around her and leave a lasting positive impact both at home and in her community. ",
    socialsMedia: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      x: "https://x.com",
    },
  },
];

type Teammate = (typeof teammatesData)[number];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState<Teammate | null>(null);
  return (
    <section className="max-w-[1640px] mx-auto px-8 md:my-16 my-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
        <div>
          <Reveal tag="h2" className="text-3xl font-bold text-gray-900">
            Our Team
          </Reveal>
          <Reveal tag="p" className="text-gray-600 mt-2 max-w-2xl" delay={0.1}>
            Our dedicated team of healthcare professionals is committed to
            guiding you every step of the way with personalized care, expertise,
            and support.
          </Reveal>
        </div>
        <Reveal tag="div" delay={0.2}>
          <button className="mt-4 md:mt-0 border border-gray-300 rounded-full px-5 py-2 font-medium flex items-center gap-2 transition hover:bg-black hover:text-white">
            Explore Team Members →
          </button>
        </Reveal>
      </div>

      <div>
        <div className="grid grid-cols-1 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teammatesData.map((member, index) => (
              <div
                key={member.id}
                className={`bg-white shadow-lg rounded-2xl overflow-hidden  flex flex-col lg:flex-row items-center  `}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className=" "
                />

                <div className="px-6 pt-4 pb-6 flex-1">
                  <h3 className="text-xl uppercase font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mt-1 ">
                    {member.designation}
                  </p>
                  <p className="text-gray-600 mt-3 line-clamp-2">
                    {member.details}
                  </p>

                  <div className="flex  items-center  mt-4 lg:mt-6">
                    <div className="flex gap-4 ">
                    </div>
                    <div>
                      <button
                        onClick={() => setSelectedMember(member)}
                        className="underline text-primary text-medium "
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className=" fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4  ">
          <div className="bg-white rounded-2xl max-w-6xl w-full p-5 lg:p-8 relative shadow-xl my-10  overflow-scroll lg:overflow-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-1 right-2 md:top-2 md:right-2 lg:top-4 lg:right-4 text-gray-600 hover:text-red-500 text-2xl lg:text-3xl"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="flex flex-col max-w-6xl w-full gap-6 items-center">
              <div className="flex-1 flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={350}
                  height={350}
                  className="rounded-2xl object-cover"
                />
                <div>
                  <h3 className="text-xl lg:text-3xl font-semibold text-gray-800 uppercase">
                    {selectedMember.name}
                  </h3>
                  <p className="text-primary font-medium mt-1">
                    {selectedMember.designation}
                  </p>

                  {/* <div className="flex gap-4 mt-6">
                    <Link
                      href={selectedMember.socialsMedia.facebook}
                      target="_blank"
                      className="text-black/80 hover:text-blue-800 p-2 rounded-full bg-[#F2F4F7] text-xl"
                    >
                      <TbBrandFacebook />
                    </Link>
                    <Link
                      href={selectedMember.socialsMedia.instagram}
                      target="_blank"
                      className="text-black/80 hover:text-pink-800 p-2 rounded-full bg-[#F2F4F7] text-xl"
                    >
                      <FiInstagram />
                    </Link>
                    <Link
                      href={selectedMember.socialsMedia.x}
                      target="_blank"
                      className="text-black/80 hover:text-black p-2 rounded-full bg-[#F2F4F7] text-xl"
                    >
                      <FaXTwitter />
                    </Link>
                  </div> */}
                </div>
              </div>

              <div className="flex-1">
                <p className="text-gray-700 mt-4">{selectedMember.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
