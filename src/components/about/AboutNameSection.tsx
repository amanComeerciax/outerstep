import React from "react";

export function AboutNameSection() {
  return (
    <section className="w-full max-w-full bg-[#edf2f2] border-b border-[#0a3a40]/10 py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2
          data-reveal
          className="font-headline text-6xl sm:text-7xl md:text-8xl font-semibold tracking-[-0.04em] leading-none"
        >
          <span className="text-[#98a5a5]">Outer</span>
          <span className="text-[#98a5a5] font-normal mx-2 sm:mx-3">+</span>
          <span className="text-[#0a3a40] font-bold">step</span>
        </h2>

        <p
          data-reveal
          data-reveal-delay="0.1"
          className="font-sans-clean text-lg sm:text-xl md:text-[22px] text-[#4a5f5e] leading-relaxed max-w-[480px] mt-8 sm:mt-10"
        >
          The market outside your borders, and the first step into it. We take
          that step for you, before you are asked to do anything.
        </p>
      </div>
    </section>
  );
}
