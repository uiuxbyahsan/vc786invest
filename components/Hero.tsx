"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUpLoad } from "../lib/motion";

// WebGL is client-only. While it loads, the section's light CSS gradient
// (.hero-bg-container) shows through — no placeholder needed.
const HeroShaderBackground = dynamic(() => import("./HeroShaderBackground"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section
      className="hero-bg-container relative overflow-hidden"
      id="top"
    >
      {/* WebGL fluid gradient (falls back to a static CSS gradient) */}
      <HeroShaderBackground />

      {/* Subtle avif texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-soft-light"
        style={{
          backgroundImage: "url('/assets/hero-texture.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Readability veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/30" />

      {/* Content — centered max-width container */}
      <div className="container-786 relative z-10 flex flex-col items-center px-6 pb-24 pt-40 text-center sm:pb-32 sm:pt-44 lg:pb-40">
        <motion.h1
          {...fadeUpLoad}
          transition={{ ...fadeUpLoad.transition, duration: 0.7 }}
          className="max-w-[16ch] font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[68px]"
        >
          Invest in startups. Fund the next generation of{" "}
          <span className="font-playfair text-[1.06em] italic font-normal text-mint-dark">
            pioneers
          </span>
          .
        </motion.h1>

        <motion.p
          {...fadeUpLoad}
          transition={{ ...fadeUpLoad.transition, duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-[560px] text-lg leading-relaxed text-ink-muted"
        >
          786 Ventures backs exceptional founders. The returns fund STEM
          scholarships for minority and women engineering students.
        </motion.p>

        <motion.div
          {...fadeUpLoad}
          transition={{ ...fadeUpLoad.transition, duration: 0.7, delay: 0.2 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link href="#portfolio" className="btn btn-white">
            See Portfolio
          </Link>
          <Link href="#products" className="btn btn-dark">
            Invest Now <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
