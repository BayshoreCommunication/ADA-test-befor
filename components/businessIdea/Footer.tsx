"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiInfo } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="flex justify-center items-center bg-white px-4 md:px-8 py-6 md:mt-[60px] mb-[50px]">
      <div className="w-full max-w-[1640px] text-center">

        {/* Top contact info */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-center md:space-x-16 space-y-4 md:space-y-0 text-[#FE641A] text-base md:text-[16px] mb-10 mt-10 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center items-center space-x-2">
            <HiOutlineMail size={20} className="text-[#FE641A]" />
            <span>info@bayshorecommunication.com</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <FiPhone size={20} className="text-[#FE641A]" />
            <span>+1 (509) 592-1745</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <FiInfo size={20} className="text-[#FE641A]" />
            <span>Monday to Friday 8:00 AM to 4:30 PM EST.</span>
          </div>
        </motion.div>

        {/* Disclaimer text */}
        <motion.p
          className="text-[14px] md:text-[16px] text-black max-w-[90vw] md:max-w-[1200px] mx-auto mb-12 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Any results shared by Bayshore Communication Marketing Services are
          examples of potential outcomes and are not guarantees. Success
          stories, testimonials, and other results are exceptional and
          non-typical. Your results will vary based on your skills, effort,
          experience, motivation, and how you implement our strategies, as well
          as external factors like market conditions and business risks.
          <br /><br />
          The Bayshore Communication Marketing Services are designed to provide
          guidance and solutions, but you are solely responsible for your
          business decisions and actions. The evaluation and use of our
          marketing products and services should be based on your own due
          diligence. You agree that Bayshore Communication is not liable for any
          results, outcomes, or consequences arising from the use of our
          services.
          <br /><br />
          <span className="">
            Do you have questions? Are you wondering if this will work for you?
            Email us at info@bayshorecommunication.com We will be happy to
            discuss your goals and how our program may help you. Thank you.
          </span>
        </motion.p>

        {/* Logo */}
        <motion.div
          className="flex justify-center py-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
            aria-label="Go to top"
          >
            <Image
              src="/image/footer/logo.png"
              alt="Bayshore Logo"
              width={250}
              height={60}
              priority
              className="max-w-full h-auto"
            />
          </button>
        </motion.div>

        {/* Footer text */}
        <motion.p
          className="text-xl md:text-[16px] font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Bayshore Communication All Rights Reserved
        </motion.p>

        {/* Links */}
        <motion.div
          className="flex justify-center items-center gap-4 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link
            href="https://www.bayshorecommunication.com/terms-conditions"
            className="text-lg md:text-[16px] text-[#FE641A] hover:underline"
          >
            Terms
          </Link>
          <Link
            href="https://www.bayshorecommunication.com/privacy-policy"
            className="text-lg md:text-[16px] text-[#FE641A] hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://www.bayshorecommunication.com/disclaimer"
            className="text-lg md:text-[16px] text-[#FE641A] hover:underline"
          >
            Disclaimer
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
