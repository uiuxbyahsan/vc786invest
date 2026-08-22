"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PillCollage from "./PillCollage";
import { fadeUp } from "../lib/motion";

export default function ImpactStats() {
  return (
    <section id="impact" className="section-pad bg-cream">
      <div className="container-786">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-16">
          {/* Left — graduate pill collage */}
          <PillCollage
            src="/assets/banner4.png"
            alt="A scholarship recipient at graduation"
            width={369}
            height={348}
            className="mx-auto max-w-sm lg:max-w-none"
          />

          {/* Right — single merged stat block */}
          <div>
            <motion.span
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={fadeUp.transition}
              className="eyebrow"
            >
              OUR IMPACT
            </motion.span>

            <motion.h3
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mt-6 max-w-xl font-display text-2xl font-extrabold leading-snug text-ink sm:text-[28px]"
            >
              All returns generated support need-based scholarships at top
              engineering programs. Minimum 50% of scholarship recipients are{" "}
              <span className="font-playfair text-[1.06em] italic font-normal text-mint-dark">
                women
              </span>
              .
            </motion.h3>
            <motion.p
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="mt-5 max-w-lg text-[17px] leading-relaxed text-ink-muted"
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
              <Link href="#products" className="btn btn-dark">
                Invest Now <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
