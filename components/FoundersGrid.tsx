"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

// Bottom overlay keeps the text legible over the natural-color portrait.
const OVERLAY =
  "linear-gradient(to top, rgba(15,21,18,0.94) 0%, rgba(15,21,18,0.72) 28%, rgba(15,21,18,0.28) 52%, rgba(15,21,18,0) 74%)";

function FounderPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      quality={90}
      className="object-cover object-[center_top]"
    />
  );
}

export default function FoundersGrid() {
  return (
    <section id="founders" className="section-pad bg-cream">
      <div className="container-786">
        <Reveal>
          <span className="eyebrow">FOUNDERS WE&apos;RE BACKING</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Operators who&apos;ve done it{" "}
            <span className="font-playfair text-[1.06em] italic font-normal text-mint-dark">
              before
            </span>
            .
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 — Ahmed */}
          <Reveal
            as="article"
            className="relative aspect-[3/4] overflow-hidden rounded-card bg-charcoal"
          >
            <FounderPhoto src="/assets/ahmed-khaishgi.png" alt="Ahmed Khaishgi" />
            <div className="absolute inset-0" style={{ background: OVERLAY }} />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="font-display text-lg font-bold leading-snug">
                SquareTrade Founder &amp; CEO (Acq. by Allstate, $1.4B). Harvard
                Business MBA.
              </p>
              <div className="mt-4 border-t border-white/15 pt-4 leading-tight">
                <p className="text-sm font-bold">Ahmed Khaishgi</p>
                <p className="text-xs text-white/60">
                  Founder &amp; CEO, AutoProtect
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 2 — Ali */}
          <Reveal
            as="article"
            delay={0.08}
            className="relative aspect-[3/4] overflow-hidden rounded-card bg-charcoal"
          >
            <FounderPhoto src="/assets/ali-moiz.png" alt="Ali Moiz" />
            <div className="absolute inset-0" style={{ background: OVERLAY }} />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="font-display text-lg font-bold leading-snug">
                StreamLabs Founder &amp; CEO (Acq. by Logitech, $145M). Williams
                College.
              </p>
              <div className="mt-4 border-t border-white/15 pt-4 leading-tight">
                <p className="text-sm font-bold">Ali Moiz</p>
                <p className="text-xs text-white/60">Founder &amp; CEO, Stonks</p>
              </div>
            </div>
          </Reveal>

          {/* Card 3 — Become our next founder (CTA) */}
          <Reveal
            as="article"
            delay={0.16}
            className="relative aspect-[3/4] overflow-hidden rounded-card"
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(165deg, #7FE0B4 0%, #3FA87A 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-25 mix-blend-soft-light"
              style={{
                backgroundImage: "url('/assets/hero-texture.avif')",
                backgroundSize: "cover",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="font-display text-2xl font-bold leading-snug">
                Become Our Next Founder
              </p>
              <p className="mt-2 text-sm text-white/80">
                We&apos;re always looking for exceptional founders.
              </p>
              <Link href="#footer" className="btn btn-white mt-5">
                Get in touch <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
