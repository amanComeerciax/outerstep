"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorldMap } from "@/components/ui/world-map";

export function AboutVisionSection() {
  return (
    <section className="relative w-full max-w-full bg-[#062529] border-y border-[#124248] text-white py-20 sm:py-28 md:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Refined architectural gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_25%,#0b3d44_0%,#062529_65%)]" />

      {/* Centered Max-Width Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main 2-Column Grid: Content on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* LEFT COLUMN: Section Tag, Headline, CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Section Tag */}
              <div className="flex items-center gap-3 mb-8 sm:mb-12">
                <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.22em] text-[#2dd4bf] uppercase font-medium">
                  OUR VISION
                </span>
                <div className="w-12 sm:w-16 h-[1px] bg-[#2dd4bf]/40" />
              </div>

              {/* Main Headline */}
              <h2 className="font-headline text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] font-semibold leading-[1.05] tracking-[-0.035em] text-white">
                A world where
                <br />
                every product
                <br />
                can find{" "}
                <span className="text-[#2dd4bf] font-medium">
                  its market.
                </span>
              </h2>
            </div>

            {/* Bottom Left CTA Button */}
            <div className="mt-10 sm:mt-14 lg:mt-16">
              <Link
                href="/#how-it-works"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/40 text-white text-sm font-sans-clean font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>See how we're building it</span>
                <ArrowRight className="w-4 h-4 text-[#2dd4bf] group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Description at Top-Right, Seamless World Map Below */}
          <div className="lg:col-span-7 flex flex-col justify-between relative">
            {/* Seamless World Map with Realistic, Non-Intersecting Trade Corridors */}
            <div className="relative w-full flex-1 flex flex-col justify-center my-auto">
              <WorldMap
                className="w-full bg-transparent rounded-none"
                lineColor="#2dd4bf"
                dotColor="#FFFFFF40"
                dots={[
                  {
                    // Americas corridor: Houston (USA) -> Callao (Peru)
                    start: { lat: 29.7604, lng: -95.3698, label: "Houston" },
                    end: { lat: -12.0566, lng: -77.1181, label: "Callao" },
                  },
                  {
                    // Transatlantic corridor: Santos (Brazil) -> Rotterdam (Netherlands)
                    start: { lat: -23.9608, lng: -46.3336, label: "Santos" },
                    end: { lat: 51.9244, lng: 4.4777, label: "Rotterdam" },
                  },
                  {
                    // Mediterranean corridor: Alexandria (Egypt) -> Hamburg (Germany)
                    start: { lat: 31.2001, lng: 29.9187, label: "Alexandria" },
                    end: { lat: 53.5511, lng: 9.9937, label: "Hamburg" },
                  },
                  {
                    // Arabian Sea corridor: Mumbai (India) -> Dubai (UAE)
                    start: { lat: 19.076, lng: 72.8777, label: "Mumbai" },
                    end: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
                  },
                  {
                    // Asia-Pacific corridor: Tokyo (Japan) -> Sydney (Australia)
                    start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
                    end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
                  },
                ]}
              />

              {/* Directional Labels positioned relative to the map */}
              <div className="flex items-end justify-between pt-2 px-2 text-white/60 font-mono-tech text-[10px] sm:text-[11px] tracking-[0.18em] uppercase select-none pointer-events-none">
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-white/40">FROM</span>
                  <span className="text-white/80 font-medium">LOCAL STRENGTHS</span>
                </div>

                <div className="flex flex-col items-end leading-tight text-right">
                  <span className="text-white/40">TO</span>
                  <span className="text-white/80 font-medium">GLOBAL</span>
                  <span className="text-white/80 font-medium">OPPORTUNITIES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
