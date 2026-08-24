"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const ARTICLES = [
  {
    image: "/assets/our-approach.jpg",
    category: "VENTURE INSIGHT",
    title: "Industry Trends: Adapting to the Digital Transformation Era",
    date: "February 12, 2026",
    readTime: "5 Min Read",
  },
  {
    image: "/assets/about-pill-1.jpg",
    category: "SUSTAINABILITY SPOTLIGHT",
    title: "Green Innovations: Spotlight on Sustainability in the Tech Sector",
    date: "February 12, 2026",
    readTime: "5 Min Read",
  },
  {
    image: "/assets/investment-meeting.png",
    category: "STRATEGIC PARTNERSHIPS",
    title: "Forging Success: How Strategic Partnerships Drive Growth in Today's Market",
    date: "January 30, 2026",
    readTime: "5 Min Read",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section-pad bg-white">
      <div className="container-786">
        <Reveal className="max-w-3xl">
          <span className="eyebrow eyebrow-dot">BLOG</span>
          <h2 className="mt-4 font-sans text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.08] tracking-[-0.02em] text-[#14231D]">
            Discover our latest{" "}
            <span className="font-playfair-italic font-normal text-[#32A563]">
              blog posts.
            </span>
          </h2>
        </Reveal>

        {/* 3 Blog Cards Grid matching reference screenshot */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <Reveal
              key={article.title}
              as="article"
              delay={i * 0.08}
              className="flex flex-col group cursor-pointer"
            >
              {/* Rounded Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Category */}
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B6B62]">
                  {article.category}
                </span>
                <h3 className="mt-2.5 font-sans text-xl sm:text-2xl font-bold leading-snug tracking-tight text-[#14231D] group-hover:text-[#32A563] transition-colors">
                  {article.title}
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-medium text-[#5B6B62]">
                  {article.date} &nbsp;•&nbsp; {article.readTime}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
