"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function CompanyVision() {
  return (
    <section id="vision" className="section-pad bg-white">
      <div className="container-786">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[50fr_50fr] lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={fadeUp.transition}
            className="flex flex-col"
          >
            <span className="eyebrow eyebrow-dot">OUR IMPACT</span>

            <h2 className="mt-4 max-w-xl font-sans text-4xl sm:text-5xl lg:text-[52px] font-medium leading-[1.08] tracking-[-0.02em] text-[#14231D]">
              All returns support need-based scholarships. Minimum 50% are{" "}
              <span className="font-playfair-italic font-normal text-[#32A563]">
                women.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-[16px] sm:text-[17px] leading-relaxed text-[#5B6B62]">
              Every dollar 786 earns funds a scholarship, not just a return. 786 is committed to closing the gender gap in engineering.
            </p>
          </motion.div>

          {/* Right Column: Uploaded Graduate Student Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative aspect-[4/3] sm:aspect-[16/13] w-full overflow-hidden rounded-2xl shadow-sm bg-gray-100"
          >
            <Image
              src="/assets/our-impact.jpg"
              alt="Engineering scholarship graduate student"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="img-zoom object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
