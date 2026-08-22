"use client";

import Image from "next/image";
import Reveal from "./Reveal";

// Top engineering programs where scholarship recipients study.
// Logos split from the provided collage into /public/assets/schools.
const SCHOOLS = [
  { name: "MIT", file: "mit" },
  { name: "UT Austin", file: "ut-austin" },
  { name: "Harvard", file: "harvard" },
  { name: "UC Berkeley", file: "berkeley" },
  { name: "University of Michigan", file: "michigan" },
  { name: "University of Illinois", file: "illinois" },
  { name: "Stanford", file: "stanford" },
  { name: "Georgia Tech", file: "georgia-tech" },
  { name: "Purdue", file: "purdue" },
  { name: "Caltech", file: "caltech" },
  { name: "Carnegie Mellon", file: "carnegie-mellon" },
  { name: "Cornell", file: "cornell" },
];

function Logo({ name, file }: { name: string; file: string }) {
  return (
    <div className="flex h-14 w-40 shrink-0 items-center justify-center">
      <Image
        src={`/assets/schools/${file}.png`}
        alt={name}
        width={180}
        height={70}
        className="h-9 w-auto max-w-full object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}

export default function ScholarshipSchools() {
  const edgeMask =
    "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)";

  return (
    <section id="scholarships" className="section-pad bg-cream">
      <div className="container-786">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — eyebrow + heading */}
          <Reveal>
            <span className="eyebrow">SCHOLARSHIPS</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.18] tracking-tight text-ink sm:text-4xl">
              $100M in scholarships at Top 10 engineering colleges for{" "}
              <span className="font-playfair text-[1.06em] italic font-normal text-mint-dark">
                women and minorities
              </span>
            </h2>
          </Reveal>

          {/* Right — auto-scrolling logo marquee */}
          <Reveal delay={0.1}>
            <div
              className="marquee-viewport relative overflow-hidden"
              style={{ maskImage: edgeMask, WebkitMaskImage: edgeMask }}
            >
              <div className="marquee-track flex items-center gap-4 py-2">
                {[...SCHOOLS, ...SCHOOLS].map((s, i) => (
                  <Logo key={i} name={s.name} file={s.file} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
