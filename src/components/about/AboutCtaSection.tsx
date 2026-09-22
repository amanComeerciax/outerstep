"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/components/ModalProvider";

export function AboutCtaSection() {
  const { openModal } = useModal();

  return (
    <section className="relative w-full max-w-full bg-[#021214] border-t border-[#124248]/50 text-white py-24 sm:py-32 md:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Luminous Curved Horizon Light Arc */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-10 sm:bottom-14 w-[700px] sm:w-[1000px] lg:w-[1200px] h-[180px] overflow-hidden opacity-80">
        <svg
          viewBox="0 0 1200 200"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="horizonGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
              <stop offset="25%" stopColor="#2dd4bf" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#5eead4" stopOpacity="0.95" />
              <stop offset="75%" stopColor="#2dd4bf" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
            </linearGradient>
            <filter id="lightBeamBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 50 180 Q 600 20 1150 180"
            stroke="url(#horizonGlow)"
            strokeWidth="3"
            fill="none"
            filter="url(#lightBeamBlur)"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Uppercase Tag */}
        <span className="font-mono-tech text-[10px] sm:text-[11.5px] tracking-[0.25em] text-[#2dd4bf]/90 uppercase font-medium mb-4">
          LET'S BUILD A MORE CONNECTED WORLD
        </span>

        {/* Main Headline */}
        <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold leading-[1.06] tracking-[-0.035em] text-white mb-5 max-w-2xl">
          See whether your product fits.
        </h2>

        {/* Subtitle */}
        <p className="font-sans-clean text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mb-10">
          Tell us what you export and we'll show you where we can find buyers for
          it. If we can't,{" "}
          <span className="text-white font-medium underline decoration-[#2dd4bf]/60 underline-offset-4">
            we'll say so.
          </span>
        </p>

        {/* Primary White Button */}
        <button
          onClick={() => openModal()}
          className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#0a3a40] hover:bg-[#edf2f2] text-sm sm:text-[15px] font-sans-clean font-semibold transition-all duration-200 shadow-[0_8px_30px_rgba(45,212,191,0.18)] hover:shadow-[0_12px_36px_rgba(45,212,191,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
        >
          <span>Book a call</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </section>
  );
}
