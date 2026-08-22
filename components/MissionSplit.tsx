"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { fadeUp } from "../lib/motion";

export default function MissionSplit() {
  return (
    <section id="mission" className="section-pad bg-cream">
      <div className="container-786">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[55fr_45fr] lg:gap-16">
          {/* Left */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={fadeUp.transition}
            className="flex flex-col"
          >
            <span className="eyebrow">OUR MISSION</span>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[42px]">
              Capital that gives back, before it&apos;s{" "}
              <span className="font-playfair text-[1.06em] italic font-normal text-mint-dark">
                asked
              </span>{" "}
              to.
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink-muted">
              We flipped the traditional philanthropic model. Instead of asking
              for returns and hoping some trickle back to good causes, 786
              pledges its impact up front, then goes to work building
              category-defining companies.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <ShieldCheck size={24} className="text-ink" strokeWidth={1.6} />
                <p className="mt-3 font-semibold text-ink">
                  Transparent Structure
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  No GP fees, no carry, clear pledge terms.
                </p>
              </div>
              <div>
                <HeartHandshake
                  size={24}
                  className="text-ink"
                  strokeWidth={1.6}
                />
                <p className="mt-3 font-semibold text-ink">Dual Impact</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  Capital returns and scholarships, not either/or.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — quote card + tall brand-color visual, aligned to left height */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="flex"
          >
            <div className="flex w-full flex-col justify-between rounded-card bg-card-beige p-8 sm:p-10">
              <p className="font-display text-2xl font-medium italic leading-snug text-ink">
                “The best time to fund a scholarship is before the first dollar
                of profit is realized.”
              </p>
              <Link href="#footer" className="btn btn-dark mt-8 self-start">
                Talk to Us <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
