"use client";

import Image from "next/image";
import { Star, Pause } from "lucide-react";
import Reveal from "./Reveal";

type Testimonial = {
  type: "review" | "photo";
  name: string;
  role: string;
  quote: string;
  rating?: number;
  avatar?: string;
  avatarPos?: string;
  initials?: string;
  logo?: string;
  logoAlt?: string;
  logoClass?: string;
  image?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    type: "review",
    name: "Ahmed Khaishgi",
    role: "Founder & CEO",
    avatar: "/assets/ahmed-khaishgi.png",
    logo: "/assets/auto-protect.svg",
    logoAlt: "AutoProtect",
    logoClass: "h-5",
    rating: 5,
    quote:
      "786 made our capital grow and directed profits exactly where they promised. It feels good knowing our success directly funds scholarships.",
  },
  {
    type: "photo",
    name: "Sarah L.",
    role: "Stanford Scholar",
    image: "/assets/our-impact.jpg",
    quote:
      "The scholarship from 786 let our students focus 100% on their engineering research without debt. They are closing the real access gap.",
  },
  {
    type: "review",
    name: "Ali Moiz",
    role: "Founder & CEO",
    avatar: "/assets/ali-moiz.png",
    logo: "/assets/stonks-logo.svg",
    logoAlt: "Stonks",
    logoClass: "h-5",
    rating: 5,
    quote:
      "786 doesn't just write checks. They work alongside us through critical product and fundraising moments — the perfect partner to scale with.",
  },
  {
    type: "review",
    name: "Maya Chen",
    role: "Angel Investor",
    avatar: "/assets/about-pill-2.jpg",
    avatarPos: "32% 30%",
    rating: 5,
    quote:
      "The model just makes sense: back great founders, and the upside funds scholarships. My capital is finally doing two jobs at once.",
  },
  {
    type: "photo",
    name: "David O.",
    role: "786 Limited Partner",
    image: "/assets/our-approach.jpg",
    quote:
      "Transparent structure, no games with fees, and a mission I can stand behind. This is how modern venture should feel.",
  },
  {
    type: "review",
    name: "Priya N.",
    role: "Scholarship Recipient",
    avatar: "/assets/about-pill-1.jpg",
    avatarPos: "40% 32%",
    rating: 5,
    quote:
      "786's scholarship let me finish my engineering degree debt-free. I'm now building the career I once only dreamed about.",
  },
];

function ReviewCard({ item }: { item: Testimonial }) {
  return (
    <div className="flex h-[400px] w-[320px] shrink-0 flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_12px_34px_-16px_rgba(20,35,29,0.22)] sm:w-[400px] sm:p-7">
      {/* Top: profile + company logo */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {item.avatar ? (
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-mint-pale">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                sizes="48px"
                className="object-cover"
                style={item.avatarPos ? { objectPosition: item.avatarPos } : undefined}
              />
            </div>
          ) : (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-mint-pale font-sans text-base font-bold text-[#32A563]">
              {item.initials}
            </div>
          )}
          <div>
            <h4 className="font-sans text-base font-bold leading-tight text-[#14231D]">
              {item.name}
            </h4>
            <p className="text-xs font-medium text-[#5B6B62]">{item.role}</p>
          </div>
        </div>
        {item.logo && (
          <Image
            src={item.logo}
            alt={item.logoAlt!}
            width={140}
            height={32}
            className={`${item.logoClass} w-auto shrink-0 object-contain`}
          />
        )}
      </div>

      {/* Bottom: review box */}
      <div className="rounded-xl bg-[#F8F9FA] p-5">
        <div className="flex items-center gap-1 text-[#32A563]">
          {[...Array(item.rating ?? 5)].map((_, i) => (
            <Star key={i} size={15} fill="currentColor" />
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[#14231D]/80">
          “{item.quote}”
        </p>
      </div>
    </div>
  );
}

function PhotoCard({ item }: { item: Testimonial }) {
  return (
    <div className="relative flex h-[400px] w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-forest p-6 shadow-sm sm:w-[400px] sm:p-7">
      <Image
        src={item.image!}
        alt={item.name}
        fill
        sizes="400px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Pause badge */}
      <div className="relative z-10 self-end">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-ink shadow-sm backdrop-blur-sm">
          <Pause size={16} fill="currentColor" />
        </div>
      </div>

      {/* Quote + name */}
      <div className="relative z-10">
        <p className="text-[15px] leading-relaxed text-white/90">
          “{item.quote}”
        </p>
        <div className="mt-4">
          <span className="font-sans text-sm font-bold text-[#4ADE80]">
            {item.name}
          </span>
          <span className="ml-2 text-xs font-medium text-white/70">
            {item.role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const edgeMask =
    "linear-gradient(to right, transparent 0, black 5%, black 95%, transparent 100%)";

  return (
    <section id="testimonials" className="section-pad bg-[#F8F9FA]">
      <div className="container-786">
        <Reveal className="max-w-3xl">
          <span className="eyebrow eyebrow-dot">TESTIMONIALS</span>
          <h2 className="mt-4 font-sans text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.08] tracking-[-0.02em] text-[#14231D]">
            See How We&apos;ve Helped Others{" "}
            <span className="font-playfair-italic font-normal text-[#32A563]">
              Grow Their Impact.
            </span>
          </h2>
        </Reveal>
      </div>

      {/* Auto-scrolling testimonial marquee */}
      <Reveal delay={0.1} className="mt-12 sm:mt-16">
        <div
          className="marquee-viewport relative overflow-hidden"
          style={{ maskImage: edgeMask, WebkitMaskImage: edgeMask }}
        >
          <div
            className="marquee-track flex items-stretch gap-6 py-2"
            style={{ animationDuration: "48s" }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) =>
              item.type === "photo" ? (
                <PhotoCard key={i} item={item} />
              ) : (
                <ReviewCard key={i} item={item} />
              )
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
