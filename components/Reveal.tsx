"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Fade-up on scroll using the shared `fadeUp` values from lib/motion.
 * `delay` adds per-item stagger (seconds) for grid children.
 * No hover behavior — cards are static on hover sitewide.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      viewport={fadeUp.viewport}
      transition={{ ...fadeUp.transition, delay }}
    >
      {children}
    </MotionTag>
  );
}
