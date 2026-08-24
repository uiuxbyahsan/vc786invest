"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";
import { fadeUp } from "../lib/motion";

type Stat = {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 2022, label: "Founded" },
  { value: 2, label: "Portfolio Companies" },
  { prefix: "$", value: 100, suffix: "M", label: "Scholarship Goal" },
  { value: 50, suffix: "%", label: "Women Recipients" },
];

export default function CoreStats() {
  return (
    <section
      aria-label="786 Ventures by the numbers"
      className="bg-forest py-20 sm:py-24 lg:py-28"
    >
      <div className="container-786">
        <motion.p
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
          className="eyebrow !text-white/60 tracking-[0.18em]"
        >
          THE NUMBERS
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-xl bg-white/[0.04] p-8 sm:p-9 min-h-[170px]"
            >
              <div className="font-display text-5xl font-bold leading-none tracking-tight text-lime sm:text-6xl lg:text-[64px]">
                {stat.prefix}
                <CountUp to={stat.value} />
                {stat.suffix}
              </div>
              <div className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
