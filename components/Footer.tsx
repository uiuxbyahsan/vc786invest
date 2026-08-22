"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const COLUMNS = [
  {
    title: "For Investors",
    links: [
      { label: "Invest Now", href: "#products" },
      { label: "Portfolio", href: "#portfolio" },
    ],
  },
  {
    title: "For Donors",
    links: [
      { label: "Donate", href: "#products" },
      { label: "Impact", href: "#why" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#mission" },
      { label: "Founders", href: "#founders" },
      { label: "Contact", href: "#footer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-charcoal pb-10 pt-20 text-white">
      <div className="container-786">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Left */}
          <div>
            <Image
              src="/assets/logo.svg"
              alt="786 Ventures"
              width={120}
              height={38}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-[400px] text-[15px] leading-relaxed text-white/60">
              786 Ventures is a venture fund with a philanthropic twist,
              investing in exceptional entrepreneurs to fund STEM scholarships
              for minority and women engineers.
            </p>
          </div>

          {/* Right — nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-12">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-white/70 transition-colors hover:text-mint"
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

        {/* Bottom row */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-white/50">
            © 2026 Seven Eight Six. All rights reserved.
          </p>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/60 transition-colors hover:text-mint"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
