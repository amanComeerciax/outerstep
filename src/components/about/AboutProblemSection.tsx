"use client";

import React from "react";

export function AboutProblemSection() {
  return (
    <section className="w-full max-w-full bg-[#edf2f2] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-[#4a7277] uppercase font-medium">
            THE PROBLEM
          </span>
          <div className="w-10 sm:w-16 h-[1px] bg-[#2a6369]/25" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-24">
          {/* Left Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#0a3a40]">
              Exporting is hard.
              <br />
              <span className="text-[#2a6369] font-medium">
                It shouldn’t be.
              </span>
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-5 lg:pt-3">
            <p className="font-sans-clean text-base sm:text-lg md:text-[19px] text-[#2a6369] leading-relaxed max-w-xl">
              Exporters face fragmented data, limited buyer access, high costs and
              time-consuming outreach. Valuable opportunities are often missed
              not because the products aren’t good, but because the system is
              broken.
            </p>
          </div>
        </div>

        {/* Wavy Journey Timeline Visualization */}
        <div className="relative w-full pt-8 pb-12">
          {/* Desktop & Tablet SVG Wave Line */}
          <div className="relative w-full h-[220px] hidden sm:block">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 200"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2a6369" stopOpacity="0.2" />
                  <stop offset="35%" stopColor="#2a6369" stopOpacity="0.45" />
                  <stop offset="70%" stopColor="#2a6369" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#0a3a40" stopOpacity="0.75" />
                </linearGradient>
              </defs>

              {/* Sine / Bezier Flowing Wave */}
              <path
                d="M 10 95 C 50 95, 80 105, 125 105 C 190 105, 230 60, 310 60 C 340 60, 355 85, 375 90 C 420 100, 460 120, 520 120 C 570 120, 595 70, 625 70 C 670 70, 720 55, 780 55 C 830 55, 855 80, 875 85 C 910 92, 940 100, 970 100"
                fill="none"
                stroke="url(#waveGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Node 1: Scattered information (x=125, y=105) */}
              <line x1="125" y1="105" x2="125" y2="140" stroke="#2a6369" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
              <circle cx="125" cy="105" r="4.5" fill="#2a6369" />
              <circle cx="125" cy="105" r="9" stroke="#2a6369" strokeWidth="1" opacity="0.3" />

              {/* Node 2: Unverified buyers (x=375, y=90) */}
              <line x1="375" y1="90" x2="375" y2="140" stroke="#2a6369" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
              <circle cx="375" cy="90" r="4.5" fill="#2a6369" />
              <circle cx="375" cy="90" r="9" stroke="#2a6369" strokeWidth="1" opacity="0.3" />

              {/* Node 3: Time-consuming outreach (x=625, y=70) */}
              <line x1="625" y1="70" x2="625" y2="140" stroke="#2a6369" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
              <circle cx="625" cy="70" r="4.5" fill="#2a6369" />
              <circle cx="625" cy="70" r="9" stroke="#2a6369" strokeWidth="1" opacity="0.3" />

              {/* Node 4: High cost and uncertainty (x=875, y=85) */}
              <line x1="875" y1="85" x2="875" y2="140" stroke="#2a6369" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
              <circle cx="875" cy="85" r="4.5" fill="#2a6369" />
              <circle cx="875" cy="85" r="9" stroke="#2a6369" strokeWidth="1" opacity="0.3" />

              {/* End Node: Exclamation Mark circle (x=970, y=100) */}
              <circle cx="970" cy="100" r="15" fill="#f8fafc" stroke="#0a3a40" strokeWidth="1.5" className="shadow-sm" />
              <text
                x="970"
                y="105"
                textAnchor="middle"
                fontSize="15"
                fontWeight="700"
                fill="#0a3a40"
                fontFamily="'Instrument Sans', sans-serif"
              >
                !
              </text>
            </svg>

            {/* Labels positioned precisely below the nodes */}
            <div className="absolute top-[148px] left-0 w-full grid grid-cols-4 text-center">
              <div className="flex flex-col items-center">
                <span className="font-sans-clean text-xs md:text-sm font-medium text-[#0a3a40] max-w-[140px] leading-tight">
                  Scattered information
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-sans-clean text-xs md:text-sm font-medium text-[#0a3a40] max-w-[140px] leading-tight">
                  Unverified buyers
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-sans-clean text-xs md:text-sm font-medium text-[#0a3a40] max-w-[150px] leading-tight">
                  Time-consuming outreach
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-sans-clean text-xs md:text-sm font-medium text-[#0a3a40] max-w-[150px] leading-tight">
                  High cost and uncertainty
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Fallback: Vertical Step Flow */}
          <div className="sm:hidden space-y-6 relative pl-6 border-l-2 border-[#2a6369]/20 ml-2">
            {[
              { title: "Scattered information", desc: "Data is fragmented across hundreds of disparate databases and trade registries." },
              { title: "Unverified buyers", desc: "Difficult to separate legitimate volume importers from spam and broker intermediaries." },
              { title: "Time-consuming outreach", desc: "Months spent sending cold emails and making unanswered calls." },
              { title: "High cost and uncertainty", desc: "Massive trade show expenses and agent commissions with no guaranteed deal." },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#edf2f2] border-2 border-[#0a3a40] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2a6369]" />
                </div>
                <h4 className="font-sans-clean text-sm font-semibold text-[#0a3a40]">
                  {step.title}
                </h4>
                <p className="font-sans-clean text-xs text-[#2a6369] mt-0.5">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
