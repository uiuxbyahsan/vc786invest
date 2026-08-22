"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CoInvestors() {
  return (
    <section id="co-investors" className="section-pad bg-cream pt-0">
      <div className="container-786">
        <Reveal>
          <span className="eyebrow">CO-INVESTORS</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            VCs investing in our{" "}
            <span className="font-playfair text-[1.06em] italic font-normal text-mint-dark">
              portfolio
            </span>
            .
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1 — a16z */}
          <Reveal
            as="article"
            delay={0}
            className="flex flex-col rounded-card border border-hairline/70 bg-white p-8 sm:p-10"
          >
            <Image
              src="/assets/adreesen.svg"
              alt="a16z (Andreessen Horowitz)"
              width={200}
              height={40}
              className="h-6 w-auto max-w-[55%] object-contain object-left"
            />
            <p className="mt-8 font-display text-2xl font-bold leading-snug text-ink">
              Series A &amp; growth investing
            </p>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-muted">
              786 co-invests alongside a16z on select portfolio companies,
              combining deep venture experience with shared conviction in
              exceptional founders.
            </p>
            <Link href="#products" className="btn btn-dark mt-8 self-start">
              Invest Now <ArrowRight size={16} />
            </Link>
          </Reveal>

          {/* Card 2 — Bain Capital */}
          <Reveal
            as="article"
            delay={0.08}
            className="flex flex-col rounded-card border border-hairline/70 bg-white p-8 sm:p-10"
          >
            <Image
              src="/assets/brain-capital-logo.svg"
              alt="Bain Capital"
              width={200}
              height={40}
              className="h-8 w-auto max-w-[55%] object-contain object-left"
            />
            <p className="mt-8 font-display text-2xl font-bold leading-snug text-ink">
              Global venture capital
            </p>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-muted">
              786 co-invests alongside Bain Capital on select portfolio
              companies, pairing global scale with a shared commitment to backing
              category-defining founders.
            </p>
            <Link href="#products" className="btn btn-dark mt-8 self-start">
              Invest Now <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
