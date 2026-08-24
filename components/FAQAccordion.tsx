"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Do I need to be an accredited investor to participate?",
    a: "786 Ventures is open to accredited or qualified investors. The 786 Fund, however, is open to anyone through donor-advised funds and philanthropic vehicles, with no accreditation required.",
  },
  {
    q: "How does 786 differ from a standard donation?",
    a: "Your capital is invested in high-growth startups first. The returns generated, not just your initial gift, are what fund scholarships, multiplying the long-term impact of your contribution.",
  },
  {
    q: "How are scholarship recipients selected?",
    a: "Recipients are selected based on financial need at Top 10 engineering programs in the US, with a minimum of 50% of recipients being female students.",
  },
  {
    q: "What's the minimum investment or donation?",
    a: "786 Ventures follows standard accredited investor minimums via AngelList. The 786 Fund has a low minimum and is open to all via ImpactAssets.",
  },
  {
    q: "Is my contribution tax-deductible?",
    a: "Contributions to the 786 Fund are tax-deductible at the time of donation. 786 Ventures investors receive tax deductions on 100% of future profits pledged to scholarships.",
  },
  {
    q: "Can I choose which fund my capital supports?",
    a: "Yes, you can choose between 786 Ventures (investment-first) or the 786 Fund (donation-first) depending on your goals.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-cream">
      <div className="container-786">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[30fr_70fr] lg:gap-16">
          {/* Left — sticky heading */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow eyebrow-dot">FAQ</span>
              <h2 className="mt-4 font-sans text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[54px]">
                Frequently
                <br />
                asked
                <br />
                <span className="font-playfair-italic font-normal text-[#32A563]">
                  questions.
                </span>
              </h2>
            </div>
          </Reveal>

          {/* Right — accordion */}
          <Reveal delay={0.08}>
            <div>
              {FAQS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-t border-hairline last:border-b">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    >
                      <span className="text-lg font-medium text-ink">
                        {item.q}
                      </span>
                      <Plus
                        size={22}
                        strokeWidth={1.8}
                        className={`shrink-0 text-ink transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-7 pt-0 text-[15px] leading-relaxed text-ink-muted">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
