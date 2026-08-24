"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Simple inline nav (VentCapital pattern): logo left, links center, dark
// rounded CTA right. No full-screen overlay — mobile collapses to a plain
// dropdown panel.
const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "How It Works", href: "#solutions" },
  { label: "Founders", href: "#founders" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[80]">
      <div
        className={`transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-hairline/70 bg-white/90 backdrop-blur"
            : "border-b border-transparent"
        }`}
      >
        <nav className="container-786">
          <div className="flex h-[68px] items-center justify-between gap-4">
            {/* Left: logo */}
            <Link
              href="#top"
              className="flex items-center"
              aria-label="786 Ventures home"
            >
              <Image
                src="/assets/logo.svg"
                alt="786 Ventures"
                width={110}
                height={34}
                className="h-7 w-auto"
                priority
              />
            </Link>

            {/* Center: page links */}
            <ul className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] font-medium text-ink/80 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right: CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              <Link
                href="#solutions"
                className="btn-arrow btn-arrow--sm group hidden sm:inline-flex"
              >
                Invest Now
                <span className="btn-arrow__badge">
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
              >
                <span className="relative block h-4 w-5" aria-hidden>
                  <span
                    className={`absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                      open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[3px]"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                      open
                        ? "top-1/2 -translate-y-1/2 -rotate-45"
                        : "bottom-[3px]"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-b border-hairline/70 bg-white md:hidden"
          >
            <ul className="container-786 flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-lg font-medium text-ink hover:bg-mint-pale"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="#solutions"
                  onClick={() => setOpen(false)}
                  className="btn btn-forest w-full"
                >
                  Invest Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
