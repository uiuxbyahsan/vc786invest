"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUpLoad } from "../lib/motion";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_030633_ddbe5946-3728-4dc9-ad0a-2e81e5682c69.mp4";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] sm:min-h-[92vh] items-start justify-center overflow-hidden bg-[#D8EFE0] text-center"
    >
      {/* Video background */}
      <video
        autoPlay={!reduce}
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Hero content positioned in upper area matching exact reference */}
      <div className="container-786 relative z-10 mx-auto w-full max-w-4xl pt-24 sm:pt-28 lg:pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <motion.h1
          {...fadeUpLoad}
          transition={{ ...fadeUpLoad.transition, duration: 0.7 }}
          className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium leading-[1.08] sm:leading-[1.08] tracking-[-0.02em] text-[#14231D]"
        >
          Invest in startups.
          <br />
          Fund the next
          <br />
          generation of{" "}
          <span className="font-playfair-italic font-normal text-[#32A563]">
            pioneers.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUpLoad}
          transition={{ ...fadeUpLoad.transition, duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base sm:text-lg lg:text-[20px] leading-relaxed text-[#14231D]/80 font-sans font-normal"
        >
          786 Ventures backs exceptional founders. The returns fund
          <br className="hidden sm:inline" /> STEM scholarships for minority and
          women engineering students.
        </motion.p>

        <motion.div
          {...fadeUpLoad}
          transition={{ ...fadeUpLoad.transition, duration: 0.7, delay: 0.2 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full bg-white text-[#14231D] font-medium text-base px-8 py-3.5 shadow-sm hover:bg-white/90 transition-all"
          >
            See Portfolio
          </Link>
          <Link
            href="#solutions"
            className="btn-arrow group text-base shadow-sm"
          >
            Invest Now
            <span className="btn-arrow__badge">
              <ArrowUpRight size={18} strokeWidth={2.2} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
