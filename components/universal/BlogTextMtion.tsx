"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const BlogTextMtion: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const element = document.getElementById("animatedContent");

      if (element && scrollPosition > element.offsetTop && !isVisible) {
        setIsVisible(true);
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, controls]);

  return (
    <div>
      <motion.p
        id="animatedContent"
        className="text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        These endorsements were more than just compliments; they were a
        representation of lives changed, goals fulfilled, and difficulties
        clarified. The success tale was brought to life through client
        testimonials.
      </motion.p>

      <br />

      <motion.img
        src="/assets/case-studies/lessons-learned-and-future-prospects-01.svg"
        alt="lessons-learned-and-future-prospects"
        className="w-full h-full my-10"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      />

      <motion.h2
        className="text-secondary sm:text-left text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        Lessons Learned and Future Prospects
      </motion.h2>

      <motion.h3
        className="sm:text-left text-center italic"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        A. Takeaways for Triumph: Unveiling the Strategies Global Leap
      </motion.h3>
    </div>
  );
};

export default BlogTextMtion;
