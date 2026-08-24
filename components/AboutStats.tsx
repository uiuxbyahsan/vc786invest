"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import CountUp from "./CountUp";

const STATS = [
  {
    prefix: "",
    value: 2022,
    suffix: "",
    label: "Founded",
  },
  {
    prefix: "",
    value: 2,
    suffix: "",
    label: "Portfolio Companies",
  },
  {
    prefix: "$",
    value: 100,
    suffix: "M",
    label: "Scholarship Goal",
  },
  {
    prefix: "",
    value: 50,
    suffix: "%",
    label: "Women Recipients",
  },
];

export default function AboutStats() {
  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow badge close to heading */}
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
          className="flex items-center justify-center mb-4 sm:mb-5 text-center"
        >
          <span className="eyebrow eyebrow-dot">ABOUT US</span>
        </motion.div>

        {/* Large Statement with both picture pills and italic last word */}
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="text-center"
        >
          <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-medium leading-[1.2] sm:leading-[1.22] lg:leading-[1.22] tracking-[-0.02em] text-[#14231D] max-w-5xl mx-auto">
            Capital that{" "}
            <span className="inline-flex align-middle mx-1.5 sm:mx-3 h-8 w-16 sm:h-12 sm:w-24 md:h-14 md:w-28 rounded-full overflow-hidden border border-black/10 relative -translate-y-0.5 sm:-translate-y-1">
              <Image
                src="/assets/about-pill-1.jpg"
                alt="786 Investment Team"
                fill
                sizes="(max-width: 768px) 80px, 120px"
                className="object-cover"
              />
            </span>{" "}
            gives back,
            <br className="hidden sm:inline" />
            <span className="inline-block sm:inline">before </span>
            <span className="inline-flex align-middle mx-1.5 sm:mx-3 h-8 w-16 sm:h-12 sm:w-24 md:h-14 md:w-28 rounded-full overflow-hidden border border-black/10 relative -translate-y-0.5 sm:-translate-y-1">
              <Image
                src="/assets/about-pill-2.jpg"
                alt="Founders Collaborating"
                fill
                sizes="(max-width: 768px) 80px, 120px"
                className="object-cover"
              />
            </span>{" "}
            <span className="inline-block sm:inline">it&apos;s </span>
            <span className="font-playfair-italic font-normal text-[#32A563]">
              asked to.
            </span>
          </h2>
        </motion.div>

        {/* 4 Stats Cards - Reduced weight with smooth animated CountUp countdown */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={{ ...fadeUp.transition, delay: 0.1 + i * 0.06 }}
              className="bg-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between min-h-[165px] sm:min-h-[185px] transition-colors shadow-xs"
            >
              <div className="font-sans text-4xl sm:text-5xl font-medium tracking-tight text-[#14231D] flex items-baseline">
                {stat.prefix && <span>{stat.prefix}</span>}
                <CountUp to={stat.value} duration={1.6} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="mt-8 text-sm sm:text-[15px] font-medium text-[#5B6B62]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
