"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3">
      <Check
        size={18}
        strokeWidth={2.5}
        className="mt-0.5 shrink-0 text-mint-dark"
      />
      <span className="text-[15px] leading-relaxed text-ink">{children}</span>
    </li>
  );
}

function NumberedItem({ n, children }: { n: number; children: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="font-display text-sm font-bold text-ink-muted">
        {String(n).padStart(2, "0")}
      </span>
      <span className="text-[15px] leading-relaxed text-ink">{children}</span>
    </li>
  );
}

export default function ProductsComparison() {
  const divider = "border-t border-hairline";

  return (
    <section id="products" className="section-pad bg-cream">
      <div className="container-786">
        <Reveal className="text-center">
          <span className="eyebrow mx-auto justify-center">JOIN US</span>
          <p className="mx-auto mt-4 max-w-2xl font-display text-2xl font-bold text-ink sm:text-3xl">
            You can invest with us via our
            <br />
            Venture Fund or Donor Advised{" "}
            <span className="font-playfair text-[1.06em] italic font-normal text-mint-dark">
              Fund
            </span>
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* LEFT CARD — 786 Ventures */}
          <Reveal
            as="article"
            className="flex flex-col overflow-hidden rounded-card border border-hairline bg-white"
          >
            <div className="p-8 sm:p-10">
              <h3 className="font-display text-[28px] font-bold text-ink">
                786 Ventures
              </h3>
              <p className="mt-1 text-sm text-ink-muted">Managed by AngelList</p>
              <p className="mt-2 text-sm font-medium text-mint-dark">
                Traditional venture fund structure
              </p>
            </div>

            <div className={`${divider} p-8 sm:p-10`}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                Ideal if you want
              </p>
              <ul className="mt-5 space-y-3">
                <CheckItem>Capital returns alongside your impact</CheckItem>
                <CheckItem>
                  Tax deductions on future profits, not upfront
                </CheckItem>
              </ul>
            </div>

            <div className={`${divider} p-8 sm:p-10`}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                How it works
              </p>
              <ul className="mt-5 space-y-3">
                <NumberedItem n={1}>
                  Commit capital as an accredited investor
                </NumberedItem>
                <NumberedItem n={2}>
                  Capital returns as gains are realized. 100% of profits are
                  pre-pledged to scholarships
                </NumberedItem>
              </ul>
            </div>

            <div className={`${divider} p-8 sm:p-10`}>
              <p className="font-display text-xl font-bold text-ink">
                No GP fees or carry
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                Investors retain full ownership of their capital and gains. Only
                the fund&apos;s profits, not your principal, are pledged toward
                scholarships.
              </p>
            </div>

            <div className="mt-auto p-8 pt-0 sm:p-10 sm:pt-0">
              <Link href="#footer" className="btn btn-mint w-full justify-center">
                Invest Now <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          {/* RIGHT CARD — 786 Fund */}
          <Reveal
            as="article"
            delay={0.08}
            className="flex flex-col overflow-hidden rounded-card border border-hairline bg-white"
          >
            <div className="p-8 sm:p-10">
              <h3 className="font-display text-[28px] font-bold text-ink">
                786 Fund
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                Managed by ImpactAssets
              </p>
              <p className="mt-2 text-sm font-medium text-mint-dark">
                A philanthropic fund
              </p>
            </div>

            <div className={`${divider} p-8 sm:p-10`}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                Ideal if you want
              </p>
              <ul className="mt-5 space-y-3">
                <CheckItem>An immediate tax deduction</CheckItem>
                <CheckItem>100% of your gift directed to scholarships</CheckItem>
              </ul>
            </div>

            <div className={`${divider} p-8 sm:p-10`}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                How it works
              </p>
              <ul className="mt-5 space-y-3">
                <NumberedItem n={1}>
                  Contribute any amount with no minimum barrier
                </NumberedItem>
                <NumberedItem n={2}>
                  Returns compound the gift&apos;s impact. 100% of capital and
                  profits go directly to scholarships
                </NumberedItem>
              </ul>
            </div>

            <div className={`${divider} p-8 sm:p-10`}>
              <p className="font-display text-xl font-bold text-ink">
                100% goes to impact
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                There are no fees to donors. Every dollar contributed, and every
                dollar it earns, is directed toward scholarship funding.
              </p>
            </div>

            <div className="mt-auto p-8 pt-0 sm:p-10 sm:pt-0">
              <Link href="#footer" className="btn btn-mint w-full justify-center">
                Donate <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
