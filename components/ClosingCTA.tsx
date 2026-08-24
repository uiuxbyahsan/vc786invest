"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ClosingCTA() {
  return (
    <section className="section-pad bg-forest">
      <div className="container-786">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-sans text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[60px]">
            Ready to Invest?{" "}
            <span className="font-playfair-italic font-normal text-[#32A563]">
              Let&apos;s Talk.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-white/75">
            Interested in learning more about this initiative, or want to join
            us as a founding supporter?
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Link
              href="https://www.786vc.com/contact-us.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#32A563] text-white px-8 py-4 font-sans font-semibold text-base shadow-sm hover:bg-[#288751] transition-all min-w-[200px]"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
