"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import Reveal from "./Reveal";

const COLUMNS = [
  {
    title: "For Investors",
    links: [
      { label: "Invest Now", href: "#solutions" },
      { label: "Portfolio", href: "#portfolio" },
    ],
  },
  {
    title: "For Donors",
    links: [
      { label: "Donate", href: "#solutions" },
      { label: "Our Impact", href: "#scholarships" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How It Works", href: "#solutions" },
      { label: "Founders", href: "#founders" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-forest pb-10 pt-20 text-white">
      <Reveal className="container-786">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Left */}
          <div>
            <Image
              src="/assets/logo.svg"
              alt="786 Ventures"
              width={120}
              height={38}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-[420px] text-[15px] leading-relaxed text-white/65">
              786 Ventures is a venture fund with a philanthropic twist,
              investing in exceptional entrepreneurs to fund STEM scholarships
              for minority and women engineers.
            </p>
          </div>

          {/* Right: nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-white/75 transition-colors hover:text-[#32A563]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal / compliance disclosure */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="max-w-4xl text-[13px] leading-relaxed text-white/40">
            786 Ventures is a venture fund with a philanthropic mission. This
            site is for informational purposes only and does not constitute an
            offer to sell or a solicitation of an offer to buy any security. 786
            Fund contributions are processed through ImpactAssets, a 501(c)(3)
            public charity (EIN XX-XXXXXXX).
          </p>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-white/50">
            © 2026 Seven Eight Six. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/60 transition-colors hover:text-[#32A563]"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="text-white/60 transition-colors hover:text-[#32A563]"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
