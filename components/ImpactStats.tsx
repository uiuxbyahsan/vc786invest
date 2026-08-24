"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PillCollage from "./PillCollage";
import { fadeUp } from "../lib/motion";

export default function ImpactStats() {
  return (
    <section
      id="impact"
      className="section-pad relative overflow-hidden"
      style={{
        background:
          "linear-gradient(155deg, #0F1512 0%, #14231D 45%, #1C3A2C 100%)",
      }}
    >
      {/* Soft mint glow for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 120% at 80% 10%, rgba(127,224,180,0.16), transparent 55%)",
        }}
      />

      <div className="container-786 relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-16">
          {/* Left — graduate pill collage */}
          <PillCollage
            src="/assets/schloshop.png"
            alt="Scholarship recipients at graduation"
            width={1536}
            height={1024}
            className="mx-auto max-w-md lg:max-w-none"
          />

          {/* Right — single merged stat block */}
          <div>
            <motion.span
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={fadeUp.transition}
              className="eyebrow !text-mint-light"
            >
              OUR IMPACT
            </motion.span>

            <motion.h3
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mt-6 max-w-xl font-display text-2xl font-bold leading-snug text-white sm:text-[28px]"
            >
              All returns generated support need-based scholarships at top
              engineering programs. Minimum 50% of scholarship recipients are{" "}
              <span className="text-mint">women</span>.
            </motion.h3>
            <motion.p
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/70"
            >
              Every dollar 786 earns funds a scholarship, not just a return. 786
              is committed to closing the gender gap in engineering.
            </motion.p>
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={{ ...fadeUp.transition, delay: 0.25 }}
              className="mt-8"
            >
              <Link href="#solutions" className="btn btn-mint">
                Invest Now <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
