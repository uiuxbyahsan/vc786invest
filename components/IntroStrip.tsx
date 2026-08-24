"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function IntroStrip() {
  return (
    <section className="border-b border-hairline/60 bg-white">
      <div className="container-786 py-16 sm:py-20 lg:py-24">
        <motion.p
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
          className="max-w-4xl font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl lg:text-[34px] lg:leading-[1.25]"
        >
          We&apos;re eliminating the friction between capital and impact,
          helping founders build something bigger while funding the next
          generation of engineers.
        </motion.p>
      </div>
    </section>
  );
}
