"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Renders a pill/dot photo collage that echoes the 786 logomark's shape rhythm.
 * The provided assets (banner4.png, hero-img2.png) are pre-composed transparent
 * collages, so this displays the finished collage with a subtle fade+scale
 * entrance rather than reconstructing it from raw segments.
 */
type PillCollageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function PillCollage({
  src,
  alt,
  width,
  height,
  className = "",
}: PillCollageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`w-full ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full object-contain"
      />
    </motion.div>
  );
}
