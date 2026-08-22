"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="section-pad bg-cream">
      <div className="container-786">
        <Reveal>
          <span className="eyebrow">OUR PORTFOLIO</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Our{" "}
            <span className="font-playfair text-[1.06em] italic font-normal text-mint-dark">
              Portfolio
            </span>
            .
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1 — AutoProtect */}
          <Reveal
            as="article"
            delay={0}
            className="flex flex-col rounded-card border border-hairline/70 bg-white p-8 sm:p-10"
          >
            <Image
              src="/assets/auto-protect.svg"
              alt="AutoProtect"
              width={200}
              height={40}
              className="h-8 w-auto max-w-[60%] object-contain object-left"
            />
            <p className="mt-8 font-display text-2xl font-bold leading-snug text-ink">
              Vehicle protection plans
            </p>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-muted">
              Founded by Ahmed Khaishgi (ex-SquareTrade, acquired by Allstate
              for $1.4B). Modernizing auto protection for the digital age.
            </p>
            <a
              href="https://www.autoprotect.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark mt-8 self-start"
            >
              Visit AutoProtect <ArrowRight size={16} />
            </a>
          </Reveal>

          {/* Card 2 — Stonks */}
          <Reveal
            as="article"
            delay={0.08}
            className="flex flex-col rounded-card border border-hairline/70 bg-white p-8 sm:p-10"
          >
            <Image
              src="/assets/stonks-logo.svg"
              alt="Stonks"
              width={200}
              height={40}
              className="h-8 w-auto max-w-[60%] object-contain object-left"
            />
            <p className="mt-8 font-display text-2xl font-bold leading-snug text-ink">
              Investing made simple
            </p>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-muted">
              Founded by Ali Moiz (ex-StreamLabs, acquired by Logitech for
              $145M). Making markets accessible to everyone.
            </p>
            <a
              href="https://www.stonks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark mt-8 self-start"
            >
              Visit Stonks <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
