"use client";

import Reveal from "./Reveal";

const STEPS = [
  {
    stepNum: "1",
    title: "Choose your path",
    description:
      "Decide between 786 Ventures for capital returns or the 786 Fund for a direct philanthropic gift. Both funnel into the same mission.",
  },
  {
    stepNum: "2",
    title: "Capital deploys to founders",
    description:
      "Your investment or donation is deployed into exceptional startups, co-invested alongside firms like a16z and Bain Capital.",
  },
  {
    stepNum: "3",
    title: "Returns fund scholarships",
    description:
      "Profits generated are directed to need-based STEM scholarships for minority and women engineering students.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="how-it-works" className="section-pad bg-[#FAF8F5]">
      <div className="container-786">
        <Reveal className="max-w-3xl">
          <span className="eyebrow eyebrow-dot">HOW 786 WORKS</span>
          <h2 className="mt-4 font-sans text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.08] tracking-[-0.02em] text-[#14231D]">
            Three steps, one{" "}
            <span className="font-playfair-italic font-normal text-[#32A563]">
              mission.
            </span>
          </h2>
        </Reveal>

        {/* 3 Step Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {STEPS.map((step, idx) => (
            <Reveal
              key={step.stepNum}
              delay={idx * 0.1}
              className="flex"
            >
              <div className="card-hover relative flex w-full flex-col overflow-hidden rounded-2xl bg-white p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#EBECE9]/80 min-h-[440px] sm:min-h-[500px]">
                {/* Content — title + description at top */}
                <div className="relative z-10">
                  <h3 className="font-sans text-2xl sm:text-[28px] font-medium leading-tight tracking-tight text-[#14231D]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-[26ch] text-sm sm:text-base leading-relaxed text-[#5B6B62]">
                    {step.description}
                  </p>
                </div>

                {/* Giant faint watermark number anchored bottom-left */}
                <span className="pointer-events-none absolute -bottom-14 left-6 sm:left-8 z-0 select-none font-sans text-[240px] sm:text-[300px] font-light leading-none tracking-tight text-[#14231D]/[0.045]">
                  {step.stepNum}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
