"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

type Stat = { label: string; value: string };

type Person = {
  photo: string;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  companyLogoClass: string;
  tag: string;
  quote: string;
  stats: Stat[];
  dark: boolean;
};

const PEOPLE: Person[] = [
  {
    photo: "/assets/ahmed-khaishgi.png",
    name: "Ahmed Khaishgi",
    role: "Founder & CEO",
    company: "AutoProtect",
    companyLogo: "/assets/auto-protect.svg",
    companyLogoClass: "h-6",
    tag: "Portfolio founder",
    quote:
      "786 backs founders the way an operator wishes they had been backed — present for the decisions that actually move a company, not just the term sheet.",
    stats: [
      { label: "Role", value: "Founder & CEO" },
      { label: "Prior exit", value: "$1.4B" },
      { label: "Acquired by", value: "Allstate" },
    ],
    dark: false,
  },
  {
    photo: "/assets/ali-moiz.png",
    name: "Ali Moiz",
    role: "Founder & CEO",
    company: "Stonks",
    companyLogo: "/assets/stonks-logo.svg",
    companyLogoClass: "h-6",
    tag: "Portfolio founder",
    quote:
      "They don't just write checks. 786 works alongside you through the product and fundraising moments that decide everything — the perfect partner to scale with.",
    stats: [
      { label: "Role", value: "Founder & CEO" },
      { label: "Prior exit", value: "$145M" },
      { label: "Acquired by", value: "Logitech" },
    ],
    dark: true,
  },
];

export default function OurPeople() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-founder-card]");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="founders" className="section-pad bg-white">
      <div className="container-786">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow eyebrow-dot">MEET THE TEAM BEHIND 786</span>
            <h2 className="mt-4 max-w-2xl font-sans text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-[#14231D] sm:text-5xl lg:text-[54px]">
              Backing ventures with real{" "}
              <span className="font-playfair-italic font-normal text-[#32A563]">
                operating experience.
              </span>
            </h2>
          </div>

          {/* Carousel arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous founder"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-white text-ink transition-colors hover:bg-forest hover:text-white hover:border-forest"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next founder"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-white text-ink transition-colors hover:bg-forest hover:text-white hover:border-forest"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>

        {/* Side-by-side founder cards in a snap-scroll track */}
        <Reveal delay={0.1} className="mt-12 lg:mt-14">
          <div
            ref={trackRef}
            className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0"
          >
            {PEOPLE.map((person) => (
              <article
                key={person.name}
                data-founder-card
                className={`flex shrink-0 basis-full snap-start flex-col rounded-2xl p-8 sm:p-9 sm:basis-[calc(50%-12px)] ${
                  person.dark ? "bg-forest" : "bg-mint-pale"
                }`}
              >
                {/* Header: tag + circular photo */}
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium ${
                      person.dark
                        ? "bg-[#32A563] text-white"
                        : "bg-[#14231D] text-white"
                    }`}
                  >
                    {person.tag}
                  </span>
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl sm:h-20 sm:w-20">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      quality={90}
                      sizes="80px"
                      className="object-cover object-[center_top]"
                    />
                  </div>
                </div>

                {/* Company name */}
                <h3
                  className={`mt-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl ${
                    person.dark ? "text-white" : "text-[#14231D]"
                  }`}
                >
                  {person.company}
                </h3>

                {/* Quote */}
                <p
                  className={`mt-4 text-base leading-relaxed sm:text-lg ${
                    person.dark ? "text-white/85" : "text-[#14231D]/85"
                  }`}
                >
                  “{person.quote}”
                </p>

                {/* Name + read link */}
                <div className="mt-6 flex flex-col gap-1.5">
                  <span
                    className={`font-sans text-base font-bold ${
                      person.dark ? "text-white" : "text-[#14231D]"
                    }`}
                  >
                    {person.name}
                  </span>
                  <Link
                    href="#founders"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 transition-colors ${
                      person.dark
                        ? "text-white/80 hover:text-white"
                        : "text-[#14231D]/80 hover:text-[#14231D]"
                    }`}
                  >
                    Read the story <ArrowUpRight size={15} strokeWidth={2.2} />
                  </Link>
                </div>

                {/* Stats row */}
                <div
                  className={`mt-8 grid grid-cols-3 gap-4 border-t pt-6 ${
                    person.dark ? "border-white/15" : "border-[#14231D]/10"
                  }`}
                >
                  {person.stats.map((stat) => (
                    <div key={stat.label}>
                      <p
                        className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${
                          person.dark ? "text-white/50" : "text-[#5B6B62]"
                        }`}
                      >
                        {stat.label}
                      </p>
                      <p
                        className={`mt-1.5 font-sans text-base font-bold leading-tight ${
                          person.dark ? "text-white" : "text-[#14231D]"
                        }`}
                      >
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Company wordmark */}
                <div className="mt-8 pt-2">
                  <Image
                    src={person.companyLogo}
                    alt={person.company}
                    width={180}
                    height={44}
                    className={`${person.companyLogoClass} w-auto object-contain ${
                      person.dark ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
