"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";

const CARDS = [
  {
    title: "786 Ventures",
    managed: "Managed by AngelList",
    structure: "Traditional venture fund structure",
    idealHeading: "IDEAL IF YOU WANT",
    idealList: [
      "Capital returns alongside your impact",
      "Tax deductions on future profits, not upfront",
    ],
    worksHeading: "HOW IT WORKS",
    worksSteps: [
      {
        num: "01",
        text: "Commit capital as an accredited investor",
      },
      {
        num: "02",
        text: "Capital returns as gains are realized. 100% of profits are pre-pledged to scholarships",
      },
    ],
    bottomTitle: "No GP fees or carry",
    bottomDesc:
      "Investors retain full ownership of their capital and gains. Only the fund's profits, not your principal, are pledged toward scholarships.",
    ctaLabel: "Invest Now",
    ctaHref: "#footer",
  },
  {
    title: "786 Fund",
    managed: "Managed by ImpactAssets",
    structure: "A philanthropic fund",
    idealHeading: "IDEAL IF YOU WANT",
    idealList: [
      "An immediate tax deduction",
      "100% of your gift directed to scholarships",
    ],
    worksHeading: "HOW IT WORKS",
    worksSteps: [
      {
        num: "01",
        text: "Contribute any amount with no minimum barrier",
      },
      {
        num: "02",
        text: "Returns compound the gift's impact. 100% of capital and profits go directly to scholarships",
      },
    ],
    bottomTitle: "100% goes to impact",
    bottomDesc:
      "There are no fees to donors. Every dollar contributed, and every dollar it earns, is directed toward scholarship funding.",
    ctaLabel: "Donate",
    ctaHref: "#footer",
  },
];

export default function OurSolutions() {
  return (
    <section id="solutions" className="section-pad bg-forest">
      <div className="container-786">
        <Reveal className="max-w-3xl">
          <span className="eyebrow eyebrow-dot text-white/70">JOIN US</span>
          <h2 className="mt-4 font-sans text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.1] tracking-[-0.02em] text-white">
            Purpose-built capital for founders and the{" "}
            <span className="font-playfair-italic font-normal text-[#32A563]">
              mission behind them.
            </span>
          </h2>
        </Reveal>

        {/* 2 Comparison Cards matching reference */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.title}
              as="div"
              delay={i * 0.08}
              className="card-hover flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-7 sm:p-9 shadow-sm"
            >
              <div>
                {/* 1. Header Block */}
                <div>
                  <h3 className="font-sans text-2xl sm:text-3xl font-medium tracking-tight text-[#14231D]">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#5B6B62]">
                    {card.managed}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#32A563]">
                    {card.structure}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-7 border-t border-[#E5E7EB]" />

                {/* 2. IDEAL IF YOU WANT Block */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B6B62]">
                    {card.idealHeading}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {card.idealList.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="shrink-0 text-[#32A563] mt-0.5"
                          strokeWidth={2.2}
                        />
                        <span className="text-sm sm:text-[15px] font-medium text-[#14231D] leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="my-7 border-t border-[#E5E7EB]" />

                {/* 3. HOW IT WORKS Block */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B6B62]">
                    {card.worksHeading}
                  </p>
                  <div className="mt-4 space-y-4">
                    {card.worksSteps.map((step) => (
                      <div key={step.num} className="flex items-start gap-3.5">
                        <span className="font-mono text-sm sm:text-base font-bold text-[#14231D] shrink-0">
                          {step.num}
                        </span>
                        <p className="text-sm sm:text-[15px] text-[#14231D] leading-snug">
                          {step.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-7 border-t border-[#E5E7EB]" />

                {/* 4. Bottom Feature Text */}
                <div>
                  <h4 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#14231D]">
                    {card.bottomTitle}
                  </h4>
                  <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-[#5B6B62]">
                    {card.bottomDesc}
                  </p>
                </div>
              </div>

              {/* 5. Mint Green CTA Button */}
              <div className="mt-8 pt-2">
                <Link
                  href={card.ctaHref}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#32A563] py-4 text-center font-sans text-sm sm:text-base font-semibold text-white transition-all hover:bg-[#288751]"
                >
                  {card.ctaLabel} <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
