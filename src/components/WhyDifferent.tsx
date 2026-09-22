"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, SlidersHorizontal, Layers } from "lucide-react";

interface StepCardData {
  id: number;
  stepNum: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  iconBorder: string;
}

const cardsData: StepCardData[] = [
  {
    id: 1,
    stepNum: "01",
    title: "Buyers who already import this",
    description:
      "We track actual customs records, manifests, and import filings to find companies that regularly buy your exact HS code.",
    icon: FileText,
    iconBg: "bg-[#0a3a40]/8",
    iconColor: "text-[#0a3a40]",
    iconBorder: "border-[#0a3a40]/15",
  },
  {
    id: 2,
    stepNum: "02",
    title: "One screen, no chasing",
    description:
      "What reaches your desk is a buyer asking to buy, with quantity, incoterm, and port already extracted.",
    icon: SlidersHorizontal,
    iconBg: "bg-[#2a6369]/12",
    iconColor: "text-[#2a6369]",
    iconBorder: "border-[#2a6369]/20",
  },
  {
    id: 3,
    stepNum: "03",
    title: "Nothing until it works",
    description:
      "Every introduction states what it costs and what it commits you to, per deal, before the buyer is revealed.",
    icon: Layers,
    iconBg: "bg-[#2dd4bf]/20",
    iconColor: "text-[#0a3a40]",
    iconBorder: "border-[#2dd4bf]/40",
  },
];

export default function WhyDifferent() {
  return (
    <section className="relative w-full max-w-full bg-[#edf2f2] text-[#0a3a40] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
        <div className="font-mono-tech text-[11px] sm:text-xs tracking-[0.22em] text-[#2a6369] uppercase font-semibold mb-2.5 sm:mb-3">
          HOW WE INTRODUCE BUYERS
        </div>
        <h2 className="font-headline text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0a3a40] mb-3 sm:mb-4 px-2">
          Three principles that protect your time.
        </h2>
        <p className="font-sans-clean text-sm sm:text-base md:text-lg text-[#2a6369]/85 leading-relaxed max-w-xl mx-auto px-4">
          Built from the ground up to replace cold outreach with verified, high-intent introductions.
        </p>
      </div>

      {/* Main Container with Cards */}
      <div className="relative max-w-6xl mx-auto w-full">
        {/* 3 Interactive Cards with Silky Smooth Slide-in Animation */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {cardsData.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: -40, y: 20, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.14,
                  ease: [0.16, 1, 0.3, 1], // Apple/Stripe-style smooth exponential deceleration
                }}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                style={{ transform: "translateZ(0)" }}
                className="group relative bg-white/95 backdrop-blur-sm rounded-[22px] sm:rounded-[26px] md:rounded-[28px] p-6 sm:p-7 md:p-8 lg:p-10 border border-[#2a6369]/15 shadow-[0_10px_35px_rgba(10,58,64,0.06),0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_22px_45px_rgba(10,58,64,0.11)] hover:border-[#2dd4bf]/70 transition-all duration-300 min-h-0 md:min-h-[400px] lg:min-h-[420px] flex flex-col justify-center will-change-transform"
              >
                {/* Top Row: Icon Badge & Numeral */}
                <div className="flex items-center justify-between mb-6 sm:mb-8 lg:mb-9">
                  {/* Rounded Icon Box */}
                  <div
                    className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-15 lg:h-15 rounded-2xl ${card.iconBg} ${card.iconColor} ${card.iconBorder} border flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 stroke-[2]" />
                  </div>

                  {/* Brand Tech Numeral */}
                  <span className="font-mono-tech font-bold text-3xl sm:text-4xl md:text-[44px] lg:text-5xl text-[#2a6369]/35 group-hover:text-[#0a3a40] transition-colors duration-200 select-none leading-none tracking-tight">
                    {card.stepNum}
                  </span>
                </div>

                {/* Title in Clean Brand Headline Font */}
                <h3 className="font-headline font-bold text-xl sm:text-[22px] md:text-2xl lg:text-[26px] text-[#0a3a40] tracking-tight leading-[1.22] mb-3 sm:mb-4">
                  {card.title}
                </h3>

                {/* Description Paragraph */}
                <p className="font-sans-clean text-sm sm:text-[15px] md:text-[16px] leading-relaxed text-[#2a6369]/85">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
