"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services1 = [
    {
      title: "WEBSITE DESIGN",
      desc: "Enhance your online presence with Bayshore’s affordable, professional web design services",
      icon: "images/services/Website design.png",
    },
    {
      title: "MOBILE APP",
      desc: "We build Native, Cross-Platform, Hybrid, and Progressive Web Apps",
      icon: "images/services/mobile-application.png",
    },
    {
      title: "SEO",
      desc: "We offer local and international SEO to boost your search rankings and attract more targeted organic traffic",
      icon: "images/services/seo.png",
    },
    {
      title: "UI/UX DESIGN",
      desc: "Our UX/UI specialists design user-friendly, functional interfaces for websites, apps, and software",
      icon: "images/services/UIUX.png",
    },
    {
      title: "PAID ADVERTISING",
      desc: "Boost your brand with our paid ads, offering instant exposure and key product info to consumers",
      icon: "images/services/Paid Advertising.png",
    },
    {
      title: "SOCIAL MEDIA MARKETING",
      desc: "We run social media ads on Facebook, Twitter, Instagram, and YouTube to reach your target audience",
      icon: "images/services/social-media marketing.png",
    },
    {
      title: "EMAIL MARKETING",
      desc: "Email marketing engages clients and prospects with valuable content and special offers",
      icon: "images/services/email-marketing.png",
    },
    {
      title: "Content Marketing",
      desc: "Our marketing automation solutions simplify your campaigns and transform your business",
      icon: "images/services/content marketing.png",
    },
  ];

  const services2 = [
    {
      title: "Content Writing",
      desc: "We create engaging content to attract audiences across blogs, websites, newsletters, social media, and more",
      icon: "images/services/content-writing.png",
    },
    {
      title: "Digital PR",
      desc: "Our digital production team blends creativity, data, and empathy, delivering meticulous online content management",
      icon: "images/services/Digital PR.png",
    },
    {
      title: "Graphic Design",
      desc: "We create striking ads, websites, and product designs to establish your visual identity",
      icon: "images/services/graphic-design.png",
    },
    {
      title: "Motion Graphic",
      desc: "Motion graphics use animation, sound, and effects to tell stories, convey messages, and enhance branding",
      icon: "images/services/motion-graphic.png",
    },
    {
      title: "Video Production",
      desc: "Video production involves creating and editing videos for various platforms, from planning to final cut",
      icon: "images/services/video-production.png",
    },
    {
      title: "Influencer Marketing",
      desc: "Influencers, with their vast followings, partner with brands in innovative marketing to create powerful impact",
      icon: "images/services/Influencer Marketing.png",
    },
    {
      title: "AI-Driven Marketing",
      desc: "Patterns hold a quiet beauty—in the pauses before a click and the late-night scrolls of curiosity",
      icon: "images/services/Ai-driven marketing.png",
    },
    {
      title: "Social Media Endorsement",
      desc: "People no longer trust billboards—not the message, but the distant, polished voices. In a noisy world, authenticity is essential",
      icon: "images/services/Social media Endorsement.png",
    },
    {
      title: "Marketing Automation",
      desc: "We provide advanced marketing automation that streamlines your campaigns, saves time, and boosts productivity",
      icon: "images/services/Marketing Automation.png",
    },
  ];

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
    exit: { opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="max-w-[1440px] min-h-screen mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl lg:text-[36px] xl:text-[48px] font-bold text-gray-900 mb-4">
        Our Services
      </h2>
      <p className="sm:text-[28px] text-gray-600 max-w-3xl mx-auto mb-12">
        Construction sector is considered to be one of the main sources of
        nationals economy and also country development.
      </p>

      {/* Services 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
        {services1.map((service, index) => (
          <div key={index} className="text-center">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex justify-center mb-4"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
              />
            </motion.div>
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button
          onMouseEnter={() => setIsModalOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Explore More
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg relative max-w-[90%] mx-auto"
              variants={modalVariants}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
              >
                ✕
              </button>
              <h3 className="text-[48px] font-bold mb-10">
                Explore Our Services
              </h3>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {services2.map((service, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={itemVariants}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex justify-center mb-4"
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={48}
                        height={48}
                      />
                    </motion.div>
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
