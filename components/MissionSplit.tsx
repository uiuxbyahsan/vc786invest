"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { fadeUp } from "../lib/motion";

export default function MissionSplit() {
  return (
    <section id="mission" className="section-pad bg-white">
      <div className="container-786">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[55fr_45fr] lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={fadeUp.transition}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="eyebrow eyebrow-dot">OUR MISSION</span>
              <h2 className="mt-4 font-sans text-4xl sm:text-5xl lg:text-[52px] font-medium leading-[1.08] tracking-[-0.02em] text-[#14231D]">
                Capital that gives back, before it&apos;s{" "}
                <span className="font-playfair-italic font-normal text-[#32A563]">
                  asked to.
                </span>
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#5B6B62]">
                We flipped the traditional philanthropic model. Instead of asking
                for returns and hoping some trickle back to good causes, 786
                pledges its impact up front, then goes to work building
                category-defining companies.
              </p>
            </div>

            {/* Feature Points without background or border on icons */}
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <ShieldCheck size={26} className="text-[#14231D]" strokeWidth={1.8} />
                <h4 className="mt-3.5 font-sans font-bold text-base text-[#14231D]">
                  Transparent Structure
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-[#5B6B62]">
                  No GP fees, no carry, clear pledge terms.
                </p>
              </div>
              <div>
                <HeartHandshake size={26} className="text-[#14231D]" strokeWidth={1.8} />
                <h4 className="mt-3.5 font-sans font-bold text-base text-[#14231D]">
                  Dual Impact
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-[#5B6B62]">
                  Capital returns and scholarships, not either/or.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Quote Card without borders and reduced radius */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="flex"
          >
            <div className="flex w-full flex-col justify-between rounded-2xl bg-mint-pale p-8 sm:p-12 shadow-sm min-h-[360px]">
              <p className="font-playfair-italic text-2xl sm:text-3xl lg:text-[34px] font-normal leading-[1.3] text-[#14231D]">
                “The best time to fund a scholarship is before the first dollar of profit is realized.”
              </p>
              <div className="mt-10">
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#14231D] text-white px-8 py-3.5 font-sans font-semibold text-base shadow-sm hover:bg-[#24382e] transition-all"
                >
                  Talk to Us <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
