"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PillCollage from "./PillCollage";
import { fadeUp } from "../lib/motion";

export default function Approach() {
  return (
    <section id="approach" className="section-pad bg-cream pt-0">
      <div className="container-786">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
          {/* Left (content) */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={fadeUp.transition}
            >
              <span className="eyebrow">OUR APPROACH</span>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-4xl">
                We back founders the way we&apos;d want to be{" "}
                <span className="font-playfair text-[1.06em] italic font-normal text-mint-dark">
                  backed
                </span>
                .
              </h2>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink-muted">
                786 doesn&apos;t just write checks. We work alongside founders
                through the moments that matter, from product decisions and
                hiring to fundraising strategy, because the returns that fund
                scholarships only happen if the companies we back actually
                succeed.
              </p>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="mt-9"
            >
              <Link href="#products" className="btn btn-dark">
                Become an Investor <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right (image) */}
          <div className="order-1 lg:order-2">
            <PillCollage
              src="/assets/hero-img2.png"
              alt="The 786 team collaborating with founders"
              width={579}
              height={456}
              className="mx-auto max-w-md lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
