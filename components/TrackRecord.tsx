"use client";

import Image from "next/image";
import { PlayCircle } from "lucide-react";
import Reveal from "./Reveal";

export default function TrackRecord() {
  return (
    <section className="section-pad bg-white">
      <div className="container-786">
        <Reveal>
          <span className="eyebrow">A Track Record</span>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Backed by founders who&apos;ve built before
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12 lg:mt-14">
          {/* Box 1 — Ahmed photo + quote overlay */}
          <Reveal
            delay={0}
            className="relative min-h-[320px] overflow-hidden rounded-card-lg bg-mint-pale md:col-span-7 md:min-h-[360px]"
          >
            <Image
              src="/assets/ahmed-khaishgi.png"
              alt="Ahmed Khaishgi"
              fill
              quality={90}
              className="object-cover object-[center_top]"
              sizes="(min-width: 768px) 55vw, 100vw"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,35,29,0) 35%, rgba(20,35,29,0.85) 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p className="max-w-md font-serif text-xl italic leading-snug text-white sm:text-2xl">
                &ldquo;786 backed us early and stayed aligned with our
                vision.&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-white/80">
                Ahmed Khaishgi — Founder &amp; CEO, AutoProtect
              </p>
            </div>
          </Reveal>

          {/* Box 2 — forest stat */}
          <Reveal
            delay={0.06}
            className="flex min-h-[320px] flex-col justify-between rounded-card-lg bg-forest p-8 sm:p-9 md:col-span-5 md:min-h-[360px]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Scholarship Goal
            </p>
            <div>
              <div className="font-display text-6xl font-bold leading-none tracking-tight text-lime sm:text-7xl">
                $100M+
              </div>
              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/70">
                Funded entirely by venture returns, not upfront donations.
              </p>
            </div>
          </Reveal>

          {/* Box 3 — forest, Ali quote */}
          <Reveal
            delay={0.12}
            className="flex min-h-[300px] flex-col justify-between rounded-card-lg bg-forest p-8 sm:p-9 md:col-span-5"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-white/20">
              <Image
                src="/assets/ali-moiz.png"
                alt="Ali Moiz"
                fill
                className="object-cover object-[center_top]"
                sizes="56px"
              />
            </div>
            <div>
              <p className="font-serif text-xl italic leading-snug text-white sm:text-2xl">
                &ldquo;A partner who thinks in decades, not quarters.&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-white/70">
                Ali Moiz — Founder &amp; CEO, Stonks
              </p>
            </div>
          </Reveal>

          {/* Box 4 — mint-pale, graduation image + line (larger) */}
          <Reveal
            delay={0.18}
            className="grid min-h-[300px] grid-cols-1 overflow-hidden rounded-card-lg bg-mint-pale sm:grid-cols-2 md:col-span-7"
          >
            <div className="flex flex-col justify-between p-8 sm:p-9">
              <PlayCircle
                size={40}
                strokeWidth={1.4}
                className="text-ink"
                aria-hidden
              />
              <p className="mt-8 font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
                786 is committed to closing the gender gap in engineering.
              </p>
            </div>
            <div className="relative min-h-[200px]">
              <Image
                src="/assets/banner4.png"
                alt="Scholarship recipients at graduation"
                fill
                quality={90}
                className="object-cover"
                sizes="(min-width: 768px) 30vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
