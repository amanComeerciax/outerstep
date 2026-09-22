"use client";

import React from "react";

export function AboutHeroSection() {
  return (
    <section className="relative w-full max-w-full bg-[#edf2f2] pt-32 sm:pt-40 md:pt-44 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(42,99,105,0.06),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.22em] text-[#4a7277] uppercase font-medium">
            OUR BELIEF
          </span>
          <div className="w-10 sm:w-16 h-[1px] bg-[#2a6369]/25" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Bold Headline */}
          <div className="lg:col-span-7">
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[86px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#0a3a40]">
              Opportunities
              <br />
              shouldn’t depend
              <br />
              <span className="text-[#2a6369] font-medium">
                on geography.
              </span>
            </h1>
          </div>

          {/* Right Column: Mission Paragraphs */}
          <div className="lg:col-span-5 lg:pt-4 space-y-4 sm:space-y-5 text-[#2a6369] font-sans-clean text-base sm:text-[17px] md:text-lg leading-relaxed max-w-xl">
            <p className="font-medium text-[#0a3a40]">
              Great products exist everywhere.
            </p>
            <p>
              But access to the right buyers doesn’t.
            </p>
            <p className="text-[#36666c] leading-relaxed">
              We believe every exporter no matter their size or location should have the same chance to reach global markets, grow sustainably, and be recognised for the value they create.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
