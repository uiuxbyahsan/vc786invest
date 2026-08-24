"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../lib/motion";

export default function Approach() {
  return (
    <section id="approach" className="section-pad bg-white">
      <div className="container-786">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[50fr_50fr] lg:gap-16">
          {/* Left Column: Business Meeting Image */}
          <div className="order-1 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative aspect-[4/3] sm:aspect-[16/13] w-full overflow-hidden rounded-2xl shadow-sm bg-gray-100"
            >
              <Image
                src="/assets/our-approach.jpg"
                alt="786 team collaborating with founders"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="img-zoom object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Right Column: Text Content */}
          <div className="order-2 lg:order-2">
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={fadeUp.transition}
            >
              <span className="eyebrow eyebrow-dot">OUR APPROACH</span>
              <h2 className="mt-4 max-w-xl font-sans text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.08] tracking-[-0.02em] text-[#14231D]">
                We back founders the way we&apos;d want to be{" "}
                <span className="font-playfair-italic font-normal text-[#32A563]">
                  backed.
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-[16px] sm:text-[17px] leading-relaxed text-[#5B6B62]">
                786 doesn&apos;t just write checks. We work alongside founders
                through the moments that matter, from product decisions and
                hiring to fundraising strategy, because the returns that fund
                scholarships only happen if the companies we back actually
                succeed.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="mt-9"
            >
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#14231D] text-white px-8 py-4 font-sans font-semibold text-sm sm:text-base shadow-sm hover:bg-[#24382e] transition-all"
              >
                Become an Investor <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
