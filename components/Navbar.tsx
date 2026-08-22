"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "How It Works", href: "#how" },
  { label: "Founders", href: "#founders" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Thin mint accent line at very top */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-mint" />

      <div className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="container-786 !px-0">
          <div className="flex items-center justify-between gap-4 rounded-card border border-hairline/60 bg-cream px-4 py-3 transition-colors duration-200 sm:px-6">
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

            {/* Center: flat anchor links (desktop) */}
            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-pill px-3 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:text-mint-dark"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right: single CTA (desktop) */}
            <div className="hidden items-center gap-2 lg:flex">
              <Link href="#products" className="btn btn-dark">
                Invest Now <ArrowRight size={16} />
              </Link>
            </div>

            {/* Mobile: hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-pill text-ink lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-cream lg:hidden"
          >
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <Image
                  src="/assets/logo.svg"
                  alt="786 Ventures"
                  width={110}
                  height={34}
                  className="h-7 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-pill text-ink"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mt-10 flex flex-1 flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 font-display text-3xl text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  href="#products"
                  onClick={() => setMobileOpen(false)}
                  className="btn btn-dark w-full justify-center"
                >
                  Invest Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
