"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import FooterArt from "./FooterArt";

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      {/* Vertical pill/dot brand motif, anchored to the top-left inside the section */}
      <FooterArt
        className="pointer-events-none absolute left-4 top-0 hidden h-[420px] max-h-[70%] w-auto sm:left-8 md:block lg:left-16"
      />

      <div className="container-786 relative">
        <Reveal className="flex flex-col items-center py-24 text-center sm:py-32 lg:py-40">
          <h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            We&apos;d love to talk
            <br />
            <span className="text-mint">with you!</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Interested in learning more about this innovative initiative? Want to
            join us as a founding supporter?
          </p>
          <a
            href="https://www.786vc.com/contact-us.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-mint mt-9"
          >
            Contact us <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
