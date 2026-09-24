"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/components/ModalProvider";

export function AboutCtaSection() {
  const { openModal } = useModal();

  return (
    <section className="relative w-full max-w-full bg-[#0a3a40] border-t border-[#2a6369]/20 text-white py-16 sm:py-20 md:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Real port photo, tinted to the brand teal so the text stays readable */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/shipping-containers.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-[#0a3a40]/75 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* UPPER GLOBE CONTENT */}
        <div className="flex flex-col items-center">
          {/* Uppercase Tag */}
          <span className="font-mono-tech text-[10px] sm:text-[11px] tracking-[0.22em] text-[#2dd4bf] uppercase font-semibold mb-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            LET&apos;S BUILD A MORE CONNECTED WORLD
          </span>

          {/* Main Headline */}
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-[-0.03em] text-white max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            See whether your product fits.
          </h2>
        </div>

        <div className="h-6 sm:h-8" />

        {/* BOTTOM GLOBE CONTENT */}
        <div className="flex flex-col items-center">
          {/* Subtitle */}
          <p className="font-sans-clean text-sm sm:text-base md:text-[17px] text-white font-normal sm:font-medium leading-relaxed max-w-lg mb-6 sm:mb-7 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Tell us what you export and we&apos;ll show you where we can find buyers for
            it. If we can&apos;t,{" "}
            <span className="text-white font-semibold underline decoration-[#2dd4bf] decoration-2 underline-offset-4">
              we&apos;ll say so.
            </span>
          </p>

          {/* Primary White Button */}
          <button
            onClick={() => openModal()}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#0a3a40] hover:bg-[#edf2f2] text-sm sm:text-[15px] font-sans-clean font-semibold transition-all duration-200 shadow-[0_8px_30px_rgba(45,212,191,0.25)] hover:shadow-[0_12px_36px_rgba(45,212,191,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
          >
            <span>Book a call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
