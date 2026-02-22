// components/Reveal.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const tagMap = {
  div: motion.div,
  section: motion.section,
  header: motion.header,
  footer: motion.footer,
  main: motion.main,
  nav: motion.nav,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  p: motion.p,
  span: motion.span,
  a: motion.a,
  button: motion.button,
  li: motion.li,
  ul: motion.ul,
} as const;

type MotionTag = keyof typeof tagMap;

type RevealProps = {
  /** HTML tag to render as (motion-wrapped) */
  tag?: MotionTag;
  children: ReactNode;
  className?: string;

  /** Animation config */
  x?: number; // default 0
  y?: number; // default 24
  opacityFrom?: number; // default 0
  duration?: number; // default 0.7
  delay?: number; // default 0
  ease?: number[]; // default [0.22, 1, 0.36, 1]

  /** In-view behavior */
  once?: boolean; // default true
  amount?: number; // default 0.4
};

export default function Reveal({
  tag = "div",
  children,
  className,
  x = 0,
  y = 24,
  opacityFrom = 0,
  duration = 0.7,
  delay = 0,
  ease = [0.22, 1, 0.36, 1],
  once = true,
  amount = 0.4,
}: RevealProps) {
  const Cmp = tagMap[tag] ?? motion.div;

  const variants = {
    hidden: { opacity: opacityFrom, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease },
    },
  };

  return (
    <Cmp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </Cmp>
  );
}
