"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const COMPANIES = [
  {
    logo: "/assets/auto-protect.svg",
    logoAlt: "AutoProtect",
  },
  {
    logo: "/assets/stonks-logo.svg",
    logoAlt: "Stonks",
  },
  {
    logo: "/assets/adreesen.svg",
    logoAlt: "Andreessen Horowitz",
  },
  {
    logo: "/assets/brain-capital-logo.svg",
    logoAlt: "Bain Capital Ventures",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad bg-mint-pale">
      <div className="container-786">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow eyebrow-dot">OUR PORTFOLIO</span>
            <h2 className="mt-4 font-sans text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.08] tracking-[-0.02em] text-[#14231D]">
              VCs investing in our{" "}
              <span className="font-playfair-italic font-normal text-[#32A563]">
                portfolio.
              </span>
            </h2>
          </div>
          <Link
            href="#solutions"
            className="inline-flex items-center justify-center rounded-full bg-[#14231D] text-white px-7 py-3.5 text-sm sm:text-base font-semibold shadow-none hover:bg-[#24382e] transition-all self-start sm:self-auto"
          >
            More Portfolio
          </Link>
        </Reveal>

        {/* 4 Clean Square Cards - Zero Border, Zero Shadow, Zero Hover Shadow */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANIES.map((c, i) => (
            <Reveal
              key={c.logoAlt}
              as="div"
              delay={i * 0.07}
              className="flex"
            >
              <div className="card-hover flex aspect-square w-full items-center justify-center rounded-2xl bg-white p-8 sm:p-10 border-0 shadow-none">
                <Image
                  src={c.logo}
                  alt={c.logoAlt}
                  width={240}
                  height={80}
                  className="h-10 sm:h-12 w-auto max-w-[78%] object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
