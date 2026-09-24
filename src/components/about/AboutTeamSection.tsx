"use client";

import React from "react";
import { ArrowRight, Globe } from "lucide-react";
import { useModal } from "@/components/ModalProvider";

export function AboutTeamSection() {
  const { openModal } = useModal();

  return (
    <section className="relative w-full max-w-full bg-[#edf2f2] py-20 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden">


      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Centered Section Tag with Lines */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <div className="w-8 sm:w-16 h-[1px] bg-[#2a6369]/25" />
          <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-[#4a7277] uppercase font-medium">
            THE PEOPLE BEHIND OUTERSTEP
          </span>
          <div className="w-8 sm:w-16 h-[1px] bg-[#2a6369]/25" />
        </div>

        {/* Centered Main Headline */}
        <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0a3a40] max-w-3xl">
          Built by people who
          <br />
          <span className="text-[#2a6369] font-medium">
            believe in a more open world.
          </span>
        </h2>

        {/* Centered Subtitle */}
        <div className="mt-6 sm:mt-8 space-y-2 text-[#2a6369] font-sans-clean text-base sm:text-lg leading-relaxed max-w-2xl">
          <p className="text-[#36666c]">
            We are a small, focused team with a big belief that global trade
            should be more open, more accessible and more fair.
          </p>
        </div>

        {/* Centered Action Button */}
        <button
          onClick={() => openModal()}
          className="group mt-8 sm:mt-10 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0a3a40] text-white hover:bg-[#072a2e] text-sm font-sans-clean font-semibold transition-all duration-200 shadow-[0_4px_14px_0_rgba(10,58,64,0.25)] hover:shadow-[0_6px_20px_rgba(10,58,64,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
        >
          <span>Meet the team</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>


        {/* Right Floating Element: Circular Rotating Stamp Badge */}
        <div className="hidden md:flex absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 select-none">
          <div className="relative w-36 h-36 lg:w-44 lg:h-44 flex items-center justify-center">
            {/* Center Globe Icon */}
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-[#2a6369]/30 flex items-center justify-center text-[#0a3a40] bg-[#edf2f2]/80 backdrop-blur-sm z-10 shadow-sm">
              <Globe className="w-6 h-6 lg:w-8 lg:h-8 stroke-[1.25] text-[#0a3a40]" />
            </div>

            {/* Circular Text SVG in IBM Plex Mono */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin-slow"
              viewBox="0 0 200 200"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                />
              </defs>
              <text
                className="font-mono-tech text-[7.5px] uppercase tracking-[0.12em] fill-[#2a6369]"
                fontWeight="500"
              >
                <textPath
                  href="#circlePath"
                  startOffset="0%"
                  textLength="439.8"
                  lengthAdjust="spacing"
                >
                  • PURPOSE • TECHNOLOGY • GLOBAL IMPACT • PURPOSE • TECHNOLOGY • GLOBAL IMPACT{" "}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
