"use client";

import React from "react";

const impactStats = [
  {
    value: "$20M+",
    label: "Buyer inquiries introduced",
    subtext: "Verified commercial intent across target export categories",
  },
  {
    value: "20+",
    label: "Buyer inquiries monthly",
    subtext: "Consistent dealflow generated per active enterprise exporter",
  },
  {
    value: "2",
    label: "Deals closed from a standing start",
    subtext: "Initial corridor contracts finalized within first 90 days",
  },
  {
    value: "$1M+",
    label: "Trade value facilitated",
    subtext: "Contracted shipments completed through direct introductions",
  },
];

export function AboutImpactSection() {
  return (
    <section className="w-full max-w-full bg-[#edf2f2] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-[#4a7277] uppercase font-medium">
            OUR IMPACT
          </span>
          <div className="w-10 sm:w-16 h-[1px] bg-[#2a6369]/25" />
        </div>

        {/* 2-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-24">
          {/* Left Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#0a3a40]">
              A growing network.
              <br />
              <span className="text-[#2a6369] font-medium">
                A bigger tomorrow.
              </span>
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-5 lg:pt-3">
            <p className="font-sans-clean text-base sm:text-lg md:text-[19px] text-[#2a6369] leading-relaxed max-w-xl">
              Every connection creates new possibilities for businesses,
              communities and economies.
            </p>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#2a6369]/20 divide-y sm:divide-y-0 sm:divide-x divide-[#2a6369]/20">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="py-10 sm:py-12 px-6 sm:px-8 lg:px-10 flex flex-col justify-between group hover:bg-[#e4ecec]/50 transition-colors duration-200"
            >
              <div>
                <div className="font-headline font-semibold text-4xl sm:text-5xl lg:text-[54px] text-[#0a3a40] tracking-tight leading-none mb-3 tabular-nums group-hover:text-[#124b52] transition-colors">
                  {stat.value}
                </div>
                <div className="font-sans-clean text-sm sm:text-base font-medium text-[#0a3a40] leading-snug mb-2">
                  {stat.label}
                </div>
              </div>
              <p className="font-sans-clean text-xs text-[#5e8286] leading-relaxed mt-2">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
