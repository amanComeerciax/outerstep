"use client";

import React from "react";
import { Database, Zap, User, BarChart3 } from "lucide-react";

const approachPillars = [
  {
    icon: Database,
    title: "Global buyer intelligence",
    desc: "Aggregated customs manifests, shipping bills, and import volumes across 80+ jurisdictions.",
  },
  {
    icon: Zap,
    title: "AI-powered matching",
    desc: "Proprietary models mapping exporter specifications directly against verified active buyer demand.",
  },
  {
    icon: User,
    title: "Human-led outreach support",
    desc: "Trade veterans crafting nuanced, multilingual outreach that commands executive attention.",
  },
  {
    icon: BarChart3,
    title: "End-to-end growth support",
    desc: "Structured qualification, sample coordination, and delivery to confirmed contract closing.",
  },
];

export function AboutApproachSection() {
  return (
    <section className="w-full max-w-full bg-[#edf2f2] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-[#4a7277] uppercase font-medium">
            THE APPROACH
          </span>
          <div className="w-10 sm:w-16 h-[1px] bg-[#2a6369]/25" />
        </div>

        {/* 2-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
          {/* Left Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#0a3a40]">
              Real opportunities.
              <br />
              <span className="text-[#2a6369] font-medium">
                Smarter connections.
              </span>
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-5 lg:pt-3">
            <p className="font-sans-clean text-base sm:text-lg md:text-[19px] text-[#2a6369] leading-relaxed max-w-xl">
              We combine AI, verified trade data and human expertise to help
              exporters discover genuine buyers, understand demand and take the
              next step with confidence.
            </p>
          </div>
        </div>

        {/* 4 Feature Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#2a6369]/20 divide-y sm:divide-y-0 sm:divide-x divide-[#2a6369]/20">
          {approachPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-[#e4ecec]/60"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/70 border border-[#2a6369]/15 flex items-center justify-center shrink-0 text-[#0a3a40] group-hover:scale-110 group-hover:text-[#2a6369] transition-all shadow-sm">
                    <IconComponent className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="font-sans-clean text-base sm:text-[17px] font-semibold text-[#0a3a40] leading-snug pt-1">
                    {pillar.title}
                  </h3>
                </div>
                <p className="font-sans-clean text-xs sm:text-sm text-[#4a7277] leading-relaxed pl-14">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
