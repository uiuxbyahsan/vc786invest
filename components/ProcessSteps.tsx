"use client";

import Reveal from "./Reveal";

const STEPS = [
  {
    n: "1",
    title: "Choose your path",
    body: "Decide between 786 Ventures for capital returns or the 786 Fund for a direct philanthropic gift. Both funnel into the same mission.",
  },
  {
    n: "2",
    title: "Capital deploys to founders",
    body: "Your investment or donation is deployed into exceptional startups, co-invested alongside firms like a16z and Bain Capital.",
  },
  {
    n: "3",
    title: "Returns fund scholarships",
    body: "Profits generated are directed to need-based STEM scholarships for minority and women engineering students.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="how" className="section-pad bg-cream">
      <div className="container-786">
        <Reveal>
          <span className="eyebrow">HOW 786 WORKS</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Three steps, one{" "}
            <span className="font-playfair text-[1.06em] italic font-normal text-mint-dark">
              mission
            </span>
            .
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal
              as="article"
              key={step.n}
              delay={i * 0.08}
              className="relative min-h-[520px] overflow-hidden rounded-card bg-white py-14 pl-11 pr-11 sm:py-16 sm:pl-12 sm:pr-14"
            >
              {/* Text block near the top */}
              <div className="relative z-10">
                <h3 className="font-display text-[26px] font-bold leading-snug text-ink">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-[26ch] text-[15px] leading-[1.6] text-ink-muted">
                  {step.body}
                </p>
              </div>

              {/* Dominant ghost numeral, bottom-left, heavy weight, cropped past the edge */}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-20 left-9 select-none font-display text-[320px] font-extrabold leading-none text-mint/10 sm:left-11"
              >
                {step.n}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
