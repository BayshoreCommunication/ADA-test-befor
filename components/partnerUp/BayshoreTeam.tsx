"use client";

import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Chief Executive Officer", image: "/image/bayshore-team/executive.png" },
  { name: "Chief Technology Officer", image: "/image/bayshore-team/technology.png" },
  { name: "Creative Director", image: "/image/bayshore-team/creative.png" },
  { name: "Digital Marketing Manager", image: "/image/bayshore-team/digital.png" },
  { name: "Head of Digital Marketing", image: "/image/bayshore-team/digital-head.png" },
  { name: "Client Relationship Executive", image: "/image/bayshore-team/client.png" },
  { name: "SEO Expert", image: "/image/bayshore-team/seo.png" },
];

export default function Team() {
  return (
    <div className="relative bg-[url('/image/bayshore-team/bg.png')] bg-cover bg-center">
      <div className="max-w-[1240px] mx-auto px-8 pb-16 text-center">

        {/* Header Image */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/image/bayshore-team/team.png"
            alt="Team"
            width={1590}
            height={650}
          />
        </motion.div>

        {/* Description */}
        <motion.div
          className="mt-[50px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-gray-600 max-w-8xl mx-auto mb-6">
            Bayshore Communication, established in 2017, is a trusted business
            partner for agencies. We deliver innovative, cost-effective, and
            high-quality digital solutions designed to boost revenue, enhance
            efficiency, and empower your team to achieve more.
          </p>
          <p className="text-gray-600 max-w-5xl mx-auto">
            Our goal is to help entrepreneurs upscale their businesses by
            cutting off their heavy workloads and deliver high-quality services
            that exceed their expectations and establish a long-term business
            relationship.
          </p>
        </motion.div>

        {/* FOLLOW US */}
        <motion.h2
          className="text-32px font-bold text-center mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          FOLLOW US
        </motion.h2>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a href="https://www.facebook.com/bayshorecommunication/">
            <FaFacebook className="text-4xl text-[#FE641A]" />
          </a>
          <a href="https://www.instagram.com/bayshorecommunication/">
            <FaInstagram className="text-4xl text-[#FE641A]" />
          </a>
          <a href="https://twitter.com/BayshoreCom">
            <FaXTwitter className="text-4xl text-[#FE641A]" />
          </a>
          <a href="https://www.linkedin.com/company/bayshore-communication/">
            <FaLinkedin className="text-4xl text-[#FE641A]" />
          </a>
          <a href="https://www.youtube.com/@bayshorecommunication">
            <FaYoutube className="text-4xl text-[#FE641A]" />
          </a>
          <a href="https://www.tiktok.com/@bayshorecommunication?is_from_webapp=1&sender_device=pc">
            <FaTiktok className="text-4xl text-[#FE641A]" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
