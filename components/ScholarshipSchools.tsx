"use client";

import Image from "next/image";
import Reveal from "./Reveal";

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
    <div className="flex h-14 w-36 sm:w-40 shrink-0 items-center justify-center">
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
    <section id="scholarships" className="section-pad bg-white">
      <div className="container-786">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — eyebrow + heading */}
          <Reveal>
            <span className="eyebrow eyebrow-dot">FUNDING</span>
            <h2 className="mt-4 font-sans text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-[#14231D] sm:text-4xl lg:text-[46px]">
              $100M in scholarships at Top 10 engineering colleges for{" "}
              <span className="font-playfair-italic font-normal text-[#32A563]">
                women and minorities.
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
